import React from 'react';
import { ArrowRight, Flame, Shield, Users, Star, Activity, Award, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Hero({ onOpenLeadModal, onScrollTo }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0F19]">
      {/* Dynamic Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle diagonal neon laser line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Scarcity / Urgency Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="tracking-wide">
                CUPOS LIMITADOS • SOLO {GYM_INFO.spotsRemainingThisWeek} PASES DE PRUEBA ACTIVOS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.08]">
              Desafía la Gravedad.{' '}
              <span className="block text-gradient-cyan">
                Transforma tu Cuerpo.
              </span>
            </h1>

            {/* Subheadline / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              El centro de alto rendimiento donde la <strong className="text-white font-semibold">biomecánica de precisión</strong>, la <strong className="text-white font-semibold">calistenia gravitacional</strong> y la comunidad se fusionan para romper mesetas en 60 días con métricas medibles.
            </p>

            {/* Key Micro-Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cero contratos forzosos</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Test InBody 770 incluido</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Coaching individualizado</span>
              </div>
            </div>

            {/* Dual CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenLeadModal('Hero Primary CTA')}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Agenda tu Prueba Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onScrollTo('disciplinas')}
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Ver Programas & Instalaciones</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Social Proof Badges / Trust Metric Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-8">
              
              {/* Athletes Counter */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F19] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Atleta ANTYGRAVITY"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F19] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Atleta ANTYGRAVITY"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F19] object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Atleta ANTYGRAVITY"
                  />
                  <div className="h-9 w-9 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-[11px] font-bold text-cyan-300">
                    +500
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">
                    +500 Atletas
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Transformados en el Lab
                  </div>
                </div>
              </div>

              {/* Rating Proof */}
              <div className="flex items-center gap-2 pl-4 border-l border-slate-800">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white">4.9 / 5.0</span>
                  <span className="text-slate-400 ml-1">(Google Reviews)</span>
                </div>
              </div>

              {/* Biohacking / Technology Badge */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Instalaciones Certificadas 2026</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Tech Showcase with Interactive Biometric Telemetry */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight behind image */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-blue-600/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Main Facility Showcase Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/hero-gym.jpg"
                  alt="Instalaciones ANTYGRAVITY Performance Lab"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />

                {/* Floating Tag Top Left */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-slate-200 tracking-wider uppercase">
                    Sesión en Vivo: Sala Alpha
                  </span>
                </div>

                {/* Floating Telemetry Badge Top Right */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-slate-700 text-[11px] text-slate-300 font-medium">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Bio-Telemetry ON</span>
                </div>
              </div>

              {/* Real-time Telemetry Dashboard Card */}
              <div className="p-5 bg-gradient-to-b from-[#101726]/90 to-[#0B0F19] border-t border-slate-800 space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Flame className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        MONITOR CARDIOVASCULAR EN VIVO
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Protocolo Gravitacional • Zona 4
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-mono">
                    162 BPM
                  </span>
                </div>

                {/* Metric Bars */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-medium">Gasto Calórico</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">820 kcal/h</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-medium">Efecto EPOC</div>
                    <div className="text-sm font-bold text-teal-300 font-mono mt-0.5">+36 Horas</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-medium">Potencia WOD</div>
                    <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">485 W</div>
                  </div>
                </div>

                {/* Fast Action Inside Hero Card */}
                <button
                  onClick={() => onOpenLeadModal('Hero Card CTA')}
                  className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Probar Esta Metodología Sin Costo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
