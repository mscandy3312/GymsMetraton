import React, { useState } from 'react';
import { Stethoscope, FileText, Activity, RefreshCw, CheckCircle2, ArrowRight, Laptop, Building2, Sparkles, UserCheck, ShieldAlert } from 'lucide-react';

export default function ConsultingMethodology({ onOpenLeadModal }) {
  const [activePhase, setActivePhase] = useState(0);
  const [consultingMode, setConsultingMode] = useState('presencial');

  const phases = [
    {
      step: '01',
      title: 'Diagnóstico Clínico & Biomecánico 360°',
      shortTitle: '1. Diagnóstico 360°',
      icon: Stethoscope,
      summary: 'Evaluamos tu punto de partida con tecnología de grado médico antes de prescribir cualquier carga.',
      bullets: [
        'Escáner InBody 770: Análisis segmentado de masa magra, agua intracelular y grasa visceral.',
        'Test Dinamométrico Isométrico: Identificación de asimetrías de fuerza y puntos débiles en articulaciones.',
        'Mapeo de Movilidad y Postura: Análisis de rangos articulares en hombro, cadera y tobillo.'
      ],
      metric: 'Precisión Clínica 99.2%'
    },
    {
      step: '02',
      title: 'Prescripción Biomecánica Personalizada',
      shortTitle: '2. Prescripción de Cargas',
      icon: FileText,
      summary: 'Diseñamos tu protocolo específico combinando isometría, calistenia y sobrecarga biomecánica.',
      bullets: [
        'Selección milimétrica de ejercicios según tus palancas óseas y longitud de fémur/brazo.',
        'Asignación directa de un Head Coach Consultor especializado en tu objetivo.',
        'Planificación periodizada por microciclos semanales sincronizada en tu App.'
      ],
      metric: '0% Rutinas Genéricas'
    },
    {
      step: '03',
      title: 'Nutrición Metabólica & Biohacking',
      shortTitle: '3. Biohacking Nutricional',
      icon: Activity,
      summary: 'Optimizamos tu bioquímica corporal para quemar grasa, ganar densidad y rendir con energía todo el día.',
      bullets: [
        'Cálculo personalizado de macronutrientes adaptado a tu ritmo laboral y reuniones.',
        'Protocolos de crononutrición y suplementación deportiva basada en evidencia.',
        'Estrategias de recuperación del sistema nervioso (Sauna infrarrojo, sueño REM y descompresión).'
      ],
      metric: 'Energía Sostenida 24/7'
    },
    {
      step: '04',
      title: 'Auditoría Quincenal & Re-calibración Continua',
      shortTitle: '4. Auditoría Cada 14 Días',
      icon: RefreshCw,
      summary: 'Tus datos mandan. Cada dos semanas auditamos tus progresos y re-calibramos cargas para evitar mesetas.',
      bullets: [
        'Re-escaneo InBody 770 para validar pérdida de grasa real y ganancia muscular magra.',
        'Ajuste de volumen e intensidad en la app para garantizar sobrecarga progresiva constante.',
        'Sesión de consultoría 1-on-1 para resolver dudas y adaptar el plan a tus viajes o imprevistos.'
      ],
      metric: 'Cero Estancamiento'
    }
  ];

  return (
    <section id="consultoria" className="relative py-24 bg-[#080C15] border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Servicio de Consultoría 1-on-1
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            No Vendemos Membresías.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Diseñamos tu Transformación.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Olvídate de pagar un gimnasio para que nadie te supervise. En METATRON GYM operamos como tu equipo de consultoría biomecánica, nutricional y física de alto rendimiento.
          </p>
        </div>

        {/* Consulting Modality Switch: Presencial vs Online/Híbrida */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setConsultingMode('presencial')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                consultingMode === 'presencial'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Consultoría Presencial (En el Lab)</span>
            </button>
            
            <button
              onClick={() => setConsultingMode('online')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                consultingMode === 'online'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Consultoría Online / Remota (Global)</span>
            </button>
          </div>
        </div>

        {/* Modality Details Banner */}
        <div className="mb-14 p-5 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {consultingMode === 'presencial'
                  ? 'Consultoría Presencial en Sede Central'
                  : 'Consultoría Híbrida / Remota Internacional'}
              </div>
              <div className="text-xs text-slate-400">
                {consultingMode === 'presencial'
                  ? 'Incluye acceso total a las instalaciones, sesiones guiadas por tu consultor y uso libre de sensores biomecánicos.'
                  : 'Para profesionales que viajan o entrenan en su propio club. Plan en App, videollamadas quincenales y corrección de video técnica por WhatsApp.'}
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenLeadModal(`Consultoría Modalidad: ${consultingMode.toUpperCase()}`)}
            className="px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-bold text-xs whitespace-nowrap transition-colors"
          >
            Agendar Diagnóstico Inicial
          </button>
        </div>

        {/* 4-Phase Consulting Protocol Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 4-Phase Tabs */}
          <div className="lg:col-span-6 space-y-3">
            {phases.map((p, idx) => {
              const isSelected = activePhase === idx;
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'glass-panel-glow border-cyan-400 ring-1 ring-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)] -translate-x-1 sm:translate-x-1'
                      : 'glass-panel border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black font-mono ${
                        isSelected ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-slate-900 text-slate-400'
                      }`}>
                        {p.step}
                      </span>
                      <h3 className={`font-display font-bold text-base sm:text-lg ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {p.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                      {p.metric}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-2.5 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {p.summary}
                      </p>
                      <div className="space-y-1.5 pt-1">
                        {p.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Clinical Consultation Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 glass-panel shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/consulting-lab.jpg"
                  alt="Sesión de Consultoría y Diagnóstico Biomecánico ANTYGRAVITY"
                  className="w-full h-full object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/30" />
                
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                    CONSULTORÍA 1-A-1 EN CURSO
                  </span>
                </div>
              </div>

              {/* Holographic Diagnostic Summary Card */}
              <div className="p-6 bg-gradient-to-b from-[#101726] to-[#0B0F19] border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Reporte Biomecánico Inicial (Simulado)
                  </div>
                  <span className="text-[10px] text-teal-300 font-mono bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded">
                    InBody 770 + Dinamometría
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Grasa Visceral</div>
                    <div className="text-sm font-bold text-cyan-300 mt-0.5">Nivel 4 (Óptimo)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Balance Muscular</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">97.8% Simétrico</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Pico Isométrico</div>
                    <div className="text-sm font-bold text-white mt-0.5">640 N</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenLeadModal('Consulting Visual Card CTA')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                >
                  <span>Agendar Mi Diagnóstico y Consultoría 1-a-1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
