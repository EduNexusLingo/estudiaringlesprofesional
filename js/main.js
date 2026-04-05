/* ============================================
   EDU LINGO - Main JavaScript
   Bilingual Support & Interactivity
   ============================================ */

// Content translations
const content = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      programs: "Programas",
      destinations: "Destinos",
      methods: "Métodos",
      videos: "Videos",
      testimonials: "Testimonios",
      contact: "Contacto"
    },
    hero: {
      badge: "✨ Educación Internacional de Calidad",
      title: "Estudia Inglés Profesional en Europa",
      subtitle: "Cursos de inglés y formaciones profesionales con visa de estudio en Irlanda, Inglaterra, España, Malta y Chipre",
      cta: "Reservar Asesoría Gratuita",
      cta_secondary: "Ver Programas"
    },
    about: {
      title: "¿Por qué Edu Lingo?",
      description: "Somos el grupo Edu Lingo, especialistas en educación internacional con más de 15 años de experiencia. Ayudamos a miles de estudiantes a alcanzar sus objetivos académicos y profesionales en Europa.",
      features: [
        {
          title: "Cursos de Inglés Certificados",
          description: "Programas de inglés reconocidos internacionalmente con certificaciones IELTS, Cambridge y TOEIC"
        },
        {
          title: "Formaciones Profesionales",
          description: "Másters y diplomados que permiten obtener visa de estudio y trabajo en Europa"
        },
        {
          title: "Asesoría Personalizada",
          description: "Nuestros expertos te guían en cada paso del proceso de admisión y visa"
        },
        {
          title: "Garantía de Calidad",
          description: "Instituciones acreditadas y reconocidas en toda Europa"
        }
      ]
    },
    programs: {
      title: "Nuestros Programas",
      subtitle: "Elige el programa que mejor se adapte a tus objetivos",
      english_courses: {
        title: "Cursos de Inglés",
        duration: "4 a 12 semanas",
        description: "Programas intensivos de inglés general, de negocios y preparación para exámenes"
      },
      professional_training: {
        title: "Formaciones Profesionales",
        duration: "6 meses a 2 años",
        description: "Másters y diplomados en diversas áreas con oportunidad de trabajar durante los estudios"
      },
      university_programs: {
        title: "Programas Universitarios",
        duration: "3 a 4 años",
        description: "Licenciaturas y postgrados en universidades de prestigio europeo"
      }
    },
	
	
	
    destinations: {
      title: "Destinos Disponibles",
      subtitle: "Estudia inglés en las ciudades más icónicas del mundo",
      ireland: {
        name: "Irlanda",
        description: "Estudia en Dublín o Cork. Oportunidad de trabajar 20 horas semanales durante tus estudios."
      },
      uk: {
        name: "Inglaterra",
        description: "Programas en Londres y Oxford. Vive la experiencia en la cuna del idioma inglés."
      },
      usa: {
        name: "Estados Unidos",
        description: "Estudia en Nueva York, Miami o Boston. Programas intensivos en las mejores academias."
      },
      spain: {
        name: "España",
        description: "Estudia en Madrid o Barcelona. Títulos profesionales con validez en toda la Unión Europea."
      },
      malta: {
        name: "Malta",
        description: "El paraíso del Mediterráneo. Inglés de alta calidad con un clima espectacular todo el año."
      },
      cyprus: {
        name: "Chipre",
        description: "Destino estratégico para negocios y hotelería. Educación europea a costos accesibles."
      }

	
	
    methods: {
      title: "Nuestros Métodos",
      method1: {
        title: "Evaluación Inicial",
        description: "Evaluamos tu nivel de inglés y objetivos para diseñar un programa personalizado"
      },
      method2: {
        title: "Asesoría Experta",
        description: "Nuestros consultores te guían en la selección de institución, programa y visa"
      },
      method3: {
        title: "Apoyo Continuo",
        description: "Acompañamiento durante todo tu proceso de admisión y llegada al país"
      },
      method4: {
        title: "Seguimiento Post-Estudio",
        description: "Ayuda con oportunidades laborales y continuidad académica después de tu programa"
      }
    },
    videos: {
      title: "Videos Inspiradores",
      subtitle: "Conoce las historias de éxito de nuestros estudiantes",
      main_video: "Video Principal - Edu Lingo",
      testimonial1: "Testimonio de María - Dublín",
      testimonial2: "Testimonio de Juan - Londres"
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Estudiantes",
      testimonial1: {
        name: "María García",
        program: "Curso de Inglés - Dublín",
        text: "Excelente experiencia. El equipo de Edu Lingo fue muy profesional y atento. Logré mejorar mi inglés significativamente."
      },
      testimonial2: {
        name: "Juan López",
        program: "Máster Profesional - Londres",
        text: "La asesoría fue impecable. Me ayudaron con todo desde la visa hasta encontrar alojamiento. Muy recomendado."
      },
      testimonial3: {
        name: "Sofia Martins",
        program: "Formación Profesional - Barcelona",
        text: "Melhor decisão que tomei. Edu Lingo tornou tudo fácil e acessível. Agora trabalho na minha área."
      }
    },
    contact: {
      title: "Contacta con Nosotros",
      subtitle: "¿Listo para comenzar tu aventura educativa?",
      email: "lingo@EduNexus.eu",
      phone: "+353 876152691",
      whatsapp: "WhatsApp",
      form_name: "Nombre",
      form_email: "Email",
      form_phone: "Teléfono",
      form_interest: "Interés",
      form_message: "Mensaje",
      form_submit: "Enviar",
      form_interest_options: [
        "Selecciona tu interés",
        "Cursos de Inglés",
        "Formaciones Profesionales",
        "Programas Universitarios",
        "Consultoría General"
      ]
    },
    footer: {
      about: "Edu Lingo miembro de Edu Nexus",
      rights: "Derechos reservados © 2026 Edu Lingo. Todos los derechos reservados.",
      },
    pages: {
      back: "← Volver",
      request_info: "Solicitar Asesoría Gratuita",
      english: {
        title: "Cursos de Inglés",
        subtitle: "Programas intensivos de inglés general, de negocios y preparación para exámenes",
        h2: "Domina el idioma con expertos",
        p: "Nuestros cursos de inglés están diseñados para proporcionarte las herramientas necesarias para comunicarte con fluidez en entornos académicos y profesionales.",
        benefit1: "Certificación Internacional (IELTS, Cambridge, TOEFL)",
        benefit2: "Oportunidad de Trabajar legalmente",
        benefit3: "Visa de Estudio Garantizada",
        benefit4: "Profesores nativos altamente calificados"
      },
      professional: {
        title: "Formaciones Profesionales",
        subtitle: "Másters y diplomados en diversas áreas con oportunidad de trabajar durante los estudios",
        h2: "Impulsa tu carrera internacional",
        p: "Nuestras formaciones profesionales están diseñadas para brindarte habilidades prácticas y teóricas que te permitan destacar en el mercado laboral global.",
        benefit1: "Certificación Internacional reconocida",
        benefit2: "Oportunidad de Trabajar durante los estudios",
        benefit3: "Visa de Estudio Garantizada",
        benefit4: "Convenios con empresas líderes"
      },
      university: {
        title: "Programas Universitarios",
        subtitle: "Licenciaturas y postgrados en universidades de prestigio europeo",
        h2: "Excelencia académica internacional",
        p: "Accede a las mejores universidades de Europa con el respaldo de Edu Lingo. Te asesoramos en todo el proceso de admisión y trámites migratorios.",
        benefit1: "Certificación Internacional de alto nivel",
        benefit2: "Oportunidad de Trabajar legalmente",
        benefit3: "Visa de Estudio Garantizada",
        benefit4: "Acceso a becas y financiamiento"
      },
      ireland: {
        title: "Estudiar en Irlanda",
        subtitle: "Estudia en Dublín o Cork. Oportunidad de trabajar 20 horas semanales.",
        h2: "La Isla Esmeralda te espera",
        p: "Irlanda es uno de los destinos más populares para estudiantes internacionales debido a su hospitalidad, alta calidad educativa y la posibilidad de trabajar legalmente mientras estudias.",
        benefit1: "Permiso de trabajo de 20 horas semanales",
        benefit2: "Entorno 100% angloparlante",
        benefit3: "Cultura vibrante y paisajes increíbles",
        benefit4: "Sede de grandes empresas tecnológicas"
      },
      uk: {
        title: "Estudiar en Inglaterra",
        subtitle: "Programas en Londres y Oxford. Vive la experiencia británica.",
        h2: "La cuna del idioma inglés",
        p: "Inglaterra ofrece una experiencia educativa inigualable con instituciones de renombre mundial y una inmersión cultural profunda en ciudades históricas y cosmopolitas.",
        benefit1: "Inglés británico auténtico",
        benefit2: "Instituciones académicas de prestigio",
        benefit3: "Conexión con toda Europa",
        benefit4: "Entorno multicultural y dinámico"
      },
      usa: {
        title: "Estudiar en Estados Unidos",
        subtitle: "Estudia en Nueva York, Miami o Boston. Programas intensivos de alto nivel.",
        h2: "El sueño americano a tu alcance",
        p: "Estados Unidos ofrece una diversidad académica y cultural sin igual. Desde las vibrantes calles de Nueva York hasta las playas de Miami, encontrarás el entorno perfecto para tu crecimiento.",
        benefit1: "Programas de inmersión total",
        benefit2: "Acceso a universidades de la Ivy League",
        benefit3: "Experiencia cultural global",
        benefit4: "Infraestructura educativa de primer nivel"
      },
      spain: {
        title: "Estudiar en España",
        subtitle: "Títulos profesionales con validez en toda la Unión Europea.",
        h2: "Tu puerta de entrada a Europa",
        p: "España ofrece una educación de alta calidad en un entorno culturalmente rico y acogedor. Obtén títulos reconocidos internacionalmente mientras disfrutas de un estilo de vida inigualable.",
        benefit1: "Títulos con validez en toda la UE",
        benefit2: "Entorno cultural y gastronómico único",
        benefit3: "Clima mediterráneo excepcional",
        benefit4: "Oportunidades de prácticas profesionales"
      },
      malta: {
        title: "Estudiar en Malta",
        subtitle: "Inglés de alta calidad con un clima mediterráneo espectacular.",
        h2: "Aprende inglés bajo el sol",
        p: "Malta es el destino ideal para quienes buscan combinar el aprendizaje del inglés con un estilo de vida relajado y soleado en el corazón del Mediterráneo.",
        benefit1: "Destino económico y seguro",
        benefit2: "Clima soleado casi todo el año",
        benefit3: "Comunidad internacional vibrante",
        benefit4: "Escuelas de inglés acreditadas"
      },
      cyprus: {
        title: "Estudiar en Chipre",
        subtitle: "Excelencia académica a precios competitivos, estilo Inglés nativo.",
        h2: "Calidad educativa en el Mediterráneo",
        p: "Chipre ofrece programas académicos de alta calidad siguiendo el modelo educativo británico, pero con costos de vida y matrícula mucho más accesibles.",
        benefit1: "Costos competitivos y alta calidad",
        benefit2: "Estilo de vida mediterráneo seguro",
        benefit3: "Programas en inglés nativo",
        benefit4: "Oportunidades de transferencia a la UE"
      }
    },
    floating: {
      presencial: "Presenciales",
      presencial_desc: "En Europa",
      online: "Online",
      online_desc: "Próximamente",
      coming_soon: "Próximamente"
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      programs: "Programas",
      destinations: "Destinos",
      methods: "Métodos",
      videos: "Vídeos",
      testimonials: "Depoimentos",
      contact: "Contato"
    },
    hero: {
      badge: "✨ Educação Internacional de Qualidade",
      title: "Estude Inglês Profissional na Europa",
      subtitle: "Cursos de inglês e formações profissionais com visto de estudo na Irlanda, Inglaterra, Espanha, Malta e Chipre",
      cta: "Agendar Consultoria Gratuita",
      cta_secondary: "Ver Programas"
    },
    about: {
      title: "Por que Edu Lingo?",
      description: "Somos o grupo Edu Lingo, especialistas em educação internacional com mais de 15 anos de experiência. Ajudamos milhares de estudantes a alcançar seus objetivos acadêmicos e profissionais na Europa.",
      features: [
        {
          title: "Cursos de Inglês Certificados",
          description: "Programas de inglês reconhecidos internacionalmente com certificações IELTS, Cambridge e TOEIC"
        },
        {
          title: "Formações Profissionais",
          description: "Mestrados e diplomas que permitem obter visto de estudo e trabalho na Europa"
        },
        {
          title: "Consultoria Personalizada",
          description: "Nossos especialistas guiam você em cada etapa do processo de admissão e visto"
        },
        {
          title: "Garantia de Qualidade",
          description: "Instituições acreditadas e reconhecidas em toda a Europa"
        }
      ]
    },
    programs: {
      title: "Nossos Programas",
      subtitle: "Escolha o programa que melhor se adequa aos seus objetivos",
      english_courses: {
        title: "Cursos de Inglês",
        duration: "4 a 12 semanas",
        description: "Programas intensivos de inglês geral, negócios e preparação para exames"
      },
      professional_training: {
        title: "Formações Profissionais",
        duration: "6 meses a 2 anos",
        description: "Mestrados e diplomas em diversas áreas com oportunidade de trabalhar durante os estudos"
      },
      university_programs: {
        title: "Programas Universitários",
        duration: "3 a 4 anos",
        description: "Licenciaturas e pós-graduações em universidades de prestígio europeu"
      }
    },
    destinations: {
      title: "Destinos Disponíveis",
      ireland: {
        name: "Irlanda",
        description: "Estude em Dublin, Cork, Galway e Limerick. Oportunidade de trabalhar 20 horas semanais durante os estudos."
      },
      uk: {
        name: "Inglaterra",
        description: "Programas em Londres, Manchester, Cambridge e Oxford. Experiência em uma das capitais educacionais do mundo."
      },
	  
	   usa: {
        name: "Estados Unidos",
        description: "Estude na cidade mais cosmopolita, Nova York,Miami, Boston, Ciência Moderna." 
      },
	  
      spain: {
        name: "Espanha",
        description: "Estude em Madrid, Barcelona, Valência e Sevilha. Combine inglês com a cultura espanhola."
      },
	  
	        malta: {
        name: "Malta",
        description: "Clima mediterrâneo e educação de qualidade. Ideal para cursos de inglês intensivos."
      },
      cyprus: {
        name: "Chipre",
        description: "Destino emergente com excelentes programas de inglês e formações profissionais."
      }
    },
    methods: {
      title: "Nossos Métodos",
      method1: {
        title: "Avaliação Inicial",
        description: "Avaliamos seu nível de inglês e objetivos para projetar um programa personalizado"
      },
      method2: {
        title: "Consultoria Especializada",
        description: "Nossos consultores guiam você na seleção de instituição, programa e visto"
      },
      method3: {
        title: "Apoio Contínuo",
        description: "Acompanhamento durante todo seu processo de admissão e chegada no país"
      },
      method4: {
        title: "Acompanhamento Pós-Estudo",
        description: "Ajuda com oportunidades de emprego e continuidade acadêmica após seu programa"
      }
    },
    videos: {
      title: "Vídeos Inspiradores",
      subtitle: "Conheça as histórias de sucesso de nossos estudantes",
      main_video: "Vídeo Principal - Edu Lingo",
      testimonial1: "Depoimento de María - Dublin",
      testimonial2: "Depoimento de Juan - Londres"
    },
    testimonials: {
      title: "O que Dizem Nossos Estudantes",
      testimonial1: {
        name: "María García",
        program: "Curso de Inglês - Dublin",
        text: "Excelente experiência. A equipe da Edu Lingo foi muito profissional e atenciosa. Consegui melhorar meu inglês significativamente."
      },
      testimonial2: {
        name: "Juan López",
        program: "Mestrado Profissional - Londres",
        text: "A consultoria foi impecável. Eles me ajudaram com tudo desde o visto até encontrar alojamento. Muito recomendado."
      },
      testimonial3: {
        name: "Sofia Martins",
        program: "Formação Profissional - Barcelona",
        text: "Melhor decisão que tomei. Edu Lingo tornou tudo fácil e acessível. Agora trabalho na minha área."
      }
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Pronto para começar sua aventura educacional?",
      email: "lingo@EduNexus.eu",
      phone: "+353 876152691",
      whatsapp: "WhatsApp",
      form_name: "Nome",
      form_email: "Email",
      form_phone: "Telefone",
      form_interest: "Interesse",
      form_message: "Mensagem",
      form_submit: "Enviar",
      form_interest_options: [
        "Selecione seu interesse",
        "Cursos de Inglês",
        "Formações Profissionais",
        "Programas Universitários",
        "Consultoria Geral"
      ]
    },
    footer: {
      about: "Edu Lingo é seu aliado Edu Nexus CLG",
      rights: "Direitos reservados © 2026 Edu Lingo. Todos los derechos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos e Condições",
      company: "Empresa",
      programs_link: "Programas",
      },
    pages: {
      back: "← Voltar",
      request_info: "Solicitar Consultoria Gratuita",
      english: {
        title: "Cursos de Inglês",
        subtitle: "Programas intensivos de inglês geral, de negócios e preparação para exames",
        h2: "Domine o idioma com especialistas",
        p: "Nossos cursos de inglês são projetados para fornecer as ferramentas necessárias para se comunicar com fluência em ambientes acadêmicos e profissionais.",
        benefit1: "Certificação Internacional (IELTS, Cambridge, TOEFL)",
        benefit2: "Oportunidade de Trabalhar legalmente",
        benefit3: "Visto de Estudo Garantido",
        benefit4: "Professores nativos altamente qualificados"
      },
      professional: {
        title: "Formações Profissionais",
        subtitle: "Mestrados e diplomas em diversas áreas com oportunidade de trabalhar durante os estudos",
        h2: "Impulsione sua carreira internacional",
        p: "Nossas formações profissionais são projetadas para fornecer habilidades práticas e teóricas que permitam que você se destaque no mercado de trabalho global.",
        benefit1: "Certificação Internacional reconhecida",
        benefit2: "Oportunidade de Trabalhar durante os estudos",
        benefit3: "Visto de Estudo Garantido",
        benefit4: "Convênios com empresas líderes"
      },
      university: {
        title: "Programas Universitários",
        subtitle: "Licenciaturas e pós-graduações em universidades de prestígio europeu",
        h2: "Excelência acadêmica internacional",
        p: "Acesse as melhores universidades da Europa com o apoio da Edu Lingo. Assessoramos você em todo o processo de admissão e trâmites migratórios.",
        benefit1: "Certificação Internacional de alto nível",
        benefit2: "Oportunidade de Trabalhar legalmente",
        benefit3: "Visto de Estudo Garantido",
        benefit4: "Acesso a bolsas e financiamento"
      },
      ireland: {
        title: "Estudar na Irlanda",
        subtitle: "Estude em Dublin ou Cork. Oportunidade de trabalhar 20 horas semanais.",
        h2: "A Ilha Esmeralda espera por você",
        p: "A Irlanda é um dos destinos mais populares para estudantes internacionais devido à sua hospitalidade, alta qualidade educacional e à possibilidade de trabalhar legalmente enquanto estuda.",
        benefit1: "Permissão de trabalho de 20 horas semanais",
        benefit2: "Ambiente 100% anglófono",
        benefit3: "Cultura vibrante e paisagens incríveis",
        benefit4: "Sede de grandes empresas de tecnologia"
      },
      uk: {
        title: "Estudar na Inglaterra",
        subtitle: "Programas em Londres e Oxford. Viva a experiência britânica.",
        h2: "O berço da língua inglesa",
        p: "A Inglaterra oferece uma experiência educacional inigualável com instituições de renome mundial e uma imersão cultural profunda em cidades históricas e cosmopolitas.",
        benefit1: "Inglês britânico autêntico",
        benefit2: "Instituições acadêmicas de prestígio",
        benefit3: "Conexão com toda a Europa",
        benefit4: "Ambiente multicultural e dinâmico"
      },
      usa: {
        title: "Estudar nos Estados Unidos",
        subtitle: "Estude em Nova York, Miami ou Boston. Programas intensivos de alto nível.",
        h2: "O sonho americano ao seu alcance",
        p: "Os Estados Unidos oferecem uma diversidade acadêmica e cultural sem igual. Das ruas vibrantes de Nova York às praias de Miami, você encontrará o ambiente perfeito para o seu crescimento.",
        benefit1: "Programas de imersão total",
        benefit2: "Acesso a universidades da Ivy League",
        benefit3: "Experiência cultural global",
        benefit4: "Infraestrutura educacional de primeiro nível"
      },
      spain: {
        title: "Estudar na Espanha",
        subtitle: "Títulos profissionais com validade em toda a União Europeia.",
        h2: "Sua porta de entrada para a Europa",
        p: "A Espanha oferece uma educação de alta qualidade em um ambiente culturalmente rico e acolhedor. Obtenha títulos reconhecidos internacionalmente enquanto desfruta de um estilo de vida inigualável.",
        benefit1: "Títulos com validade em toda a UE",
        benefit2: "Ambiente cultural e gastronômico único",
        benefit3: "Clima mediterrâneo excepcional",
        benefit4: "Oportunidades de estágios profissionais"
      },
      malta: {
        title: "Estudar em Malta",
        subtitle: "Inglês de alta qualidade com um clima mediterrâneo espetacular.",
        h2: "Aprenda inglês sob o sol",
        p: "Malta é o destino ideal para quem busca combinar o aprendizado do inglês com um estilo de vida relaxado e ensolarado no coração do Mediterrâneo.",
        benefit1: "Destino econômico e seguro",
        benefit2: "Clima ensolarado quase todo o ano",
        benefit3: "Comunidade internacional vibrante",
        benefit4: "Escolas de inglês acreditadas"
      },
      cyprus: {
        title: "Estudar no Chipre",
        subtitle: "Excelência acadêmica a preços competitivos, estilo Inglês nativo.",
        h2: "Qualidade educacional no Mediterrâneo",
        p: "O Chipre oferece programas acadêmicos de alta qualidade seguindo o modelo educacional britânico, mas com custos de vida e mensalidades muito mais acessíveis.",
        benefit1: "Custos competitivos e alta qualidade",
        benefit2: "Estilo de vida mediterrâneo seguro",
        benefit3: "Programas em inglês nativo",
        benefit4: "Oportunidades de transferência para a UE"
      }
    },
    floating: {
      presencial: "Presenciais",
      presencial_desc: "Na Europa",
      online: "Online",
      online_desc: "Em breve",
      coming_soon: "Em breve"
    }
  }
};

// Language management
let currentLanguage = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updatePageContent();
  updateLanguageButtons();
}

function t(key) {
  const keys = key.split('.');
  let value = content[currentLanguage];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

function updatePageContent() {
  // Update navigation
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });

  // Update HTML attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-value]').forEach(element => {
    const key = element.getAttribute('data-i18n-value');
    element.value = t(key);
  });
}

function updateLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav?.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('click', (e) => {
  const nav = document.querySelector('nav');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (nav?.classList.contains('active') && !nav.contains(e.target) && !menuBtn?.contains(e.target)) {
    nav.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu
      document.querySelector('nav')?.classList.remove('active');
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('formName').value,
      email: document.getElementById('formEmail').value,
      phone: document.getElementById('formPhone').value,
      interest: document.getElementById('formInterest').value,
      message: document.getElementById('formMessage').value,
      language: currentLanguage
    };
    
    // Log form data (in production, send to server)
    console.log('Form submitted:', formData);
    
    // Show success message
    alert(currentLanguage === 'es' ? '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.' : 'Obrigado pela sua mensagem! Entraremos em contato em breve.');
    
    // Reset form
    contactForm.reset();
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updatePageContent();
  updateLanguageButtons();
});

// Floating Menu
function toggleFloatingMenu() {
  const toggle = document.querySelector('.floating-toggle');
  const items = document.querySelector('.floating-menu-items');
  
  toggle?.classList.toggle('active');
  items?.classList.toggle('active');
}

function closeFloatingMenu() {
  const toggle = document.querySelector('.floating-toggle');
  const items = document.querySelector('.floating-menu-items');
  
  toggle?.classList.remove('active');
  items?.classList.remove('active');
}

// Close floating menu when clicking outside
document.addEventListener('click', (e) => {
  const floatingMenu = document.querySelector('.floating-menu');
  if (floatingMenu && !floatingMenu.contains(e.target)) {
    closeFloatingMenu();
  }
});

// Export for use in HTML
window.setLanguage = setLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFloatingMenu = toggleFloatingMenu;
window.closeFloatingMenu = closeFloatingMenu;
