import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, X, Clock, Calendar, User, Phone, Target, MessageSquare, AlertCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function LeadCaptureModalOrSection({ isOpen, onClose, initialData = null, isModal = true }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    goal: 'Quema de Grasa & Definición',
    preferredTime: 'Mañana (06:30 - 10:00)',
    level: 'Iniciación',
    consultingMode: 'Presencial (Performance Lab)',
    preselectedClass: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Update initial data when passed from Calculator, Schedule or Consulting
  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        goal: initialData.goal || prev.goal,
        level: initialData.level || prev.level,
        consultingMode: initialData.consultingMode || prev.consultingMode,
        preferredTime: initialData.time ? `${initialData.day} ${initialData.time}` : prev.preferredTime,
        preselectedClass: initialData.discipline ? `${initialData.discipline} (${initialData.day} ${initialData.time})` : '',
      }));
    }
  }, [initialData]);

  const validateStep1 = () => {
    const errs = {};
    if (!formData.goal) errs.goal = 'Selecciona tu objetivo prioritario';
    if (!formData.preferredTime) errs.preferredTime = 'Indica tu franja horaria preferida';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor ingresa tu nombre y apellido';
    } else if (formData.name.trim().length < 3) {
      errs.name = 'El nombre debe tener al menos 3 caracteres';
    }

    const cleanPhone = formData.whatsapp.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      errs.whatsapp = 'Ingresa tu número de WhatsApp para enviarte el pase';
    } else if (cleanPhone.length < 8) {
      errs.whatsapp = 'Ingresa un número de WhatsApp válido (mínimo 8 dígitos)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    // Simulate instantaneous API lead dispatch
    setTimeout(() => {
      const generatedTicket = 'MTR-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `¡Hola METATRON GYM! Acabo de registrar mi cita para la Sesión de Consultoría & Diagnóstico Biomecánico (${ticketId}). Mi nombre es ${formData.name}. Mi meta es ${formData.goal} en modalidad ${formData.consultingMode}. ¿Me confirman la disponibilidad con mi consultor?`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const content = (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
      
      {/* Background neon flares */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Close button for modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {!isSubmitted ? (
        <div className="space-y-6 relative z-10">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Sesión de Consultoría & Diagnóstico 1-on-1
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {step === 1 ? 'Personaliza tu Plan de Consultoría' : '¿A dónde enviamos tu Pase QR?'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {step === 1
                ? 'Elige tu objetivo, modalidad y horario para asignarte al Consultor / Head Coach especialista.'
                : 'Recibirás acceso inmediato y confirmación por WhatsApp en menos de 15 minutos.'}
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300"
                style={{ width: step === 1 ? '50%' : '100%' }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">
              Paso {step} de 2
            </span>
          </div>

          {/* Form */}
          {step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-5">
              
              {/* Consulting Modality Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Modalidad de Consultoría
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'Presencial (Performance Lab)', label: '🏢 Presencial (En el Lab)' },
                    { id: 'Online / Híbrida (A distancia)', label: '🌐 Online / Remota' }
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setFormData({ ...formData, consultingMode: m.id })}
                      className={`py-2.5 px-3 rounded-xl border text-center font-semibold transition-all ${
                        formData.consultingMode === m.id
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Preselected Class Badge */}
              {formData.preselectedClass && (
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
                  <span>Turno Preseleccionado:</span>
                  <strong className="font-mono">{formData.preselectedClass}</strong>
                </div>
              )}

              {/* Goal Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tu Objetivo Principal</span>
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Quema de Grasa & Definición">Quema de Grasa & Definición</option>
                  <option value="Hipertrofia & Masa Muscular">Hipertrofia & Masa Muscular</option>
                  <option value="Fuerza Bruta & Calistenia">Fuerza Bruta & Calistenia</option>
                  <option value="Fuerza Isométrica & Blindaje Articular">Fuerza Isométrica & Blindaje Articular</option>
                  <option value="Recomposición Corporal 360°">Recomposición Corporal 360°</option>
                </select>
                {errors.goal && <p className="text-xs text-rose-400">{errors.goal}</p>}
              </div>

              {/* Preferred Time Window */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Horario Preferido para Entrenar</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'Mañana (06:30 - 10:00)', label: 'Mañanas', sub: '06:30 - 10:00' },
                    { id: 'Mediodía (11:00 - 15:00)', label: 'Mediodía', sub: '11:00 - 15:00' },
                    { id: 'Tarde/Noche (17:30 - 21:30)', label: 'Tarde / Noche', sub: '17:30 - 21:30' },
                  ].map((slot) => {
                    const isSelected = formData.preferredTime === slot.id;
                    return (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setFormData({ ...formData, preferredTime: slot.id })}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-slate-900 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-bold text-xs">{slot.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{slot.sub}</div>
                      </button>
                    );
                  })}
                </div>
                {errors.preferredTime && <p className="text-xs text-rose-400">{errors.preferredTime}</p>}
              </div>

              {/* Current Level */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Nivel de Condición Física
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Iniciación', 'Intermedio', 'Avanzado'].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setFormData({ ...formData, level: lvl })}
                      className={`py-2 px-3 rounded-lg border text-center transition-all ${
                        formData.level === lvl
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Continuar al Paso 2</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tu Nombre Completo</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carlos Mendoza"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
                {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
              </div>

              {/* WhatsApp Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>WhatsApp (para enviarte tu pase)</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Ej. +52 55 1234 5678"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono"
                  />
                </div>
                {errors.whatsapp && <p className="text-xs text-rose-400">{errors.whatsapp}</p>}
                <p className="text-[11px] text-slate-400">
                  🔒 Cero spam telefónico. Solo te enviaremos la confirmación de tu clase y ubicación.
                </p>
              </div>

              {/* Summary Pill of selections */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Resumen: <strong>{formData.goal}</strong></span>
                <span className="font-mono text-cyan-400">{formData.preferredTime.split('(')[0]}</span>
              </div>

              {/* Action Buttons: Back & Submit */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3.5 rounded-xl border border-slate-800 text-slate-300 hover:bg-slate-900 font-semibold text-xs"
                >
                  Volver
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Generando Pase VIP...
                    </span>
                  ) : (
                    <span>Generar mi Pase de Cortesía Gratis</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantía de privacidad y libre de permanencia obligatoria.</span>
              </div>

            </form>
          )}

        </div>
      ) : (
        /* Success State */
        <div className="text-center py-6 space-y-6 relative z-10 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              ¡Pase Reservado con Éxito!
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Bienvenido a METATRON GYM, {formData.name}
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Tu plaza de cortesía ha sido apartada temporalmente en nuestro sistema.
            </p>
          </div>

          {/* Ticket Card Preview */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 text-left space-y-3 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400">PASE ID DIGITAL</span>
              <span className="text-cyan-400 font-black text-sm">{ticketId}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">ATLETA</span>
                <span className="text-white font-bold">{formData.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">OBJETIVO</span>
                <span className="text-teal-300 font-bold">{formData.goal}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">HORARIO</span>
                <span className="text-white">{formData.preferredTime.split('(')[0]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">CONSULTORÍA</span>
                <span className="text-cyan-300 font-bold">{formData.consultingMode.split('(')[0]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ESTADO</span>
                <span className="text-emerald-400 font-bold">Activo 48h</span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Confirmation Button */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Confirmar Cita Inmediata por WhatsApp</span>
            </button>
            <p className="text-xs text-slate-400">
              Te recomendamos tocar el botón para que tu Head Coach prepare tu escáner InBody antes de tu llegada.
            </p>
          </div>

        </div>
      )}

    </div>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
        <div className="my-auto w-full max-w-xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="registro" className="relative py-24 bg-[#0B0F19] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
