"""
Backend FastAPI para Edu Lingo - Control Remoto
Gestiona estadísticas de usuarios, IP, geolocalización y preferencias
"""

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import sqlite3
import json
from datetime import datetime
from pathlib import Path
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Edu Lingo Backend", version="1.0.0")

# CORS para permitir requests desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta de la base de datos
DB_PATH = Path(__file__).parent / "usuarios.db"

# Mapa de países con jerga y saludos personalizados
COUNTRY_GREETINGS = {
    'AR': {'demonym': 'Argentino', 'slang': '¡Hola, che, amigazo!', 'flag': '🇦🇷'},
    'CO': {'demonym': 'Colombiano', 'slang': '¡Parce, qué más!', 'flag': '🇨🇴'},
    'MX': {'demonym': 'Mexicano', 'slang': '¡Qué onda, compa!', 'flag': '🇲🇽'},
    'BR': {'demonym': 'Brasileño', 'slang': 'E aí, meu irmão!', 'flag': '🇧🇷'},
    'CL': {'demonym': 'Chileno', 'slang': '¡Buena, po!', 'flag': '🇨🇱'},
    'PE': {'demonym': 'Peruano', 'slang': '¡Habla, causa!', 'flag': '🇵🇪'},
    'VE': {'demonym': 'Venezolano', 'slang': '¡Épale, compadre!', 'flag': '🇻🇪'},
    'EC': {'demonym': 'Ecuatoriano', 'slang': '¡Pana, qué tal!', 'flag': '🇪🇨'},
    'UY': {'demonym': 'Uruguayo', 'slang': '¡Bo, qué tal!', 'flag': '🇺🇾'},
    'ES': {'demonym': 'Español', 'slang': '¡Hola, tío, qué tal!', 'flag': '🇪🇸'},
    'IE': {'demonym': 'Irish', 'slang': "What's the craic, friend!", 'flag': '🇮🇪'},
    'GB': {'demonym': 'British', 'slang': 'Alright mate, how are ya?', 'flag': '🇬🇧'},
    'US': {'demonym': 'American', 'slang': 'Hey there, buddy!', 'flag': '🇺🇸'},
    'CA': {'demonym': 'Canadian', 'slang': 'Hey there, eh!', 'flag': '🇨🇦'},
    'MT': {'demonym': 'Maltese', 'slang': 'Ħello, ħabib!', 'flag': '🇲🇹'},
    'CY': {'demonym': 'Cypriot', 'slang': 'Kalispéra, fíle!', 'flag': '🇨🇾'},
    'PT': {'demonym': 'Portugués', 'slang': 'Olá, amigo!', 'flag': '🇵🇹'},
    'FR': {'demonym': 'Francés', 'slang': 'Salut, mon ami!', 'flag': '🇫🇷'},
    'DE': {'demonym': 'Alemán', 'slang': 'Hallo, Freund!', 'flag': '🇩🇪'},
    'IT': {'demonym': 'Italiano', 'slang': 'Ciao, amico!', 'flag': '🇮🇹'},
}

def init_db():
    """Inicializar la base de datos SQLite"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Tabla de usuarios
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip_address TEXT UNIQUE NOT NULL,
            nombre TEXT,
            edad INTEGER,
            ciudad TEXT,
            pais_code TEXT,
            tipo_estudio TEXT,
            pais_interes TEXT,
            ultima_pagina TEXT,
            primera_visita TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            ultima_visita TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            visitas_totales INTEGER DEFAULT 1,
            datos_json TEXT
        )
    ''')
    
    # Tabla de eventos/logs
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip_address TEXT,
            evento TEXT,
            pagina TEXT,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            datos_json TEXT,
            FOREIGN KEY(ip_address) REFERENCES usuarios(ip_address)
        )
    ''')
    
    conn.commit()
    conn.close()
    logger.info("Base de datos inicializada correctamente")

def get_client_ip(request: Request) -> str:
    """Obtener la IP del cliente (considerando proxies)"""
    if request.client:
        return request.client.host
    return "0.0.0.0"

def get_country_from_ip(ip: str) -> str:
    """
    Obtener el código de país desde la IP.
    En producción, usar un servicio como ip-api.com o maxmind.
    Por ahora, retornamos un placeholder que se puede mejorar.
    """
    # En una implementación real, consultar un servicio de geolocalización
    # Para este MVP, retornamos None y se detecta desde el navegador
    return None

# ─────────────────────────────────────────────────────────────────────────
# ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────

@app.get("/api/health")
async def health_check():
    """Health check del backend"""
    return {"status": "ok", "message": "Backend Edu Lingo funcionando"}

@app.post("/api/usuarios/registrar")
async def registrar_usuario(request: Request):
    """
    Registrar o actualizar un usuario con sus datos personales.
    Esperado en el body:
    {
        "nombre": "Juan",
        "edad": 25,
        "ciudad": "Buenos Aires",
        "pais_code": "AR",
        "tipo_estudio": "ingles",
        "pais_interes": "irlanda",
        "ultima_pagina": "index.html"
    }
    """
    try:
        ip = get_client_ip(request)
        data = await request.json()
        
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Verificar si el usuario ya existe
        cursor.execute("SELECT id, visitas_totales FROM usuarios WHERE ip_address = ?", (ip,))
        existing = cursor.fetchone()
        
        if existing:
            # Actualizar usuario existente
            visitas = existing[1] + 1
            cursor.execute('''
                UPDATE usuarios 
                SET nombre = ?, edad = ?, ciudad = ?, pais_code = ?, 
                    tipo_estudio = ?, pais_interes = ?, ultima_pagina = ?,
                    ultima_visita = CURRENT_TIMESTAMP, visitas_totales = ?,
                    datos_json = ?
                WHERE ip_address = ?
            ''', (
                data.get('nombre'),
                data.get('edad'),
                data.get('ciudad'),
                data.get('pais_code'),
                data.get('tipo_estudio'),
                data.get('pais_interes'),
                data.get('ultima_pagina'),
                visitas,
                json.dumps(data),
                ip
            ))
            logger.info(f"Usuario actualizado: {ip}")
        else:
            # Crear nuevo usuario
            cursor.execute('''
                INSERT INTO usuarios 
                (ip_address, nombre, edad, ciudad, pais_code, tipo_estudio, pais_interes, ultima_pagina, datos_json)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                ip,
                data.get('nombre'),
                data.get('edad'),
                data.get('ciudad'),
                data.get('pais_code'),
                data.get('tipo_estudio'),
                data.get('pais_interes'),
                data.get('ultima_pagina'),
                json.dumps(data)
            ))
            logger.info(f"Nuevo usuario registrado: {ip}")
        
        conn.commit()
        conn.close()
        
        return {
            "success": True,
            "message": "Usuario registrado correctamente",
            "ip": ip,
            "timestamp": datetime.now().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Error registrando usuario: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/usuarios/perfil")
async def obtener_perfil(request: Request):
    """
    Obtener el perfil del usuario actual basado en su IP.
    Retorna nombre, edad, país, interés, última página visitada, etc.
    """
    try:
        ip = get_client_ip(request)
        
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT nombre, edad, ciudad, pais_code, tipo_estudio, pais_interes, 
                   ultima_pagina, visitas_totales, primera_visita, ultima_visita
            FROM usuarios 
            WHERE ip_address = ?
        ''', (ip,))
        
        result = cursor.fetchone()
        conn.close()
        
        if not result:
            return {
                "existe": False,
                "ip": ip,
                "mensaje": "Usuario no registrado"
            }
        
        # Obtener información del país para el saludo personalizado
        pais_code = result[3]
        greeting_info = COUNTRY_GREETINGS.get(pais_code, {
            'demonym': 'Amigo',
            'slang': '¡Hola, bienvenido de vuelta!',
            'flag': '🌍'
        })
        
        return {
            "existe": True,
            "ip": ip,
            "nombre": result[0],
            "edad": result[1],
            "ciudad": result[2],
            "pais_code": pais_code,
            "tipo_estudio": result[4],
            "pais_interes": result[5],
            "ultima_pagina": result[6],
            "visitas_totales": result[7],
            "primera_visita": result[8],
            "ultima_visita": result[9],
            "saludo": greeting_info['slang'],
            "flag": greeting_info['flag'],
            "demonym": greeting_info['demonym']
        }
    
    except Exception as e:
        logger.error(f"Error obteniendo perfil: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/eventos/registrar")
async def registrar_evento(request: Request):
    """
    Registrar un evento (página visitada, acción realizada, etc.)
    Esperado en el body:
    {
        "evento": "page_visit",
        "pagina": "irlanda.html",
        "datos": {...}
    }
    """
    try:
        ip = get_client_ip(request)
        data = await request.json()
        
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO eventos (ip_address, evento, pagina, datos_json)
            VALUES (?, ?, ?, ?)
        ''', (
            ip,
            data.get('evento'),
            data.get('pagina'),
            json.dumps(data.get('datos', {}))
        ))
        
        conn.commit()
        conn.close()
        
        return {
            "success": True,
            "message": "Evento registrado",
            "timestamp": datetime.now().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Error registrando evento: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/estadisticas/resumen")
async def obtener_estadisticas():
    """
    Obtener estadísticas generales (solo para administradores)
    En producción, añadir autenticación
    """
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Total de usuarios únicos
        cursor.execute("SELECT COUNT(*) FROM usuarios")
        total_usuarios = cursor.fetchone()[0]
        
        # Visitas totales
        cursor.execute("SELECT SUM(visitas_totales) FROM usuarios")
        total_visitas = cursor.fetchone()[0] or 0
        
        # Países más visitados
        cursor.execute('''
            SELECT pais_code, COUNT(*) as count 
            FROM usuarios 
            WHERE pais_code IS NOT NULL 
            GROUP BY pais_code 
            ORDER BY count DESC 
            LIMIT 10
        ''')
        paises_top = cursor.fetchall()
        
        # Tipos de estudio más consultados
        cursor.execute('''
            SELECT tipo_estudio, COUNT(*) as count 
            FROM usuarios 
            WHERE tipo_estudio IS NOT NULL 
            GROUP BY tipo_estudio 
            ORDER BY count DESC
        ''')
        estudios_top = cursor.fetchall()
        
        # Destinos más interesantes
        cursor.execute('''
            SELECT pais_interes, COUNT(*) as count 
            FROM usuarios 
            WHERE pais_interes IS NOT NULL 
            GROUP BY pais_interes 
            ORDER BY count DESC
        ''')
        destinos_top = cursor.fetchall()
        
        conn.close()
        
        return {
            "total_usuarios": total_usuarios,
            "total_visitas": total_visitas,
            "paises_top": [{"pais": p[0], "count": p[1]} for p in paises_top],
            "estudios_top": [{"tipo": e[0], "count": e[1]} for e in estudios_top],
            "destinos_top": [{"destino": d[0], "count": d[1]} for d in destinos_top],
            "timestamp": datetime.now().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Error obteniendo estadísticas: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/usuarios/exportar")
async def exportar_usuarios():
    """
    Exportar todos los usuarios en formato JSON (para análisis)
    En producción, añadir autenticación y validación
    """
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT ip_address, nombre, edad, ciudad, pais_code, tipo_estudio, 
                   pais_interes, ultima_pagina, visitas_totales, primera_visita, ultima_visita
            FROM usuarios
            ORDER BY ultima_visita DESC
        ''')
        
        usuarios = cursor.fetchall()
        conn.close()
        
        usuarios_list = []
        for u in usuarios:
            usuarios_list.append({
                "ip": u[0],
                "nombre": u[1],
                "edad": u[2],
                "ciudad": u[3],
                "pais": u[4],
                "tipo_estudio": u[5],
                "pais_interes": u[6],
                "ultima_pagina": u[7],
                "visitas": u[8],
                "primera_visita": u[9],
                "ultima_visita": u[10]
            })
        
        return {
            "total": len(usuarios_list),
            "usuarios": usuarios_list,
            "timestamp": datetime.now().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Error exportando usuarios: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# ─────────────────────────────────────────────────────────────────────────
# INICIALIZACIÓN
# ─────────────────────────────────────────────────────────────────────────

@app.on_event("startup")
async def startup_event():
    """Ejecutar al iniciar la aplicación"""
    init_db()
    logger.info("Aplicación iniciada - Backend Edu Lingo")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
