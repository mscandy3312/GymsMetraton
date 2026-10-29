import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function MobileStickyBar({ onOpenLeadModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Fast Button */}
        <a
          href={`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20ANTYGRAVITY,%20quiero%20información%20de%20la%20clase%20gratis`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 hover:text-white flex items-center justify-center shrink-0"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary CTA Button */}
        <button
          onClick={() => onOpenLeadModal('Mobile Sticky Bar')}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Reserva Clase Gratis (Hoy)</span>
        </button>

      </div>
    </div>
  );
}
