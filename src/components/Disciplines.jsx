import React, { useState } from 'react';
import { DISCIPLINES } from '../data/gymData';
import { Flame, Clock, Zap, ChevronRight, Check, Award, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Disciplines({ onOpenLeadModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  const categories = [
    { id: 'all', label: 'Todas las Disciplinas' },
    { id: 'isometrico', label: 'Isometría & Neuro-Fuerza' },
    { id: 'gravitacional', label: 'Calistenia Gravitacional' },
    { id: 'fuerza', label: 'Biomecánica & Hipertrofia' },
    { id: 'metabolico', label: 'Cross & HIIT Metabólico' },
  ];

  const filteredDisciplines = activeCategory === 'all'
    ? DISCIPLINES
    : DISCIPLINES.filter(d => d.category === activeCategory);

  return (
    <section id="disciplinas" className="relative py-24 bg-[#0B0F19] border-t border-slate-800/80">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Programas de Transformación
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ingeniería del Movimiento.{' '}
            <span className="text-gradient-cyan block sm:inline">
              5 Disciplinas de Élite.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Olvídate de rutinas genéricas aburridas. Cada sesión en ANTYGRAVITY está planificada con principios biomecánicos para maximizar resultados y proteger tus articulaciones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-10 pb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDisciplines.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-500 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-[#101726]/40 to-transparent" />
                
                {/* Discipline Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                </div>

                {/* Duration & Intensity Badges */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-mono">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-mono">
                      <Flame className="w-3.5 h-3.5 text-teal-400" />
                      {item.calories}
                    </span>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-1 rounded-md font-mono text-[11px] font-bold">
                    Intensidad {item.intensity}%
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Coach info + CTA */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                      {item.coach.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {item.coach}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.coachRole}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenLeadModal(`Disciplina: ${item.name}`)}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-black text-cyan-300 border border-cyan-500/30 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  >
                    <span>Probar Gratis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                ¿No estás seguro de cuál disciplina encaja contigo?
              </div>
              <div className="text-xs text-slate-400">
                Usa nuestra calculadora interactiva de objetivos o agenda tu clase de diagnóstico inicial sin costo.
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById('calculadora');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 border border-slate-700"
          >
            <span>Ir a la Calculadora</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
