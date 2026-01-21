"use client";
import { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, Download, ExternalLink,
  Send, Menu, X, MapPin, Globe, GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function PortfolioSplit() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Agregamos "formacion" a la lista de secciones a espiar
      const sections = ["about", "experiencia", "formacion", "proyectos", "contacto"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajustamos el offset para que detecte mejor al hacer scroll
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_gj0jv3r";
    const templateId = "template_t2ekz0b";
    const publicKey = "uBrZ6p9xueujg9_dT";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("¡Mensaje enviado! Te responderé pronto. 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-sans selection:bg-teal-300/30 selection:text-teal-900">

      {/* --- MOBILE NAVBAR --- */}
      <nav className="lg:hidden fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-slate-100 text-lg tracking-tight">
          Andony<span className="text-teal-400">.dev</span>
        </a>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-100">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- MENU MÓVIL OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {["About", "Experiencia", "Formacion", "Proyectos", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-2xl font-bold text-slate-100 hover:text-teal-400 transition"
              >
                {item === "Formacion" ? "Formación" : item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 min-h-screen lg:flex lg:justify-between lg:gap-4">

        {/* --- COLUMNA IZQUIERDA (FIJA) --- */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-3">
              Andony Sanchez
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-teal-400 mb-4">
              Full Stack Developer & NOC Support
            </h2>
            <div className="flex items-center gap-2 text-slate-400 mb-6 text-sm">
              <MapPin size={16} className="text-teal-400" />
              San Nicolás, CABA
            </div>
            <p className="max-w-xs leading-relaxed text-slate-400 mb-12">
              Apasionado por la tecnología y la resolución de incidencias. Estoy listo para dar el salto definitivo al desarrollo de software y sumarme a un proyecto desafiante.
            </p>

            {/* NAV DESKTOP */}
            <nav className="hidden lg:block">
              <ul className="space-y-4 w-max">
                {["About", "Experiencia", "Formacion", "Proyectos", "Contacto"].map((item) => {
                  const id = item.toLowerCase();
                  const active = activeSection === id;
                  return (
                    <li key={id}>
                      <a href={`#${id}`} className={`group flex items-center py-1 transition-all ${active ? "text-slate-100" : "text-slate-500 hover:text-slate-300"}`}>
                        <span className={`mr-4 h-px transition-all bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 ${active ? "w-16 bg-teal-400" : "w-8"}`}></span>
                        <span className="text-xs font-bold uppercase tracking-widest">
                          {item === "Formacion" ? "Formación" : item}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* REDES */}
          <div className="flex items-center gap-5 mt-8 lg:mt-0">
            <a href="https://github.com/andonysan18" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/andony-sanchez-sanabria/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition"><Linkedin size={24} /></a>
            <a href="mailto:1010andonysan@gmail.com" className="text-slate-400 hover:text-teal-400 transition"><Mail size={24} /></a>
          </div>
        </header>

        {/* --- COLUMNA DERECHA (SCROLL) --- */}
        <main className="pt-12 lg:w-1/2 lg:py-24 pb-24">

          {/* ABOUT */}
          <section id="about" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Sobre mí</h2>
            </div>
            <p className="mb-4 leading-relaxed">
              Tengo un perfil híbrido que combina la solidez técnica del <strong>Soporte NOC</strong> con la creatividad del desarrollo Full Stack. Mi experiencia diagnosticando redes con <span className="text-slate-100 font-medium">Wireshark</span> y gestionando servidores me permite escribir código más eficiente y consciente de la infraestructura.
            </p>
            <p className="mb-4 leading-relaxed">
              Me especializo en <strong>React, Node.js y C#</strong>. Disfruto trabajar en entornos dinámicos, aplicando metodologías ágiles y prácticas de código limpio como TDD.
            </p>
            <p className="leading-relaxed mb-8">
              Actualmente formo parte de un equipo de soporte técnico, pero siempre mantengo la curiosidad por <span className="text-teal-400 font-bold">proyectos desafiantes</span> que requieran una visión integral, desde la infraestructura hasta el frontend.
            </p>

            {/* --- AQUÍ AGREGAMOS EL STACK TECNOLÓGICO --- */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Stack Tecnológico</h3>
              <ul className="flex flex-wrap gap-2">
                {[
                  "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
                  "Node.js", "C#", ".NET", "SQL", "MongoDB",
                  "Tailwind CSS", "Git", "Linux", "Wireshark"
                ].map((tech) => (
                  <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a href="/CV_Andony_Sanchez.pdf" download className="inline-flex items-center gap-2 font-bold text-slate-100 hover:text-teal-400 transition group border-b border-transparent hover:border-teal-400 pb-1">
                Descargar CV completo <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* EXPERIENCIA */}
          <section id="experiencia" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experiencia</h2>
            </div>

            <div className="group/list">
              {/* Job 1: Sondeos */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  Jun 2025 — Presente
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span>Technical Support NOC</span>
                      </a>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">Sondeos Global</div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Gestión de incidencias críticas y operación de plataformas CMP.
                  </p>
                  <ul className="mt-2 text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>Diagnóstico de redes con <strong>Wireshark</strong> y Linux.</li>
                    <li>Consultas en <strong>MongoDB</strong> y SQL (Workbench).</li>
                    <li>Validación de APIs con <strong>Postman</strong> y gestión en Jira.</li>
                    <li>Manejo de protocolos <strong>SMPP</strong> y sistemas Alaris.</li>
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Linux", "Wireshark", "MongoDB", "SQL", "Postman", "Jira"].map(tech => (
                      <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job 2: FORIT */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  Oct 2024 — Ene 2025
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span>Pasante Desarrollador Full Stack</span>
                      </a>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">FORIT Software Factory</div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Desarrollo de plataforma de recruiting para AMIA.
                  </p>
                  <ul className="mt-2 text-sm text-slate-400 list-disc list-inside space-y-1">
                    <li>Prácticas de <strong>Clean Architecture</strong> y TDD.</li>
                    <li>Programación funcional y Código Limpio.</li>
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["React", "NodeJS", "Tailwind CSS", "TDD", "Git", "MongoDB", "TypeScript", "Express"].map(tech => (
                      <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job 3: CAT (Agregado del CV) */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  Mar 2023 — Ene 2025
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span>Soporte Técnico</span>
                      </div>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">CAT Technologies</div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Diagnóstico de hardware/software y conectividad. Escalado de casos complejos y documentación de incidencias.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Soporte IT", "Hardware", "Atención al Cliente"].map(tech => (
                      <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* FORMACIÓN (Nueva Sección) */}
          <section id="formacion" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Formación</h2>
            </div>

            <div className="group/list space-y-10">
              {/* UTN */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2025 — Presente
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium text-slate-200 flex items-center gap-2">
                    Téc. Superior en Informática Aplicada
                  </h3>
                  <p className="text-teal-400 text-sm">UTN - INSPT</p>
                </div>
              </div>

              {/* Digital House */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2023 — 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium text-slate-200">
                    Programador Web Full Stack
                  </h3>
                  <p className="text-teal-400 text-sm">Digital House / Fundación Formar</p>
                </div>
              </div>

              {/* PROEM */}
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2021 — 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium text-slate-200">
                    Programación Informática y .NET
                  </h3>
                  <p className="text-teal-400 text-sm">Fundación PROEM</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROYECTOS */}
          <section id="proyectos" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Proyectos</h2>
            </div>

            <div className="group/list">

              {/* PROYECTO 1: ANDINA TRAVEL */}
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                <div className="z-10 sm:col-span-2 mt-1">
                  <div className="w-20 h-14 rounded border border-slate-700 bg-slate-800 flex items-center justify-center text-teal-400">
                    <Globe size={24} />
                  </div>
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 flex items-center gap-2">
                    <a href="https://www.andinatravel.tur.ar/" target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                      <span>Andina Travel</span>
                      <ExternalLink size={14} className="ml-1 inline-block shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Plataforma web para agencia de turismo. Gestión de estado con <strong>Zustand</strong>, formularios validados con <strong>React Hook Form</strong> y autenticación segura.
                  </p>
                  {/* Actualizado s/ package.json: Quitamos Prisma/DB, agregamos Zustand/NextAuth */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Next.js 16", "NextAuth v5", "Zustand", "Resend", "Zod"].map(tech => (
                      <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* PROYECTO 2: CATALINA VIAJES */}
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                <div className="z-10 sm:col-span-2 mt-1">
                  <div className="w-20 h-14 rounded border border-slate-700 bg-slate-800 flex items-center justify-center text-teal-400 relative">
                    <MapPin size={24} />
                    {/* Indicador visual de "En Desarrollo" */}
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </span>
                  </div>
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a href="https://catalina-viajes.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                      <span>Catalina Viajes</span>
                      <ExternalLink size={14} className="ml-1 inline-block shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Landing page de alto rendimiento. Implementación de carruseles interactivos con <strong>Embla UI</strong> y diseño moderno utilizando las últimas características de Tailwind v4.
                  </p>
                  {/* Actualizado s/ package.json: Next 16, Tailwind 4, Embla */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Next.js 16", "React 19", "Tailwind v4", "Embla Carousel"].map(tech => (
                      <li key={tech} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* CONTACTO */}
          <section id="contacto" className="mb-16 scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Contacto</h2>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-100 mb-2">Hablemos</h3>
              <p className="text-sm text-slate-400 mb-6">¿Tienes un proyecto en mente o buscas un dev para tu equipo?</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" required className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2 text-sm text-slate-200 focus:border-teal-400 outline-none transition" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" required className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2 text-sm text-slate-200 focus:border-teal-400 outline-none transition" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <textarea rows={3} required className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2 text-sm text-slate-200 focus:border-teal-400 outline-none transition resize-none" placeholder="Mensaje..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

                <button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2 rounded transition flex items-center justify-center gap-2 text-sm disabled:opacity-50">
                  {isSubmitting ? "Enviando..." : <>Enviar <Send size={14} /></>}
                </button>
              </form>
            </div>
          </section>

          <footer className="text-xs text-slate-500">
            <p>Diseñado en Figma y codificado en Visual Studio Code. Construido con Next.js y Tailwind CSS, desplegado con Vercel.</p>
          </footer>

        </main>
      </div>
    </div>
  );
}