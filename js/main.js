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
      ireland: {
        name: "Irlanda",
        description: "Estudia en Dublín, Cork, Galway y Limerick. Oportunidad de trabajar 20 horas semanales durante los estudios."
      },
      uk: {
        name: "Inglaterra",
        description: "Programas en Londres, Manchester, Cambridge y Oxford. Experiencia en una de las capitales educativas del mundo."
      },
      spain: {
        name: "España",
        description: "Estudia en Madrid, Barcelona, Valencia y Sevilla. Combina inglés con la cultura española."
      },
      malta: {
        name: "Malta",
        description: "Clima mediterráneo y educación de calidad. Ideal para cursos de inglés intensivos."
      },
      cyprus: {
        name: "Chipre",
        description: "Destino emergente con excelentes programas de inglés y formaciones profesionales."
      }
    },
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
      email: "info@edulingo.com",
      phone: "+34 91 123 4567",
      whatsapp: "WhatsApp",
      form_name: "Nombre",
      form_email: "Email",
      form_phone: "Teléfono",
      form_interest: "Interés",
      form_message: "Mensaje",
      form_submit: "Enviar",
      form_terms: "Acepto los términos y condiciones",
      form_interest_options: [
        "Selecciona tu interés",
        "Cursos de Inglés",
        "Formaciones Profesionales",
        "Programas Universitarios",
        "Consultoría General"
      ]
    },
    footer: {
      about: "Edu Lingo es tu aliado en educación internacional. Más de 15 años de experiencia ayudando estudiantes a alcanzar sus sueños.",
      rights: "Derechos reservados © 2026 Edu Lingo. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      company: "Empresa",
      programs_link: "Programas",
      destinations_link: "Destinos",
      support: "Soporte",
      contact_us: "Contacto",
      faq: "Preguntas Frecuentes"
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
      email: "info@edulingo.com",
      phone: "+34 91 123 4567",
      whatsapp: "WhatsApp",
      form_name: "Nome",
      form_email: "Email",
      form_phone: "Telefone",
      form_interest: "Interesse",
      form_message: "Mensagem",
      form_submit: "Enviar",
      form_terms: "Aceito os termos e condições",
      form_interest_options: [
        "Selecione seu interesse",
        "Cursos de Inglês",
        "Formações Profissionais",
        "Programas Universitários",
        "Consultoria Geral"
      ]
    },
    footer: {
      about: "Edu Lingo é seu aliado em educação internacional. Mais de 15 anos de experiência ajudando estudantes a alcançar seus sonhos.",
      rights: "Direitos reservados © 2026 Edu Lingo. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos e Condições",
      company: "Empresa",
      programs_link: "Programas",
      destinations_link: "Destinos",
      support: "Suporte",
      contact_us: "Contato",
      faq: "Perguntas Frequentes"
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
