import React, { useState, useEffect } from 'react';
import { Shield, Zap, Activity, ArrowRight, Sparkles, CheckCircle2, RotateCcw, Flame, Award } from 'lucide-react';

export default function IsometricLabSection({ onOpenLeadModal }) {
  const [selectedProtocol, setSelectedProtocol] = useState('overcoming');
  const [isHolding, setIsHolding] = useState(false);
  const [holdSeconds, setHoldSeconds] = useState(0);
  const [forceNewtons, setForceNewtons] = useState(0);
  const [neuralRecruitment, setNeuralRecruitment] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);

  const protocols = [
    {
      id: 'overcoming',
      name: 'Overcoming Isometrics',
      tag: 'Empuje Contra Resistencia Inamovible',
      description: 'Generación de fuerza máxima voluntaria (100% MVC) contra topes de acero fijos. Despierta las fibras rápidas tipo IIb que nunca se activan en repeticiones convencionales.',
      targetNewtons: 780,
      targetRecruitment: 98,
      duration: 6,
      benefits: ['Máxima tasa de desarrollo de fuerza (RFD)', 'Cero daño microfibrilar excéntrico', 'Aumento de densidad ósea']
    },
    {
      id: 'yielding',
      name: 'Yielding Isometric Holds',
      tag: 'Sostén Estático con Carga Pesada',
      description: 'Mantener una posición isométrica estática (ej. sentadilla a 90° o pausa en anillas) hasta el fallo técnico. Estimula la hipertrofia sarcoplasmática mediante hipoxia y oclusión vascular segura.',
      targetNewtons: 540,
      targetRecruitment: 89,
      duration: 10,
      benefits: ['Blindaje y engrosamiento de tendones', 'Tensión metabólica continua sin rebote articular', 'Mejora radical de la propiocepción']
    },
    {
      id: 'calisthenics',
      name: 'Isometría Gravitacional (Calistenia)',
      tag: 'Planche, Front Lever & Iron Cross',
      description: 'Control absoluto del cuerpo en palancas extremas. Desarrolla la fuerza isométrica escapular y del core que te permite sostenerte suspendido en el aire desafiando la gravedad.',
      targetNewtons: 690,
      targetRecruitment: 95,
      duration: 8,
      benefits: ['Fuerza de agarre y estabilizadores profundos', 'Descompresión vertebral gravitacional', 'Transferencia directa a cualquier deporte']
    }
  ];

  const currentProto = protocols.find(p => p.id === selectedProtocol) || protocols[0];

  // Simulator Timer Logic
  useEffect(() => {
    let interval = null;
    if (isHolding) {
      interval = setInterval(() => {
        setHoldSeconds(prev => {
          const next = prev + 1;
          const progress = Math.min(next / currentProto.duration, 1);
          setForceNewtons(Math.round(currentProto.targetNewtons * progress));
          setNeuralRecruitment(Math.round(currentProto.targetRecruitment * progress));

          if (next >= currentProto.duration) {
            setIsHolding(false);
            setTestCompleted(true);
            return currentProto.duration;
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHolding, currentProto]);

  const handleStartHold = () => {
    setHoldSeconds(0);
    setForceNewtons(0);
    setNeuralRecruitment(0);
    setTestCompleted(false);
    setIsHolding(true);
  };

  const handleReset = () => {
    setIsHolding(false);
    setHoldSeconds(0);
    setForceNewtons(0);
    setNeuralRecruitment(0);
    setTestCompleted(false);
  };

  return (
    <section id="isometria" className="relative py-24 bg-[#090D16] border-t border-slate-800/80 overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            Bio-Mecánica Avanzada
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Laboratorio de Isometría.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Tensión Máxima Sin Lesión.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            El entrenamiento isométrico permite activar el 100% del sistema neuromuscular en posiciones de tensión pura, blindando tendones y articulaciones mientras rompes récords de fuerza estática.
          </p>
        </div>

        {/* 3 Core Isometric Modalities Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {protocols.map((proto) => {
            const isSelected = selectedProtocol === proto.id;
            return (
              <button
                key={proto.id}
                onClick={() => {
                  setSelectedProtocol(proto.id);
                  handleReset();
                }}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'glass-panel-glow border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400 -translate-y-1'
                    : 'glass-panel border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {proto.tag}
                    </span>
                    <Activity className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {proto.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {proto.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 space-y-1.5">
                  {proto.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Isometric Hold & Strain Simulator (Widget) */}
        <div className="rounded-3xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Live Visual Facility Image & Tech HUD */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[16/10]">
              <img
                src="/isometric-training.jpg"
                alt="Entrenamiento Isométrico en ANTYGRAVITY"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-cyan-500/30">
                <span className={`w-2 h-2 rounded-full ${isHolding ? 'bg-rose-500 animate-ping' : 'bg-cyan-400'}`} />
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                  {isHolding ? 'ESFUERZO ISOMÉTRICO ACTIVO' : 'SENSOR DINAMOMÉTRICO LISTO'}
                </span>
              </div>

              {/* Strain Badge Overlaid */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <div className="glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-cyan-300">
                  Tensión Muscular: <strong className="text-white">{forceNewtons} N</strong>
                </div>
                <div className="glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-teal-300">
                  Reclutamiento: <strong className="text-white">{neuralRecruitment}%</strong>
                </div>
              </div>
            </div>

            {/* Right: Simulator Controls & Dynamic Strain Gauge */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Simulador Interactivo de Reclutamiento Neural
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                  Test de Carga Estática: {currentProto.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Haz clic en el botón para activar la simulación del protocolo de <strong>{currentProto.duration} segundos</strong> a máxima tensión estática.
                </p>
              </div>

              {/* Dynamic Telemetry Indicators */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Gauge 1: Force in Newtons */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Fuerza Pico (Dinamómetro)
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-cyan-400 flex items-baseline gap-1">
                    <span>{forceNewtons}</span>
                    <span className="text-xs text-slate-400 font-normal">Newtons</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full transition-all duration-300"
                      style={{ width: `${(forceNewtons / currentProto.targetNewtons) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Gauge 2: Neural Recruitment */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Unidades Motoras Activas
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-teal-400 flex items-baseline gap-1">
                    <span>{neuralRecruitment}%</span>
                    <span className="text-xs text-slate-400 font-normal">Neural</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${neuralRecruitment}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Timer Progress */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-300">
                  Tiempo de Sostén Isométrico:
                </div>
                <div className="font-mono font-black text-lg text-white">
                  {holdSeconds}s / {currentProto.duration}s
                </div>
              </div>

              {/* Interactive Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {!isHolding && !testCompleted ? (
                  <button
                    onClick={handleStartHold}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center gap-2"
                  >
                    <Flame className="w-4 h-4" />
                    <span>Iniciar Protocolo Isométrico ({currentProto.duration}s)</span>
                  </button>
                ) : isHolding ? (
                  <button
                    disabled
                    className="w-full py-4 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 animate-pulse"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
                    <span>¡Sostén la Tensión Máxima! ({currentProto.duration - holdSeconds}s restantes)</span>
                  </button>
                ) : (
                  <div className="w-full space-y-3">
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center font-bold">
                      🎉 ¡Protocolo Completado! Se activó el {neuralRecruitment}% de las unidades motoras sin daño articular.
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleReset}
                        className="p-3.5 rounded-xl border border-slate-800 text-slate-300 hover:bg-slate-900 transition-colors"
                        title="Reiniciar simulador"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onOpenLeadModal('Isometrics Lab Simulator CTA')}
                        className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                      >
                        <span>Probar Isometría en Vivo (1ª Clase Gratis)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
