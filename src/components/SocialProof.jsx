import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, CheckCircle, Shield, Award, TrendingUp, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialProof({ onOpenLeadModal }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="testimonios" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            Resultados Comprobables
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            No Vendemos Promesas.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Entregamos Métricas.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Historias reales de personas ocupadas que decidieron abandonar el fitness genérico y transformar su físico con rigor biomecánico.
          </p>
        </div>

        {/* Global Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-cyan-400 font-mono">
              +500
            </div>
            <div className="text-xs uppercase font-bold text-slate-300 mt-2 tracking-wider">
              Atletas Transformados
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Con registros InBody oficiales
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-teal-400 font-mono">
              98.4%
            </div>
            <div className="text-xs uppercase font-bold text-slate-300 mt-2 tracking-wider">
              Tasa de Fidelidad
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Sin permanencia obligatoria
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-cyan-300 font-mono">
              60 Días
            </div>
            <div className="text-xs uppercase font-bold text-slate-300 mt-2 tracking-wider">
              Tiempo Promedio
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Para recomposición evidente
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-emerald-400 font-mono">
              0
            </div>
            <div className="text-xs uppercase font-bold text-slate-300 mt-2 tracking-wider">
              Lesiones Graves
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Protocolos de biomecánica segura
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] group"
            >
              <div className="space-y-4">
                {/* Top: Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {item.verified}
                  </span>
                </div>

                {/* Key Metric Highlight Pill */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-teal-300">
                    {item.metrics}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.duration}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/30"
                />
                <div>
                  <div className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-cyan-400/80 font-medium mt-0.5">
                    Disciplina: {item.disciplineUsed}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Button under social proof */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenLeadModal('Testimonials Bottom CTA')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sé el Próximo Caso de Éxito • Reserva tu Clase Gratis
          </button>
        </div>

      </div>
    </section>
  );
}
