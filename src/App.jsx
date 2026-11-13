import { useMemo, useState } from 'react';

const services = [
  {
    title: 'Consulta general',
    price: 'Desde $4.500',
    description: 'Evaluación integral para detectar signos tempranos de enfermedad y mantener a tu mascota sana.',
    icon: '🐾',
  },
  {
    title: 'Vacunación',
    price: 'Plan personalizado',
    description: 'Protocolos seguros y actualizados para prevenir enfermedades comunes en perros y gatos.',
    icon: '💉',
  },
  {
    title: 'Cirugía',
    price: 'Consulta + cirugía',
    description: 'Atención quirúrgica responsable con monitoreo perioperatorio y seguimiento cuidadoso.',
    icon: '🩺',
  },
  {
    title: 'Diagnóstico por imagen',
    price: 'Desde $8.900',
    description: 'Rayos X y ecografías para una atención precisa y decisiones clínicas confiables.',
    icon: '📷',
  },
  {
    title: 'Odontología',
    price: 'Limpieza + control',
    description: 'Cuidado oral profesional para prevenir dolor, infecciones y problemas digestivos.',
    icon: '🦷',
  },
  {
    title: 'Peluquería y spa',
    price: 'Desde $6.200',
    description: 'Baño, corte y cuidado estilístico con productos seguros para la piel y pelaje.',
    icon: '✂️',
  },
];

const stats = [
  { value: '12+', label: 'años cuidando mascotas' },
  { value: '8.500', label: 'consultas realizadas' },
  { value: '24/7', label: 'soporte veterinario' },
  { value: '4.9/5', label: 'calificación clientes' },
];

const team = [
  {
    name: 'Dra. Sofía Ramírez',
    role: 'Médica Veterinaria',
    specialty: 'Especialista en medicina preventiva',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dr. Mateo Ruiz',
    role: 'Cirujano',
    specialty: 'Cirugía y procedimientos ambulatorios',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dra. Valentina López',
    role: 'Dermatología',
    specialty: 'Cuidado de piel y alergias',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  {
    quote:
      'El equipo fue muy cálido, explicaron todo con mucha claridad y mi perro recibió una atención excelente. ¡Volveremos sin dudas!',
    author: 'María P.',
  },
  {
    quote:
      'Además de la calidad profesional, la atención humana es impecable. Nos ayudaron a entender cada síntoma y tratamiento.',
    author: 'Luciano G.',
  },
  {
    quote:
      'Sienten la veterinaria como una familia. La limpieza, la organización y la dedicación se nota en cada visita.',
    author: 'Ana M.',
  },
];

const faqs = [
  {
    question: '¿Necesito sacar turno para una consulta?',
    answer:
      'Sí, te recomendamos reservar con anticipación para asegurar disponibilidad. También tenemos atención por urgencias y consultas de seguimiento.',
  },
  {
    question: '¿Atienden perros, gatos y otras mascotas?',
    answer:
      'Atendemos principalmente perros y gatos, y también contamos con atención para especies menores según disponibilidad y protocolo clínico.',
  },
  {
    question: '¿Qué incluye una consulta general?',
    answer:
      'Incluye anamnesis, revisión física, control de peso, evaluación general, recomendaciones nutricionales y plan de seguimiento si es necesario.',
  },
  {
    question: '¿Puedo pedir asesoramiento por WhatsApp?',
    answer:
      'Sí. Podés comunicarte con la clínica por WhatsApp para consultas preliminares, dudas sobre medicamentos o información de atención.',
  },
];

const initialForm = {
  name: '',
  pet: '',
  email: '',
  phone: '',
  service: 'Consulta general',
  date: '',
  message: '',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const years = useMemo(() => new Date().getFullYear(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="navbar container">
          <div className="brand" aria-label="Veterinaria Vida home">
            <div className="brand-mark">V</div>
            <div>
              <span>Veterinaria</span>
              <strong>Vida</strong>
            </div>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#equipo">Equipo</a>
            <a href="#testimonios">Opiniones</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a href="#contacto" className="btn btn-primary nav-cta">
            Solicitar turno
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Cuidado integral para tu mascota</span>
              <h1>La salud de tu compañero comienza con atención profesional.</h1>
              <p>
                En Veterinaria Vida cuidamos a cada mascota con tecnología, calidez y un equipo
                comprometido con su bienestar a lo largo de toda su vida.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">
                  Pedir turno
                </a>
                <a href="#servicios" className="btn btn-secondary">
                  Ver servicios
                </a>
              </div>

              <div className="hero-highlights">
                <div>
                  <strong>+12 años</strong>
                  <span>de experiencia</span>
                </div>
                <div>
                  <strong>5.000+</strong>
                  <span>mascotas atendidas</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Mascota en consulta veterinaria">
              <div className="visual-card visual-main">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
                  alt="Perro feliz en consulta veterinaria"
                />
              </div>
              <div className="visual-card floating-card card-one">
                <span>✔ Atención humana</span>
                <strong>Atención integral</strong>
              </div>
              <div className="visual-card floating-card card-two">
                <span>⏱ 24/7</span>
                <strong>Seguimiento</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-wrap">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-dark">Nuestros servicios</span>
              <h2>Atención veterinaria completa para cada etapa de tu mascota</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span>{service.price}</span>
                    <button
                      type="button"
                      onClick={() => setFormData((current) => ({ ...current, service: service.title }))}
                    >
                      Solicitar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section section-alt">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
                alt="Veterinario revisando a una mascota"
              />
            </div>

            <div className="about-copy">
              <span className="eyebrow eyebrow-dark">Sobre nosotros</span>
              <h2>Un espacio pensado para la salud y la felicidad de tus animales.</h2>
              <p>
                Somos una clínica veterinaria moderna que combina medicina de vanguardia con una
                atención cálida, clara y cercana. Mantenemos a cada paciente bajo un enfoque integral,
                preventivo y personalizado.
              </p>

              <ul className="feature-list">
                <li>Consultas preventivas y seguimiento de salud</li>
                <li>Diagnóstico preciso con equipos modernos</li>
                <li>Tratamientos personalizados según cada caso</li>
                <li>Asesoramiento nutricional y de bienestar</li>
              </ul>

              <div className="about-badges">
                <span>Vacunación</span>
                <span>Microchips</span>
                <span>Laboratorio</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section care-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow eyebrow-dark">Prevención y bienestar</span>
              <h2>Cuida a tu mascota con hábitos saludables y atención profesional</h2>
            </div>

            <div className="care-grid">
              <div className="care-card">
                <span className="care-icon">🩺</span>
                <h3>Control anual</h3>
                <p>Revisiones periódicas para prevenir enfermedades y optimizar su calidad de vida.</p>
              </div>
              <div className="care-card">
                <span className="care-icon">🥗</span>
                <h3>Nutrición</h3>
                <p>Planes personalizados según edad, peso, actividad y condiciones especiales.</p>
              </div>
              <div className="care-card">
                <span className="care-icon">💊</span>
                <h3>Tratamiento</h3>
                <p>Indicaciones claras, seguimiento y educación para que el cuidado sea efectivo.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="section team-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-dark">Profesionales</span>
              <h2>Un equipo de especialistas comprometido con tu mascota</h2>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name} className="team-card">
                  <img src={member.image} alt={member.name} />
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <p>{member.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="section section-alt testimonials-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow eyebrow-dark">Opiniones</span>
              <h2>Lo que dicen nuestros clientes</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="testimonial-card">
                  <div className="stars">★★★★★</div>
                  <p>“{item.quote}”</p>
                  <footer>{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="faq-copy">
              <span className="eyebrow eyebrow-dark">Preguntas frecuentes</span>
              <h2>Todo lo que necesitás saber antes de tu visita</h2>
              <p>
                Queremos que te sientas acompañado en cada paso, desde la primera consulta hasta el
                seguimiento del tratamiento.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <div key={item.question} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
                  <button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                    <span>{item.question}</span>
                    <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section appointment-section">
          <div className="container appointment-grid">
            <div className="contact-panel">
              <span className="eyebrow eyebrow-dark">Contacto</span>
              <h2>Solicitá un turno y dejá que cuidemos a tu mascota</h2>
              <div className="contact-list">
                <div>
                  <strong>Dirección</strong>
                  <p>Av. San Martín 1590, Córdoba</p>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+54 351 456-7890</p>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>hola@veterinariavida.com</p>
                </div>
                <div>
                  <strong>Horario</strong>
                  <p>Lunes a Sábado, 9:00 - 19:00</p>
                </div>
              </div>
            </div>

            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <label>
                  Nombre y apellido
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                  Nombre de tu mascota
                  <input type="text" name="pet" value={formData.pet} onChange={handleChange} required />
                </label>
              </div>

              <div className="input-row">
                <label>
                  Email
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                  Teléfono
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
              </div>

              <div className="input-row single">
                <label>
                  Servicio
                  <select name="service" value={formData.service} onChange={handleChange}>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="input-row single">
                <label>
                  Fecha deseada
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
              </div>

              <label>
                Mensaje
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contanos cómo podemos ayudarte"
                />
              </label>

              <button type="submit" className="btn btn-primary submit-btn">
                Solicitar turno
              </button>

              {submitted && (
                <div className="success-message">
                  ¡Gracias, {formData.name || 'amigo'}! Tu solicitud fue registrada. Nos pondremos en
                  contacto pronto para confirmar el turno.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand footer-brand">
            <div className="brand-mark">V</div>
            <div>
              <span>Veterinaria</span>
              <strong>Vida</strong>
            </div>
          </div>

          <p>© {years} Veterinaria Vida. Todos los derechos reservados.</p>

          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
