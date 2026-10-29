import React, { useState } from 'react';
import { CALCULATOR_DATA } from '../data/gymData';
import { Target, Calendar, BarChart2, Check, ArrowRight, Sparkles, Zap, Shield, Flame, Dumbbell, ShieldCheck } from 'lucide-react';

export default function MembershipCalculator({ onSelectPlanAndLead }) {
  const [selectedGoalId, setSelectedGoalId] = useState('fat_loss');
  const [selectedFreqId, setSelectedFreqId] = useState('4-5');
  const [selectedLevelId, setSelectedLevelId] = useState('intermediate');

  const currentGoal = CALCULATOR_DATA.goals.find(g => g.id === selectedGoalId) || CALCULATOR_DATA.goals[0];
  const currentFreq = CALCULATOR_DATA.frequencies.find(f => f.id === selectedFreqId) || CALCULATOR_DATA.frequencies[1];
  const currentLevel = CALCULATOR_DATA.levels.find(l => l.id === selectedLevelId) || CALCULATOR_DATA.levels[0];

  const getIcon = (name) => {
    switch (name) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default: return <Target className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleClaimPlan = () => {
    onSelectPlanAndLead({
      goal: currentGoal.label,
      plan: currentGoal.plan,
      frequency: currentFreq.label,
      level: currentLevel.label,
    });
  };

  return (
    <section id="calculadora" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Optimizador de Rendimiento
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Calculadora de Metas.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Tu Plan Biomecánico Ideal.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Selecciona tu objetivo, disponibilidad y nivel actual. Nuestro algoritmo de entrenamiento estructurará el programa de mayor impacto para ti.
          </p>
        </div>

        {/* Interactive Layout: Selectors (Left) + Live Result Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: 3 Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Goal Selector */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                  <span className="w-6 h-6 rounded-full bg-cyan-500 text-black font-black text-xs flex items-center justify-center">
                    1
                  </span>
                  <span>Selecciona tu Objetivo Principal</span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono">Paso 1 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {CALCULATOR_DATA.goals.map((goal) => {
                  const isSelected = selectedGoalId === goal.id;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoalId(goal.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          {getIcon(goal.icon)}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {goal.badge}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="font-bold text-sm text-white">{goal.label}</div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{goal.shortDesc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Training Frequency */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                  <span className="w-6 h-6 rounded-full bg-teal-400 text-black font-black text-xs flex items-center justify-center">
                    2
                  </span>
                  <span>Disponibilidad Semanal</span>
                </div>
                <span className="text-[11px] text-teal-400 font-mono">Paso 2 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {CALCULATOR_DATA.frequencies.map((freq) => {
                  const isSelected = selectedFreqId === freq.id;
                  return (
                    <button
                      key={freq.id}
                      onClick={() => setSelectedFreqId(freq.id)}
                      className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-slate-900 border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.25)] ring-1 ring-teal-400'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{freq.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{freq.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Current Experience Level */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                  <span className="w-6 h-6 rounded-full bg-slate-200 text-black font-black text-xs flex items-center justify-center">
                    3
                  </span>
                  <span>Nivel de Experiencia Actual</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Paso 3 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {CALCULATOR_DATA.levels.map((lvl) => {
                  const isSelected = selectedLevelId === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      onClick={() => setSelectedLevelId(lvl.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-white uppercase tracking-wider">{lvl.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{lvl.note}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Plan Recommendation Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-2xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 space-y-6">
              
              {/* Top Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
                    Plan Recomendado para Ti
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  98% Match
                </span>
              </div>

              {/* Plan Title & Timeline */}
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                  Membresía Sugerida
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1 tracking-tight">
                  {currentGoal.plan}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 px-3 py-1.5 rounded-lg w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Resultado estimado: {currentGoal.timeline}</span>
                </div>
              </div>

              {/* Protocol breakdown */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  División Semanal Óptima:
                </div>
                <div className="text-sm font-extrabold text-cyan-300">
                  {currentGoal.recommendedSplit}
                </div>
                <div className="text-[11px] text-slate-400">
                  Adaptado a tu frecuencia seleccionada de {currentFreq.label} en nivel {currentLevel.label}.
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Beneficios Incluidos:
                </div>
                {currentGoal.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Callout */}
              <div className="pt-4 border-t border-slate-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-2 font-mono">
                    {currentGoal.regularPrice}
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {currentGoal.price}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Sin permanencia ni letras pequeñas
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  Pase 1ª Clase Gratis
                </span>
              </div>

              {/* Big Action CTA */}
              <button
                id="calculator-claim-btn"
                onClick={handleClaimPlan}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Reclamar este Plan con Clase Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Reserva 100% segura. Solo te tomará 30 segundos.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
