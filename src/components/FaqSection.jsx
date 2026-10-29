import React, { useState } from 'react';
import { FAQS } from '../data/gymData';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function FaqSection({ onOpenLeadModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0B0F19] border-t border-slate-800/80">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Transparencia Total
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Preguntas Frecuentes.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Cero Letras Pequeñas.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Resolvemos las dudas más comunes antes de que pongas un pie en nuestro Performance Lab.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-slate-900 border border-slate-800 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 border-cyan-500/40 text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                ¿Tienes una duda médica o lesión previa?
              </div>
              <div className="text-xs text-slate-400">
                Chatea directamente con nuestro equipo de fisioterapia y adaptaremos tus cargas.
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20tengo%20una%20consulta%20específica%20antes%20de%20mi%20primera%20clase`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-semibold text-xs whitespace-nowrap"
          >
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
