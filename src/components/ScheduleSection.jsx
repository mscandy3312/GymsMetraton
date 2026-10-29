import React, { useState } from 'react';
import { SCHEDULE_DAYS, SCHEDULE_DATA } from '../data/gymData';
import { Calendar, Clock, User, Users, Flame, AlertCircle, ArrowRight, Check } from 'lucide-react';

export default function ScheduleSection({ onBookSlot }) {
  const [selectedDay, setSelectedDay] = useState('Lunes');
  const [filterType, setFilterType] = useState('all');

  const classesForDay = SCHEDULE_DATA[selectedDay] || [];

  const filteredClasses = filterType === 'all'
    ? classesForDay
    : classesForDay.filter(c => c.discipline.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <section id="horarios" className="relative py-24 bg-[#0B0F19] border-t border-slate-800/80">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            Agenda en Tiempo Real
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Horarios Semanales.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Cupos Reducidos.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Grupos boutique limitados a 12-16 atletas. Cada repetición es observada y corregida por un Head Coach en tiempo real.
          </p>
        </div>

        {/* Day Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SCHEDULE_DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Quick Discipline Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-8 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterType === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Todas las Disciplinas
          </button>
          <button
            onClick={() => setFilterType('Calisthenics')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterType === 'Calisthenics'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Calistenia
          </button>
          <button
            onClick={() => setFilterType('Cross')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterType === 'Cross'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Cross Performance
          </button>
          <button
            onClick={() => setFilterType('Hypertrophy')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterType === 'Hypertrophy'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Hypertrophy Lab
          </button>
          <button
            onClick={() => setFilterType('HIIT')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterType === 'HIIT'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            HIIT & Pulse
          </button>
        </div>

        {/* Schedule List / Table */}
        <div className="space-y-3">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800 text-slate-400">
              No hay sesiones programadas con este filtro para el día {selectedDay}.
            </div>
          ) : (
            filteredClasses.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] group"
              >
                {/* Time & Discipline Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Time Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-sm w-fit">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{item.time}</span>
                  </div>

                  {/* Title & Level */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                        {item.discipline}
                      </h4>
                      {item.hot && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 animate-pulse">
                          <Flame className="w-3 h-3" />
                          Alta Demanda
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-teal-400" />
                        {item.coach}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300">{item.level}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Spots Status & Booking Button */}
                <div className="flex items-center justify-between md:justify-end gap-5 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800/80">
                  
                  {/* Spots indicator */}
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span className={`text-xs font-bold font-mono ${item.spots <= 2 ? 'text-amber-400' : 'text-slate-200'}`}>
                        {item.spots} de {item.total} libres
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {item.spots <= 2 ? '⚠️ ¡Últimos cupos!' : 'Plazas disponibles'}
                    </div>
                  </div>

                  {/* Booking Button */}
                  <button
                    onClick={() => onBookSlot({
                      day: selectedDay,
                      time: item.time,
                      discipline: item.discipline,
                      coach: item.coach
                    })}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-black border border-cyan-500/30 hover:border-transparent text-cyan-300 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.15)] whitespace-nowrap"
                  >
                    <span>Apartar Turno</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Bottom Urgency Box */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Si eres nuevo, te recomendamos llegar 10 minutos antes para el set-up biomecánico con tu coach.</span>
        </div>

      </div>
    </section>
  );
}
