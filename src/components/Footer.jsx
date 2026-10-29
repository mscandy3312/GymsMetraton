import React from 'react';
import { Zap, MapPin, Phone, Mail, Clock, Compass, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Footer({ onOpenLeadModal, onScrollTo }) {
  return (
    <footer className="relative bg-[#070A11] border-t border-slate-800 text-slate-400 text-sm overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-amber-400 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0">
                <img
                  src="/metatron-logo.png"
                  alt="METATRON GYM"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider text-white">
                  METATRON GYM
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-cyan-400 font-bold">
                  Performance Lab & Consultoría
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Un concepto disruptivo que combina la consultoría 1-on-1, biomecánica deportiva, calistenia, isometría y biohacking en un ambiente tech-chic de alto impacto.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-400/50 hover:text-teal-400 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                GPS: 19.4326° N, 99.1332° W • Alt. 2,240m
              </span>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Explorar el Centro
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('disciplinas')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Disciplinas & Programas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('calculadora')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Calculadora de Objetivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('horarios')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Horarios de Clases Grupales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('testimonios')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Historias de Transformación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('faq')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Preguntas Frecuentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLeadModal('Footer Link')}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  ⚡ Solicitar Pase de Prueba Gratis
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Map Preview (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Ubicación & Contacto Directo
            </h4>
            
            {/* Interactive Simulated Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs">
                    ANTYGRAVITY Performance Hub
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {GYM_INFO.address}
                  </div>
                  <div className="text-[11px] text-teal-400 font-semibold mt-1">
                    Estacionamiento subterráneo techado (2 hrs de cortesía)
                  </div>
                </div>
              </div>

              {/* Visual simulated mini-map */}
              <div className="relative h-28 rounded-xl overflow-hidden border border-slate-800 bg-[#0E1424] flex items-center justify-center group cursor-pointer">
                {/* Grid cyber lines inside map */}
                <div className="absolute inset-0 bg-grid-cyber opacity-70" />
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 animate-bounce">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white bg-black/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    Abrir en Google Maps / Waze
                  </span>
                </div>
              </div>

              {/* Operating Hours Details */}
              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>L-V: 06:00 - 23:00 | Sáb: 08:00 - 20:00 | Dom: 09:00 - 14:00</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ANTYGRAVITY Performance Lab. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos del Servicio</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Protocolo de Salud</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
