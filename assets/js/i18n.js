(function(){
    var STORAGE_KEY = 'site_lang';
    var translations = {
        en: {
            "services.cta": "Ver todas las soluciones",
            "about.cta": "Descubrir mas",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.services": "Services",
            "nav.portfolio": "Projects",
            "nav.blog": "Blog",
            "nav.contact": "Contact",
            "button.get_in_touch": "Get in Touch",
            "button.explore_more": "Explore more",
            "search.placeholder": "Search...",
            "banner.email_label": "Email.",
            "banner.email": "logersrl@gmail.com",
            "banner.call_label": "Call.",
            "banner.call": "+54 9 3364 58-5181",
            "about.label": "About us",
            "about.title": "Serving industry since 2011",
            "about.body": "LogerSRL is an Argentine engineering company specialized in industrial IoT, electronic security, and critical monitoring systems. We support private companies and public organizations in their digital transformation processes, integrating technology, data, and operations.",
            "about.subtitle_text": "Regional presence, global vision, results-driven approach.",
            "about.cta": "Discover More",
            "values.industrial.title": "Industrial Ideas",
            "values.industrial.text": "We turn complex industrial challenges into scalable IoT solutions.",
            "values.engineers.title": "Expert Engineers",
            "values.engineers.text": "A technical team with strong expertise in automation, electronic security, and industrial IoT.",
            "values.equipment.title": "Modern Equipment",
            "values.equipment.text": "Best-in-class technology based on open standards and leading manufacturers.",
            "values.support.title": "Project Support",
            "values.support.text": "End-to-end support: design, deployment, commissioning, and ongoing assistance.",
            "metrics.projects.title": "50+ industrial projects",
            "metrics.projects.text": "IoT, CCTV, and monitoring deployments in critical environments.",
            "metrics.adoption.title": "High IoT adoption",
            "metrics.adoption.text": "Projects focused on efficiency, safety, and operational continuity.",
            "metrics.coverage.title": "Wide territorial coverage",
            "metrics.coverage.text": "Solutions deployed across industries, cities, and complex sites.",
            "metrics.scalability.title": "Proven scalability",
            "metrics.scalability.text": "Architectures designed to grow over time.",
            "axis.label": "AXIS Partnership",
            "axis.title": "AXIS Communications Gold Partner",
            "axis.text": "LogerSRL is an AXIS Gold Partner, enabling us to design and deploy advanced IP video solutions, AI-based analytics, and edge applications without complex infrastructure or dedicated servers.",
            "axis.subtitle": "Intelligent video as a core pillar of industrial IoT.",
            "services.label": "Services",
            "services.title": "IoT solutions for the production industry",
            "services.lead": "We deliver end-to-end solutions combining hardware, software, and analytics to turn data into actionable insights.",
            "services.cta": "View All Solution",
            "services.nav.item1": "Industrial IoT and sensing",
            "services.nav.item2": "Intelligent video and edge analytics",
            "services.nav.item3": "Industrial and urban CCTV systems",
            "services.nav.item4": "Integration with existing platforms and systems",
            "services.nav.item5": "Remote monitoring and dashboards",
            "services.nav.item6": "Automation and operational alerts",
            "services.list.item1": "Industrial IoT and sensing",
            "services.list.item2": "Intelligent video and edge analytics",
            "services.list.item3": "Industrial and urban CCTV systems",
            "services.list.item4": "Integration with existing platforms and systems",
            "services.list.item5": "Remote monitoring and dashboards",
            "services.list.item6": "Automation and operational alerts",
            "process.title": "How we work",
            "process.step1.title": "Objectives and needs analysis",
            "process.step1.text": "We understand the operational context and client goals.",
            "process.step2.title": "Solution design",
            "process.step2.text": "We define the IoT architecture, components, and integrations.",
            "process.step3.title": "Execution and deployment",
            "process.step3.text": "We install, integrate, and commission the solution.",
            "portfolio.recent_work": "Recent Work",
            "portfolio.explore_projects": "Explore Large-Scale Projects",
            "projects.acindar.project": "Industrial video surveillance master plan and analytics.",
            "projects.acindar.title": "Acindar (ArcelorMittal) – Industrial CCTV & IoT",
            "projects.acindar.description": "Design and deployment of AXIS-based CCTV systems integrated with video analytics and monitoring platforms for highly critical steelmaking environments.",
            "projects.aes.project": "Remote monitoring of operational and infrastructure variables.",
            "projects.aes.title": "AES – Industrial & energy monitoring",
            "projects.aes.description": "Implementation of IoT solutions for operational data acquisition and centralized visualization, focused on efficiency and service continuity.",
            "projects.ternium.project": "Electronic security systems and intelligent video integration.",
            "projects.ternium.title": "Ternium – Plant security and monitoring",
            "projects.ternium.description": "Integration of industrial video surveillance with edge analytics for operational control and site security.",
            "projects.ldc.project": "Monitoring and security for logistics and industrial environments.",
            "projects.ldc.title": "Louis Dreyfus Company (LDC) – Industrial infrastructure",
            "projects.ldc.description": "IoT and CCTV solutions for process control, perimeter security, and large-scale industrial operations.",
            "projects.sannicolas.project": "Smart city platform and urban monitoring.",
            "projects.sannicolas.title": "City of San Nicolás – Smart City",
            "projects.sannicolas.description": "Deployment of IoT and intelligent video solutions for urban management, security, flow measurement, and decision support.",
            "projects.rafaela.project": "Urban monitoring and data capture systems.",
            "projects.rafaela.title": "City of Rafaela – Urban infrastructure",
            "projects.rafaela.description": "Integration of IoT sensors and visualization platforms to improve public service management.",
            "projects.hospital.project": "IoT monitoring in healthcare environments.",
            "projects.hospital.title": "Hospital San Felipe – IoMT",
            "projects.hospital.description": "Deployment of IoT sensors for environmental control and monitoring of critical variables in healthcare infrastructure.",
            "projects.utn.project": "Monitoring platforms and academic IoT projects.",
            "projects.utn.title": "UTN – San Nicolás Regional Faculty",
            "projects.utn.description": "Implementation of IoT solutions for research, technical education, and validation of industrial technologies.",
            "cta.projects.title": "Over 3,000 successful projects",
            "cta.projects.text": "Technology solutions delivering real operational impact.",
            "cta.interested": "Interested in working with us?",
            "brand.label": "Partners",
            "brand.title": "Partners who trust LogerSRL",
            "brand.description": "We work with strategic technology partners to deliver robust, secure, and long-term solutions.",
            "team.label": "Engineer",
            "team.title": "The Best Industry Experts",
            "team.role.sr_engineer": "Sr. Engineer",
            "team.role.operator": "Operator",
            "team.role.francisco": "Head of Engineering",
            "team.role.luciano": "Software Developer",
            "team.role.pablo": "Field Technician",
            "team.role.lucia": "Systems Operations",
            "team.role.jose": "Administration & Management",
            "contact.label": "Contact",
            "contact.title": "Have a project in mind?",
            "contact.intro": "Contact us to analyze your needs and design a tailored IoT solution for your industry.",
            "contact.subtitle_text": "Engineering, technology, and data powering your operations.",
            "contact.phone_label": "Phone Number",
            "contact.email_label": "Email Address",
            "contact.location_label": "San Nicolás, Argentina",
            "contact.location_text": "Regional presence with projects across industries and cities.",
            "contact.hours_label": "Opening Hour",
            "contact.hours_text": "Mon - Fri: 09am - 07pm",
            "contact.form_title": "Get in Touch",
            "contact.placeholder": "Tell us about your project and we will get back to you soon.",
            "contact.send_button": "Send Message",
            "placeholder.name": "Full Name",
            "placeholder.email": "Email Address",
            "placeholder.inquiry": "Your Inquiry",
            "placeholder.message": "Write Your Message",
            "placeholder.subscribe_email": "Enter Your Email",
            "hero.slide1.title": "Driving the digital transformation of industry",
            "hero.slide1.text": "We design and deploy industrial IoT solutions that combine intelligent video, sensors, advanced analytics, and data platforms to improve safety, operational efficiency, and decision-making.",
            "hero.slide1.subtitle": "Intelligent engineering for industries that demand real results.",
            "hero.slide2.title": "Industrial IoT solutions, end to end",
            "hero.slide2.text": "We connect sensors, connectivity, and dashboards so your data becomes real-time action across your operation.",
            "hero.slide2.subtitle": "From edge devices to scalable platforms.",
            "hero.slide3.title": "Intelligent video and electronic security",
            "hero.slide3.text": "IP CCTV, edge analytics, and critical monitoring to strengthen safety and operational continuity.",
            "hero.slide3.subtitle": "Security, continuity, and control.",
            "hero.title": "Driving the digital transformation of industry",
            "hero.text": "We design and deploy industrial IoT solutions that combine intelligent video, sensors, advanced analytics, and data platforms to improve safety, operational efficiency, and decision-making.",
            "hero.subtitle": "Intelligent engineering for industries that demand real results.",
            "footer.copyright": "&copy; <span id=\"copyright-year\"></span> Loger SRL. All rights reserved. Designed by <a href=\"https://logersrl.com\" rel=\"noopener\">LogerSRL</a>"
        },
        es: {
            "nav.home": "Inicio",
            "nav.about": "Quiénes somos",
            "nav.services": "Servicios",
            "nav.portfolio": "Proyectos",
            "nav.blog": "Blog",
            "nav.contact": "Contacto",
            "button.get_in_touch": "Contacto",
            "button.explore_more": "Explorar",
            "search.placeholder": "Buscar...",
            "banner.email_label": "Correo.",
            "banner.email": "logersrl@gmail.com",
            "banner.call_label": "Teléfono.",
            "banner.call": "+54 9 3364 58-5181",
            "about.label": "Quiénes somos",
            "about.title": "Trabajando en la indsutria desde 2011",
            "about.body": "LogerSRL es una empresa de ingeniería argentina especializada en soluciones IoT industriales, seguridad electrónica y sistemas de monitoreo crítico. Acompañamos a empresas y organizaciones públicas en procesos de digitalización, integrando tecnología, datos y operación.",
            "about.subtitle_text": "Presencia regional, visión global y foco en resultados.",
            "about.cta": "Descubrir mas",
            "values.industrial.title": "Ideas Industriales",
            "values.industrial.text": "Convertimos desafíos industriales complejos en soluciones IoT concretas y escalables.",
            "values.engineers.title": "Ingenieros Expertos",
            "values.engineers.text": "Un equipo técnico con sólida experiencia en automatización, seguridad electrónica e IoT industrial.",
            "values.equipment.title": "Equipamiento Moderno",
            "values.equipment.text": "Tecnología de primer nivel basada en estándares abiertos y fabricantes líderes.",
            "values.support.title": "Soporte de Proyecto",
            "values.support.text": "Acompañamiento integral: diseño, implementación, puesta en marcha y soporte continuo.",
            "metrics.projects.title": "Más de 50 proyectos industriales",
            "metrics.projects.text": "Implementaciones IoT, CCTV y monitoreo en entornos críticos.",
            "metrics.adoption.title": "Alta adopción de soluciones IoT",
            "metrics.adoption.text": "Proyectos orientados a eficiencia, seguridad y continuidad operativa.",
            "metrics.coverage.title": "Cobertura territorial amplia",
            "metrics.coverage.text": "Soluciones desplegadas en industrias, ciudades y entornos complejos.",
            "metrics.scalability.title": "Escalabilidad comprobada",
            "metrics.scalability.text": "Arquitecturas diseñadas para crecer en el tiempo.",
            "axis.label": "Alianza AXIS",
            "axis.title": "Partner Gold de AXIS Communications",
            "axis.text": "LogerSRL es Partner Gold de AXIS, lo que nos permite diseñar e implementar soluciones avanzadas de video IP, analítica basada en IA y aplicaciones en el borde, sin necesidad de infraestructura compleja ni servidores dedicados.",
            "axis.subtitle": "Video inteligente como pilar del IoT industrial.",
            "services.label": "Servicios",
            "services.title": "Soluciones IoT para la industria productiva",
            "services.lead": "Desarrollamos soluciones integrales que combinan hardware, software y analítica para transformar datos en información accionable.",
            "services.cta": "Ver todas las soluciones",
            "services.nav.item1": "IoT industrial y sensorización",
            "services.nav.item2": "Video inteligente y analítica en el borde",
            "services.nav.item3": "Sistemas CCTV industriales y urbanos",
            "services.nav.item4": "Integración de plataformas y sistemas",
            "services.nav.item5": "Monitoreo remoto y tableros de control",
            "services.nav.item6": "Automatización y alertas operativas",
            "services.list.item1": "IoT industrial y sensorización",
            "services.list.item2": "Video inteligente y analítica en el borde",
            "services.list.item3": "Sistemas CCTV industriales y urbanos",
            "services.list.item4": "Integración de plataformas y sistemas",
            "services.list.item5": "Monitoreo remoto y tableros de control",
            "services.list.item6": "Automatización y alertas operativas",
            "process.title": "Cómo trabajamos",
            "process.step1.title": "Objetivos y necesidades",
            "process.step1.text": "Comprendemos el contexto operativo y los objetivos del cliente.",
            "process.step2.title": "Diseño de la solución",
            "process.step2.text": "Definimos la arquitectura IoT, los componentes y la integración.",
            "process.step3.title": "Ejecución e implementación",
            "process.step3.text": "Instalamos, integramos y ponemos en marcha la solución.",
            "portfolio.recent_work": "Trabajos recientes",
            "portfolio.explore_projects": "Proyectos de gran escala",
            "projects.acindar.project": "Master Plan de videovigilancia industrial y analítica.",
            "projects.acindar.title": "Acindar (ArcelorMittal) – CCTV industrial e IoT",
            "projects.acindar.description": "Diseño e implementación de sistemas CCTV basados en cámaras AXIS, integrados con analítica de video y plataformas de monitoreo para entornos siderúrgicos de alta criticidad.",
            "projects.aes.project": "Monitoreo remoto de variables operativas y de infraestructura.",
            "projects.aes.title": "AES – Monitoreo industrial y energético",
            "projects.aes.description": "Implementación de soluciones IoT para captura de datos operativos y visualización centralizada, orientadas a eficiencia operativa y continuidad del servicio.",
            "projects.ternium.project": "Sistemas de seguridad electrónica e integración de video inteligente.",
            "projects.ternium.title": "Ternium – Seguridad y monitoreo en planta",
            "projects.ternium.description": "Integración de videovigilancia industrial con analítica en el borde para control operativo y seguridad en instalaciones productivas.",
            "projects.ldc.project": "Monitoreo y seguridad en entornos logísticos e industriales.",
            "projects.ldc.title": "Louis Dreyfus Company (LDC) – Infraestructura industrial",
            "projects.ldc.description": "Soluciones IoT y CCTV para control de procesos, seguridad perimetral y operación en instalaciones de gran escala.",
            "projects.sannicolas.project": "Plataforma de ciudad inteligente y monitoreo urbano.",
            "projects.sannicolas.title": "Municipalidad de San Nicolás – Smart City",
            "projects.sannicolas.description": "Implementación de soluciones IoT y video inteligente para gestión urbana, seguridad, medición de flujos y soporte a la toma de decisiones municipales.",
            "projects.rafaela.project": "Sistemas de monitoreo y captura de datos urbanos.",
            "projects.rafaela.title": "Municipalidad de Rafaela – Infraestructura urbana",
            "projects.rafaela.description": "Integración de sensores IoT y plataformas de visualización para optimizar la gestión de servicios públicos.",
            "projects.hospital.project": "Monitoreo IoT en entorno hospitalario.",
            "projects.hospital.title": "Hospital San Felipe – IoMT",
            "projects.hospital.description": "Despliegue de sensores IoT para control ambiental y monitoreo de variables críticas en infraestructura de salud.",
            "projects.utn.project": "Plataformas de monitoreo y proyectos académicos IoT.",
            "projects.utn.title": "UTN – Facultad Regional San Nicolás",
            "projects.utn.description": "Implementación de soluciones IoT aplicadas a investigación, formación técnica y validación de tecnologías industriales.",
            "cta.projects.title": "Más de 3.000 proyectos exitosos",
            "cta.projects.text": "Soluciones tecnológicas que generan impacto real en la operación.",
            "cta.interested": "¿Interesado en trabajar con nosotros?",
            "brand.label": "Partners",
            "brand.title": "Partners que confían en LogerSRL",
            "brand.description": "Trabajamos junto a fabricantes y aliados tecnológicos estratégicos para ofrecer soluciones robustas, seguras y de largo plazo.",
            "team.label": "Ingenieros",
            "team.title": "Los mejores expertos de la industria",
            "team.role.sr_engineer": "Ingeniero Senior",
            "team.role.operator": "Operario",
            "team.role.francisco": "Responsable de Ingeniería",
            "team.role.luciano": "Desarrollador de Software",
            "team.role.pablo": "Técnico de Campo",
            "team.role.lucia": "Operación de Sistemas",
            "team.role.jose": "Administración y Gestión",
            "contact.label": "Contacto",
            "contact.title": "¿Tenés un proyecto en mente?",
            "contact.intro": "Contactanos para analizar tus necesidades y diseñar una solución IoT a medida para tu industria.",
            "contact.subtitle_text": "Ingeniería, tecnología y datos al servicio de tu operación.",
            "contact.phone_label": "Teléfono",
            "contact.email_label": "Correo electrónico",
            "contact.location_label": "San Nicolás, Argentina",
            "contact.location_text": "Presencia regional con proyectos en industrias y ciudades.",
            "contact.hours_label": "Horario de atención",
            "contact.hours_text": "Lun - Vie: 09:00 - 19:00",
            "contact.form_title": "Ponte en contacto",
            "contact.placeholder": "Contanos sobre tu proyecto y te responderemos a la brevedad.",
            "contact.send_button": "Enviar",
            "placeholder.name": "Nombre completo",
            "placeholder.email": "Dirección de correo",
            "placeholder.inquiry": "Tu consulta",
            "placeholder.message": "Escribe tu mensaje",
            "placeholder.subscribe_email": "Introduce tu correo",
            "hero.slide1.title": "Impulsamos la transformación digital de la industria",
            "hero.slide1.text": "Diseñamos e implementamos soluciones IoT industriales que integran video inteligente, sensores, analítica avanzada y plataformas de datos para optimizar la seguridad, la eficiencia operativa y la toma de decisiones.",
            "hero.slide1.subtitle": "Ingeniería inteligente para industrias que necesitan resultados reales.",
            "hero.slide2.title": "Soluciones IoT industriales, de punta a punta",
            "hero.slide2.text": "Conectamos sensores, conectividad y tableros para convertir datos en acciones en tiempo real en toda tu operación.",
            "hero.slide2.subtitle": "Del borde a la nube, listo para escalar.",
            "hero.slide3.title": "Video inteligente y seguridad electrónica",
            "hero.slide3.text": "CCTV IP, analítica en borde y monitoreo crítico para mejorar la seguridad y la continuidad operativa.",
            "hero.slide3.subtitle": "Seguridad, continuidad y control.",
            "hero.title": "Impulsamos la transformación digital de la industria",
            "hero.text": "Diseñamos e implementamos soluciones IoT industriales que integran video inteligente, sensores, analítica avanzada y plataformas de datos para optimizar la seguridad, la eficiencia operativa y la toma de decisiones.",
            "hero.subtitle": "Ingeniería inteligente para industrias que necesitan resultados reales.",
            "footer.copyright": "&copy; <span id=\"copyright-year\"></span> Loger SRL. Todos los derechos reservados. Diseñado por <a href=\"https://logersrl.com.ar\" rel=\"noopener\">LogerSRL</a>"
        }
    };

    var translationsFlat = {
        en: {
            "Loger SRL": "Loger SRL"
        },
        es: {
            "Loger SRL": "Loger SRL"
        }
    };

    function getSavedLang(){
        return localStorage.getItem(STORAGE_KEY) || 'es';
    }
    function saveLang(lang){
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function translatePage(lang){
        // elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(function(el){
            var key = el.getAttribute('data-i18n');
            var text = (translations[lang] && translations[lang][key]) || el.getAttribute('data-i18n-fallback') || '';
            if(text){
                el.innerHTML = text;
            }
        });
        // placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
            var key = el.getAttribute('data-i18n-placeholder');
            var text = (translations[lang] && translations[lang][key]) || '';
            if(text){ el.setAttribute('placeholder', text); }
        });
        // update active button
        document.querySelectorAll('.lang-btn').forEach(function(btn){
            btn.classList.toggle('active', btn.getAttribute('data-lang')===lang);
        });

        // flat text node replacements: replace exact text nodes
        try{
            var map = translationsFlat[lang] || {};
            // document title
            if(map['Loger SRL']){
                document.title = map['Loger SRL'];
            }
            var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            var node;
            var toReplace = [];
            while(node = walker.nextNode()){
                var txt = node.nodeValue.trim();
                if(txt && map[txt]){
                    toReplace.push({node: node, value: map[txt]});
                }
            }
            toReplace.forEach(function(item){
                var parent = item.node.parentElement;
                if(parent){
                    var tag = parent.tagName.toLowerCase();
                    if(['script','style','textarea','input'].indexOf(tag)===-1){
                        parent.innerHTML = parent.innerHTML.replace(item.node.nodeValue.trim(), item.value);
                    }
                }
            });
        }catch(e){ console.warn('i18n flat replace error', e); }
    }

    function setLanguage(lang){
        saveLang(lang);
        translatePage(lang);
    }

    document.addEventListener('DOMContentLoaded', function(){
        var current = getSavedLang();
        translatePage(current);
        document.querySelectorAll('.lang-btn').forEach(function(btn){
            btn.addEventListener('click', function(){
                var lang = this.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    });

    window.i18n = {
        translatePage: translatePage,
        setLanguage: setLanguage,
        getSavedLang: getSavedLang
    };
})();
