import React, { useState, useEffect } from 'react';
import { Gift, X, ArrowRight, Sparkles, Clock, Flame } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function ExitIntentModal({ onClaimPass }) {
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 8 && !hasTriggered) {
        setShowExitModal(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!showExitModal) {
    return (
      /* Floating activator badge on bottom-left for desktop */
      <button
        onClick={() => setShowExitModal(true)}
        className="hidden lg:flex fixed bottom-6 left-6 z-30 items-center gap-2.5 px-4 py-2.5 rounded-full glass-panel-glow border border-cyan-500/40 text-xs font-bold text-white hover:scale-105 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
        <Gift className="w-4 h-4 text-cyan-400" />
        <span>Pase VIP Activo: 1ª Sesión $0</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-glow border border-cyan-500/50 p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.95)] text-center space-y-5 animate-in zoom-in-95 duration-200">
        
        {/* Close */}
        <button
          onClick={() => setShowExitModal(false)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Badge */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          <Gift className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            ¡Espera! No te vayas sin tu pase
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            Desbloquea 1 Clase Gratis + Diagnóstico InBody 770
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Te guardamos uno de los <strong>{GYM_INFO.spotsRemainingThisWeek} pases de cortesía</strong> de esta semana antes de que cierren los cupos.
          </p>
        </div>

        {/* Perks Box */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Acceso total a la sesión que elijas (Calistenia, Cross, HIIT o Lab)</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Escaneo InBody con desglose muscular y grasa visceral ($45 USD de valor gratis)</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cero compromiso ni tarjeta requerida</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              setShowExitModal(false);
              onClaimPass('Exit Intent Modal');
            }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all flex items-center justify-center gap-2"
          >
            <span>Reclamar mi Pase de Cortesía Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setShowExitModal(false)}
            className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
          >
            No gracias, prefiero entrenar sin asesoría biomecánica
          </button>
        </div>

      </div>
    </div>
  );
}
