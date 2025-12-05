"use client";
import { Github, Linkedin, Mail, Download, Server, Code, Layers, GraduationCap, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-emerald-500/30">
      
      {/* --- NAVBAR FLOTANTE --- */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-white">
            Andony<span className="text-emerald-500">.dev</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/andonysan18" target="_blank" className="hover:text-emerald-400 transition"><Github size={20} /></Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition"><Linkedin size={20} /></Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Full Stack Developer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              con base técnica sólida.
            </span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
            No solo escribo código; entiendo la infraestructura que lo sostiene. 
            Combino mi experiencia en <strong>Soporte NOC y Redes</strong> con desarrollo moderno en <strong>React & Node.js</strong> para crear aplicaciones a prueba de fallos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:1010andonysan@gmail.com" className="px-7 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition flex items-center gap-2">
              <Mail size={18} /> Contáctame
            </a>
            <a href="/CV_Andony_Sanchez.pdf" download className="px-7 py-3 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition flex items-center gap-2">
              <Download size={18} /> Descargar CV
            </a>
          </div>
        </motion.section>

        {/* --- STACK TÉCNICO --- */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "C#", "SQL", "PostgreSQL", "Prisma", "Tailwind", "Git", "Wireshark", "Linux"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-emerald-500/30 transition cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCIA --- */}
        <section className="mb-24">
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
                <li>Validación de APIs con <strong>Postman</strong> colaborando con equipos de QA.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-700"></span>
              <h3 className="text-xl font-bold text-white">Pasante Desarrollador Full Stack</h3>
              <p className="text-neutral-400 mb-2">FORIT Software Factory • Oct 2024 - Ene 2025</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-400">
                <li>Desarrollo de plataforma de recruiting multi-tenant para AMIA.</li>
                <li>Prácticas de <strong>Clean Architecture</strong> y <strong>TDD</strong>.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-neutral-950 border-2 border-neutral-700"></span>
              <h3 className="text-xl font-bold text-white">Soporte Técnico</h3>
              <p className="text-neutral-400 mb-2">CAT Technologies • Mar 2023 - Ene 2025</p>
              <p className="text-neutral-400">
                Diagnóstico y resolución de problemas de software/hardware y conectividad.
              </p>
            </div>

          </div>
        </section>

        {/* --- NUEVA SECCIÓN: EDUCACIÓN --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <GraduationCap className="text-blue-500" /> Formación Académica
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-blue-500/30 transition">
              <h3 className="text-lg font-bold text-white mb-1">Técnico Superior en Informática Aplicada</h3>
              <p className="text-blue-400 text-sm mb-3">UTN - INSPT • 2025 - Presente</p>
              <p className="text-neutral-400 text-sm">Formación universitaria en curso.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-blue-500/30 transition">
              <h3 className="text-lg font-bold text-white mb-1">Programador Web Full Stack</h3>
              <p className="text-blue-400 text-sm mb-3">Digital House / Fundación Formar • 2023 - 2024</p>
              <p className="text-neutral-400 text-sm">Bootcamp intensivo enfocado en tecnologías web modernas.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-blue-500/30 transition">
              <h3 className="text-lg font-bold text-white mb-1">Programación Informática y .NET</h3>
              <p className="text-blue-400 text-sm mb-3">Fundación PROEM • 2021 - 2022</p>
              <p className="text-neutral-400 text-sm">Fundamentos de programación y ecosistema Microsoft.</p>
            </div>

          </div>
        </section>

        {/* --- PROYECTOS --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Code className="text-purple-500" /> Proyectos Destacados
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* PROYECTO 1: TIENDA TECH */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition group"
            >
              <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-neutral-900/0 to-transparent"></div>
                <Terminal size={64} className="text-emerald-500/50 group-hover:text-emerald-400 transition duration-500" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">Tienda Tech Full Stack</h3>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">MVP COMPLETO</span>
                </div>
                <p className="text-neutral-400 mb-6">
                  E-commerce completo con panel administrativo, gestión de inventario en tiempo real y seguimiento de reparaciones.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">Next.js 14</span>
                  <span className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">Prisma</span>
                  <span className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">Zustand</span>
                  <span className="text-xs px-2 py-1 bg-neutral-950 rounded text-emerald-400 border border-neutral-800">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://mi-tienda-tech-beta.vercel.app" target="_blank" className="flex-1 text-center py-3 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition">
                    Ver Demo 
                    {/* en Vivo */}
                  </a>
                  <a href="https://github.com/andonysan18/mi-tienda-tech" target="_blank" className="flex-1 text-center py-3 bg-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-700 transition border border-neutral-700">
                    Ver Código
                  </a>
                </div>
              </div>
            </motion.div>
            
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-white/5 pt-10 text-center">
          <p className="text-neutral-500 text-sm">
            © 2025 Andony Sanchez. Diseñado con Next.js & Tailwind.
          </p>
        </footer>

      </main>
    </div>
  );
}