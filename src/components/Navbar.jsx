import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Navbar({ onOpenLeadModal, onScrollTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Consultoría', target: 'consultoria' },
    { name: 'Disciplinas', target: 'disciplinas' },
    { name: 'Isometría', target: 'isometria' },
    { name: 'Calculadora', target: 'calculadora' },
    { name: 'Horarios', target: 'horarios' },
    { name: 'Resultados', target: 'testimonios' },
    { name: 'FAQ', target: 'faq' },
  ];

  const handleLinkClick = (target) => {
    setMobileMenuOpen(false);
    onScrollTo(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-cyan-500/15'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 p-[1.5px] shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_28px_rgba(6,182,212,0.8)] transition-all duration-300">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  ANTYGRAVITY
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  LAB
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-0.5">
                Consultoría & Tech-Fitness
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20ANTYGRAVITY,%20deseo%20agendar%20una%20sesión%20de%20diagnóstico%20y%20consultoría`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white p-2.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 transition-all flex items-center gap-2 text-xs font-semibold"
              title="Consultar por WhatsApp"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden md:inline">WhatsApp Concierge</span>
            </a>

            <button
              id="nav-cta-btn"
              onClick={() => onOpenLeadModal('Navbar CTA')}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 animate-pulse-slow" />
              <div className="relative px-5 py-2.5 bg-[#0B0F19] rounded-[11px] flex items-center gap-2 group-hover:bg-transparent transition-colors duration-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-black transition-colors" />
                <span className="text-white group-hover:text-black font-bold tracking-wide transition-colors">
                  Diagnóstico & Clase Gratis
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-slate-800/80 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Navegación Rápida
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                7 Pases Libres
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="flex items-center justify-between text-left text-slate-200 hover:text-cyan-400 py-2 text-base font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('Mobile Menu CTA');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Reserva tu Clase Gratis
              </button>
              
              <a
                href={`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-900"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
                Hablar con un Coach por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
