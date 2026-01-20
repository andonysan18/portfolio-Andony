"use client";
import { useState } from "react";
// 1. AGREGAMOS LOS ICONOS MENU Y X
import { Github, Linkedin, Mail, Download, Layers, GraduationCap, Code, Terminal, Send, Menu, X, ArrowUpRight, Globe, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

// [IMPORTANTE]: Descomenta esto en tu local
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 2. NUEVO ESTADO PARA EL MENÚ MÓVIL
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true); 

    // TUS CREDENCIALES (Cópialas de tu cuenta real)
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

  // Función para cerrar menú al hacer clic en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-emerald-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <a href="#" className="font-bold text-xl tracking-tighter text-white hover:text-emerald-400 transition z-50 relative">
            Andony<span className="text-emerald-500">.dev</span>
          </a>
          
          {/* MENÚ DE ESCRITORIO (Se oculta en móvil con 'hidden') */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#experiencia" className="hover:text-emerald-400 transition">Experiencia</a>
            <a href="#formacion" className="hover:text-emerald-400 transition">Formación</a>
            <a href="#proyectos" className="hover:text-emerald-400 transition">Proyectos</a>
            <a href="#contacto" className="text-emerald-400 hover:text-emerald-300 transition font-bold">Contacto</a>
          </div>

          {/* REDES (Escritorio) */}
          <div className="hidden md:flex gap-4">
            <a href="https://github.com/andonysan18" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
          </div>

          {/* --- BOTÓN HAMBURGUESA (Solo Móvil) --- */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-neutral-950 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <a href="#experiencia" onClick={closeMenu} className="text-2xl font-bold hover:text-emerald-400 transition">Experiencia</a>
              <a href="#formacion" onClick={closeMenu} className="text-2xl font-bold hover:text-emerald-400 transition">Formación</a>
              <a href="#proyectos" onClick={closeMenu} className="text-2xl font-bold hover:text-emerald-400 transition">Proyectos</a>
              <a href="#contacto" onClick={closeMenu} className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition">Contacto</a>
              
              <div className="flex gap-8 mt-4">
                <a href="https://github.com/andonysan18" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900 rounded-full hover:bg-emerald-500 hover:text-black transition"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/andony-sanchez-sanabria/" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900 rounded-full hover:bg-blue-500 hover:text-white transition"><Linkedin size={24} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- CONTENIDO PRINCIPAL (Igual que antes) --- */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        <motion.section 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mb-32 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Full Stack Developer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">con base técnica sólida.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
            No solo escribo código; entiendo la infraestructura que lo sostiene. 
            Combino mi experiencia en <strong>Soporte NOC y Redes</strong> con desarrollo moderno en <strong>React & Node.js</strong> para crear aplicaciones a prueba de fallos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="px-7 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition flex items-center gap-2">
              <Mail size={18} /> Contáctame
            </a>
            <a href="/CV_Andony_Sanchez.pdf" download className="px-7 py-3 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition flex items-center gap-2">
              <Download size={18} /> Descargar CV
            </a>
          </div>
        </motion.section>

        {/* STACK */}
        <section className="mb-32">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "C#", "SQL", "PostgreSQL", "Prisma", "Tailwind", "Git", "Wireshark", "Linux"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-emerald-500/30 transition cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="mb-32 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Layers className="text-emerald-500" /> Experiencia Laboral
          </h2>
          <div className="space-y-12 border-l border-neutral-800 ml-3 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-neutral-950 border-2 border-emerald-500"></span>
              <h3 className="text-xl font-bold text-white">Technical Support Operator (NOC)</h3>
              <p className="text-emerald-400 mb-2">Sondeos Global • Jun 2025 - Presente</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-400">
                <li>Soporte técnico especializado usando <strong>Wireshark</strong> y entornos <strong>Linux</strong>.</li>
                <li>Consultas y análisis de bases de datos con <strong>MongoDB</strong> y Workbench.</li>
                <li>Validación de APIs con <strong>Postman</strong>.</li>
              </ul>
            </div>
            <div className="relative">
              <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-700"></span>
              <h3 className="text-xl font-bold text-white">Pasante Desarrollador Full Stack</h3>
              <p className="text-neutral-400 mb-2">FORIT Software Factory • Oct 2024 - Ene 2025</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-400">
                <li>Desarrollo de plataforma de recruiting multi-tenant para AMIA.</li>
                <li>Prácticas de Clean Architecture y TDD.</li>
              </ul>
            </div>
            <div className="relative">
              <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-700"></span>
              <h3 className="text-xl font-bold text-white">Soporte Técnico</h3>
              <p className="text-neutral-400 mb-2">CAT Technologies • Mar 2023 - Ene 2025</p>
              <p className="text-neutral-400">Diagnóstico y resolución de problemas de software/hardware.</p>
            </div>
          </div>
        </section>

        {/* FORMACIÓN */}
        <section id="formacion" className="mb-32 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <GraduationCap className="text-blue-500" /> Formación Académica
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            
            {/* UTN */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-blue-500/30 transition group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">Técnico Superior en Informática Aplicada</h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">En curso</span>
              </div>
              <p className="text-neutral-400 text-sm mb-1">UTN - INSPT</p>
              <p className="text-neutral-500 text-xs">2025 - Presente</p>
            </div>

            {/* Digital House */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-emerald-500/30 transition group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">Programador Web Full Stack</h3>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">Finalizado</span>
              </div>
              <p className="text-neutral-400 text-sm mb-1">Digital House / Fundación Formar</p>
              <p className="text-neutral-500 text-xs">2023 - 2024</p>
            </div>

            {/* Fundación PROEM */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-purple-500/30 transition group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition">Programación Informática y .NET</h3>
                <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">Finalizado</span>
              </div>
              <p className="text-neutral-400 text-sm mb-1">Fundación PROEM</p>
              <p className="text-neutral-500 text-xs">2021 - 2022</p>
            </div>

          </div>
        </section>

        {/* PROYECTOS */}
<section id="proyectos" className="mb-32 scroll-mt-24">
  <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
    <Code className="text-purple-500" /> Proyectos Recientes
  </h2>
  
  {/* Cambiado a 2 columnas para mostrar ambos proyectos */}
  <div className="grid md:grid-cols-2 gap-6">

    {/* PROYECTO 1: ANDINA TRAVEL */}
    <motion.div 
      whileHover={{ y: -5 }} 
      className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition group"
    >
      <div className="h-48 bg-gradient-to-br from-blue-900/20 to-slate-900 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-900/0 to-transparent"></div>
        <Globe size={64} className="text-blue-500/50 group-hover:text-blue-400 transition duration-500" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">Andina Travel</h3>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
            PRODUCCIÓN
          </span>
        </div>
        
        <p className="text-neutral-400 text-sm mb-6 h-20">
          Plataforma web para agencia de turismo. Integración de correos transaccionales, formularios validados y sistema de autenticación preparado para escalabilidad futura.
        </p>
        
        {/* Tags basados en tu package.json */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Next.js 16", "React 19", "NextAuth.js", "Resend", "Zod"].map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-neutral-950 rounded text-blue-400 border border-neutral-800">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://www.andinatravel.tur.ar/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-400 transition group-hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
          >
            Visitar Sitio <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROYECTO 2: CATALINA VIAJES */}
    <motion.div 
      whileHover={{ y: -5 }} 
      className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition group"
    >
      <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-slate-900 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-neutral-900/0 to-transparent"></div>
        <MapPin size={64} className="text-emerald-500/50 group-hover:text-emerald-400 transition duration-500" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">Catalina Viajes</h3>
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
            EN DESARROLLO
          </span>
        </div>
        
        {/* DESCRIPCIÓN ACTUALIZADA */}
        <p className="text-neutral-400 text-sm mb-6 h-20">
  Plataforma web integral de turismo. Diseño UI/UX inmersivo con carruseles interactivos, optimizado para conversión y preparado para escalar con futuras integraciones.
</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Embla UI"].map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://catalina-viajes.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 transition border border-neutral-700"
          >
            Ver Demo <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>

  </div>
</section>

        {/* CONTACTO */}
        <section id="contacto" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Send className="text-emerald-500" /> Hablemos
          </h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">¿Tienes una idea o proyecto?</h3>
                <p className="text-neutral-400 mb-8">
                  Estoy disponible para nuevos desafíos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-300"><Mail className="text-emerald-500" /> 1010andonysan@gmail.com</div>
                  <div className="flex items-center gap-3 text-neutral-300"><Linkedin className="text-blue-500" /> linkedin.com/in/andony-sanchez-sanabria/</div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" required className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="email" required className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <textarea rows={4} required className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none transition resize-none" placeholder="¿En qué puedo ayudarte?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? "Enviando..." : <>Enviar Mensaje <Send size={18} /></>}
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 pt-10 text-center">
          <p className="text-neutral-500 text-sm">© 2025 Andony Sanchez. Diseñado con Next.js & Tailwind.</p>
        </footer>

      </main>
    </div>
  );
}