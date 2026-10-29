export const GYM_INFO = {
  name: "METATRON GYM",
  logo: "/metatron-logo.png",
  tagline: "Performance Lab & Consultoría Biomecánica",
  city: "Ciudad Innovación",
  address: "Av. Tecnológica 1042, Distrito Financiero (Nivel 2)",
  phone: "+1 (555) 849-META",
  whatsapp: "+52 1 55 4920 8391",
  email: "acceso@metatrongym.com",
  scheduleOverview: "Lunes a Viernes: 06:00 - 23:00 | Sábados: 08:00 - 20:00 | Domingos: 09:00 - 14:00",
  spotsRemainingThisWeek: 7,
};

export const DISCIPLINES = [
  {
    id: "calistenia",
    category: "gravitacional",
    name: "Antygravity Calisthenics",
    subtitle: "Dominio Gravitacional & Gimnasia",
    description: "Vence tu propio peso corporal. Domina progresiones milimétricas en anillas olímpicas, handstand, planche y muscle-ups bajo una pedagogía biomecánica de élite.",
    intensity: 95,
    duration: "60 min",
    calories: "650 - 800 kcal",
    coach: "Marco 'Aero' Valdés",
    coachRole: "Especialista en Gimnasia Olímpica & Calistenia",
    image: "/calisthenics-athlete.jpg",
    tags: ["Fuerza Relativa", "Control Isométrico", "Cero Impacto Articular"],
    color: "from-cyan-500/20 to-teal-500/10",
    accent: "#06B6D4",
    highlights: [
      "Metodología de progresión por bandas elásticas y lastre progresivo",
      "Descompresión espinal en rack aéreo",
      "Mejora radical de movilidad y fuerza en muñecas/hombros"
    ]
  },
  {
    id: "cross",
    category: "metabolico",
    name: "Cross Performance & Power",
    subtitle: "Capacidad de Trabajo & Fuerza Funcional",
    description: "Levantamiento olímpico técnico (Snatch, Clean & Jerk), Assault Bikes sincronizadas y WODs cronometrados para atletas que no negocian con sus límites.",
    intensity: 98,
    duration: "60 min",
    calories: "750 - 950 kcal",
    coach: "Valeria St. Claire",
    coachRole: "Head Coach Level 3 & Ex-Atleta Regional",
    image: "/cross-athlete.jpg",
    tags: ["Potencia Metabólica", "VO2 Máx", "Comunidad Implacable"],
    color: "from-teal-500/20 to-emerald-500/10",
    accent: "#14B8A6",
    highlights: [
      "Barras Eleiko y discos olímpicos de competición calibrados",
      "Monitoreo cardíaco individual en pantalla digital",
      "Escalamiento adaptativo según tu nivel técnico"
    ]
  },
  {
    id: "hypertrophy",
    category: "fuerza",
    name: "Hypertrophy & Biomechanics Lab",
    subtitle: "Sobrecarga Progresiva de Precisión",
    description: "El arte y la ciencia de construir músculo denso. Maquinaria de palanca convergente/divergente con curvas de resistencia óptimas para aislar cada grupo sin estrés articular.",
    intensity: 90,
    duration: "75 min",
    calories: "550 - 700 kcal",
    coach: "David 'Goliath' Ramos",
    coachRole: "BSc en Ciencias del Deporte & Preparador Físico",
    image: "/hero-gym.jpg",
    tags: ["Tensión Mecánica", "Escáner InBody", "Periodización Científica"],
    color: "from-cyan-600/20 to-blue-600/10",
    accent: "#0284C7",
    highlights: [
      "Maquinaria biomecánica Prime Fitness & Watson",
      "Registro de volumen semanal y RPE en la App ANTYGRAVITY",
      "Protocolos específicos de hiperextensión y glúteo/isquio"
    ]
  },
  {
    id: "hiit",
    category: "metabolico",
    name: "HIIT & Metabolic Pulse",
    subtitle: "Quema Grasa con Efecto EPOC",
    description: "Intervalos intensos a pulsaciones pico. Activa la combustión lipídica posterior (Afterburn Effect) manteniendo tu metabolismo quemando calorías hasta 36 horas tras salir de la sala.",
    intensity: 92,
    duration: "45 min",
    calories: "700 - 900 kcal",
    coach: "Camila Ruiz",
    coachRole: "Especialista en Acondicionamiento Físico & Biohacking",
    image: "/hero-gym.jpg",
    tags: ["Monitoreo Cardíaco", "Aceleración EPOC", "Agilidad & Reflejos"],
    color: "from-sky-500/20 to-teal-500/10",
    accent: "#38BDF8",
    highlights: [
      "Pistas de césped sintético con trineos de potencia magnéticos",
      "Sensores de telemetría de ritmo cardíaco en tiempo real",
      "Estructuras de descansos activos para máxima eficiencia"
    ]
  },
  {
    id: "isometria",
    category: "isometrico",
    name: "Isometric Tension & Neural Lab",
    subtitle: "Fuerza Máxima Estática & Blindaje Articular",
    description: "La ciencia del esfuerzo estático máximo. Protocolos de Overcoming Isometrics (empujar resistencias inamovibles al 100% de esfuerzo voluntario) y Yielding Holds con dinamómetros digitales para reclutar hasta un 15% más de unidades motoras sin fricción articular.",
    intensity: 96,
    duration: "50 min",
    calories: "600 - 750 kcal",
    coach: "Dr. Alexis Thorne",
    coachRole: "Especialista en Biomecánica & Neurofisiología del Ejercicio",
    image: "/isometric-training.jpg",
    tags: ["Reclutamiento 100% Neural", "Blindaje de Tendones", "Dinamometría Digital"],
    color: "from-cyan-400/20 to-indigo-500/10",
    accent: "#06B6D4",
    highlights: [
      "Monitoreo de Newtons de fuerza y picos de tensión en pantallas táctiles",
      "Fortalecimiento acelerado de tendones y fascia sin inflamación articular",
      "Eliminación de puntos de estancamiento en press banca, sentadilla y dominadas"
    ]
  }
];

export const SCHEDULE_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const SCHEDULE_DATA = {
  "Lunes": [
    { time: "06:30 - 07:30", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Todos los niveles", spots: 2, total: 14, hot: true },
    { time: "08:00 - 09:00", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Intermedio / Pro", spots: 4, total: 16, hot: false },
    { time: "10:00 - 11:15", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Fuerza Progresiva", spots: 5, total: 12, hot: false },
    { time: "11:30 - 12:30", discipline: "Isometric Tension & Neural Lab", coach: "Dr. Alexis Thorne", level: "Overcoming Isometrics", spots: 3, total: 12, hot: true },
    { time: "18:00 - 18:45", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Alta Intensidad", spots: 1, total: 15, hot: true },
    { time: "19:15 - 20:15", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Progresiones Aéreas", spots: 3, total: 14, hot: true },
    { time: "20:30 - 21:30", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "WOD Nocturno", spots: 6, total: 16, hot: false }
  ],
  "Martes": [
    { time: "06:30 - 07:15", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Cardio EPOC", spots: 3, total: 15, hot: false },
    { time: "08:00 - 09:15", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Torso & Brazos", spots: 2, total: 12, hot: true },
    { time: "11:00 - 12:00", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Handstand & Core", spots: 7, total: 14, hot: false },
    { time: "18:00 - 19:00", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Fuerza & Halterofilia", spots: 1, total: 16, hot: true },
    { time: "19:30 - 20:45", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Pierna & Posterior", spots: 4, total: 12, hot: false },
    { time: "21:00 - 21:45", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Burnout Express", spots: 5, total: 15, hot: false }
  ],
  "Miércoles": [
    { time: "06:30 - 07:30", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Planche & Front Lever", spots: 2, total: 14, hot: true },
    { time: "08:00 - 09:00", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Resistencia Metabólica", spots: 5, total: 16, hot: false },
    { time: "12:00 - 13:00", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Lunch Power Session", spots: 6, total: 15, hot: false },
    { time: "17:00 - 18:00", discipline: "Isometric Tension & Neural Lab", coach: "Dr. Alexis Thorne", level: "Blindaje Tendinoso & Anillas", spots: 2, total: 12, hot: true },
    { time: "18:00 - 19:00", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Anillas de Competición", spots: 2, total: 14, hot: true },
    { time: "19:30 - 20:30", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Capacidad de Trabajo", spots: 3, total: 16, hot: false },
    { time: "20:45 - 21:45", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Tensión Continua", spots: 4, total: 12, hot: false }
  ],
  "Jueves": [
    { time: "06:30 - 07:15", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Cardio Metabólico", spots: 4, total: 15, hot: false },
    { time: "08:00 - 09:15", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Espalda & Tracción", spots: 3, total: 12, hot: false },
    { time: "17:30 - 18:30", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Técnica Halterofilia", spots: 2, total: 16, hot: true },
    { time: "19:00 - 20:00", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Todos los niveles", spots: 1, total: 14, hot: true },
    { time: "20:15 - 21:00", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Frecuencia Máxima", spots: 6, total: 15, hot: false }
  ],
  "Viernes": [
    { time: "06:30 - 07:30", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Team WOD Pre-Weekend", spots: 3, total: 16, hot: false },
    { time: "08:00 - 09:00", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Flow & Freestyle", spots: 2, total: 14, hot: true },
    { time: "10:00 - 11:00", discipline: "Isometric Tension & Neural Lab", coach: "Dr. Alexis Thorne", level: "Picos de Fuerza Estática", spots: 4, total: 12, hot: false },
    { time: "11:00 - 12:15", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Full Body Density", spots: 5, total: 12, hot: false },
    { time: "18:00 - 19:00", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Desafío Semanal", spots: 2, total: 16, hot: true },
    { time: "19:15 - 20:00", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Afterwork Burnout", spots: 4, total: 15, hot: false }
  ],
  "Sábado": [
    { time: "08:30 - 09:45", discipline: "Antygravity Calisthenics", coach: "Marco Valdés", level: "Masterclass de Técnicas Aéreas", spots: 1, total: 18, hot: true },
    { time: "10:00 - 11:30", discipline: "Cross Performance", coach: "Valeria St. Claire", level: "Super Saturday WOD", spots: 2, total: 20, hot: true },
    { time: "11:45 - 12:45", discipline: "Isometric Tension & Neural Lab", coach: "Dr. Alexis Thorne", level: "Protocolos de Reclutamiento 100%", spots: 2, total: 14, hot: true },
    { time: "13:00 - 14:00", discipline: "HIIT & Metabolic Pulse", coach: "Camila Ruiz", level: "Metabolic Community Burn", spots: 5, total: 18, hot: false },
    { time: "14:15 - 15:30", discipline: "Hypertrophy Biomechanics", coach: "David Ramos", level: "Open Lab & Posing", spots: 7, total: 15, hot: false }
  ]
};

export const CALCULATOR_DATA = {
  goals: [
    {
      id: "fat_loss",
      label: "Quema de Grasa & Definición",
      icon: "Flame",
      badge: "Alta Demanda",
      shortDesc: "Quema grasa corporal agresiva manteniendo tono muscular.",
      plan: "PULSE METABOLIC ELITE",
      timeline: "4 a 6 semanas para cambios evidentes",
      recommendedSplit: "3x HIIT & Pulse + 2x Hypertrophy Lab",
      price: "$69 / mes",
      regularPrice: "$95 / mes",
      benefits: [
        "Monitoreo cardíaco individual con telemetría en vivo",
        "Protocolo nutricional déficit energético controlado",
        "Test InBody 770 cada 15 días (Grasa visceral y celular)",
        "Acceso ilimitado a zona de recuperación & sauna infrarrojo"
      ]
    },
    {
      id: "isometric",
      label: "Fuerza Isométrica & Blindaje Articular",
      icon: "Shield",
      badge: "Neuro-Fuerza",
      shortDesc: "Reclutamiento de unidades motoras al 100%, tendones blindados y cero dolor articular.",
      plan: "ISOMETRIC NEURAL PEAK",
      timeline: "3 a 5 semanas para picos de Newtons",
      recommendedSplit: "3x Isometric Lab + 2x Antygravity Calisthenics",
      price: "$85 / mes",
      regularPrice: "$115 / mes",
      benefits: [
        "Medición en Newtons con dinamómetros digitales en tiempo real",
        "Protocolos Overcoming & Yielding guiados por neurofisiólogo",
        "Blindaje y regeneración de tendones (rodilla, codo, hombros)",
        "Acceso a racks de isometría pura y plataformas de fuerza"
      ]
    },
    {
      id: "muscle",
      label: "Hipertrofia & Masa Muscular",
      icon: "Dumbbell",
      badge: "Científico",
      shortDesc: "Ganancia limpia de tejido muscular y densidad sin sobrecarga lesiva.",
      plan: "HYPERTROPHY LAB PRO",
      timeline: "6 a 8 semanas para volumen y corte",
      recommendedSplit: "4x Musculación Biomecánica + 1x Calistenia Estructural",
      price: "$79 / mes",
      regularPrice: "$105 / mes",
      benefits: [
        "Acceso a maquinaria de palanca y curvas de fuerza óptimas",
        "Periodización de sobrecarga progresiva en App móvil",
        "Cálculo de macros proteicos y timing de suplementación",
        "Zona libre de pesas olímpicas calibradas y drop-pads"
      ]
    },
    {
      id: "performance",
      label: "Fuerza Bruta & Calistenia",
      icon: "Zap",
      badge: "Élite Disruptivo",
      shortDesc: "Control corporal absoluto, anillas olímpicas y destreza gravitacional.",
      plan: "ANTYGRAVITY TOTAL ACCESS",
      timeline: "4 a 8 semanas para dominar nuevos hitos",
      recommendedSplit: "3x Antygravity Calisthenics + 2x Cross Power",
      price: "$89 / mes",
      regularPrice: "$120 / mes",
      benefits: [
        "Racks aéreos suspendidos y anillas de competición",
        "Coaching personalizado en habilidades complejas (Planche, Muscle-Up)",
        "Talleres sabatinos de movilidad y acondicionamiento escapular",
        "Acceso 24/7 con llave digital inteligente"
      ]
    },
    {
      id: "recomp",
      label: "Recomposición Total 360°",
      icon: "ShieldCheck",
      badge: "Más Completo",
      shortDesc: "Transformación dual: perder tejido graso y ganar masa magra en paralelo.",
      plan: "TITANIUM 360 BIOHACKING",
      timeline: "8 a 12 semanas para cambio radical",
      recommendedSplit: "2x Calistenia + 2x Hypertrophy + 1x HIIT",
      price: "$99 / mes",
      regularPrice: "$140 / mes",
      benefits: [
        "Plan integral con consulta 1-on-1 con médico deportivo",
        "Bioimpedancia multifrecuencia InBody con reporte 3D",
        "Bebidas electrolíticas isotónicas post-entreno ilimitadas",
        "Invitado gratis 2 fines de semana al mes"
      ]
    }
  ],
  frequencies: [
    { id: "2-3", label: "2 - 3 Días / Sem", desc: "Mantenimiento & Ritmo Constante" },
    { id: "4-5", label: "4 - 5 Días / Sem", desc: "Progreso Acelerado (Recomendado)", popular: true },
    { id: "6", label: "6 Días / Sem", desc: "Modo Atleta Implacable" }
  ],
  levels: [
    { id: "beginner", label: "Iniciación", note: "Te guiamos paso a paso desde cero" },
    { id: "intermediate", label: "Intermedio", note: "Ya entrenas pero buscas superar mesetas" },
    { id: "advanced", label: "Avanzado / Pro", note: "Buscas rendimiento atlético superior" }
  ]
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Roberto Méndez",
    role: "Arquitecto de Software • 31 años",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    metrics: "-13.5 kg Grasa | +4.8 kg Músculo",
    duration: "12 semanas",
    verified: "Escáner InBody Verificado",
    quote: "Trabajo 10 horas sentado y tenía dolor lumbar crónico. En ANTYGRAVITY el enfoque biomecánico no solo eliminó mi dolor en un mes, sino que saqué mi primer Muscle-Up a los 31 años. La energía del lugar es incomparable.",
    rating: 5,
    disciplineUsed: "Calistenia & Hypertrophy Lab"
  },
  {
    id: 2,
    name: "Andrea Castillo",
    role: "Fundadora de Startup • 28 años",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    metrics: "De 0 dominadas a 8 estrictas | 115 kg Deadlift",
    duration: "10 semanas",
    verified: "Prueba de Carga Oficial",
    quote: "Odiaba los gimnasios tradicionales donde nadie te supervisa y la música parece sala de espera. Aquí los coaches corrigen cada ángulo de tu cadera. Entrar aquí a las 7 AM es mi inyección de foco mental para todo el día.",
    rating: 5,
    disciplineUsed: "Cross Performance & Power"
  },
  {
    id: 3,
    name: "Daniel Salgado",
    role: "Director Comercial • 39 años",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    metrics: "-18 kg de Peso | Presión Arterial Óptima",
    duration: "16 semanas",
    verified: "Chequeo Médico Lab",
    quote: "Mi médico me advirtió que si no cambiaba mis hábitos tendría problemas serios. El sistema de HIIT metabólico con pulsómetro en vivo me hizo perder 18 kg sin sentirme destrozado. No vuelvo a un gimnasio convencional jamás.",
    rating: 5,
    disciplineUsed: "HIIT & Metabolic Pulse"
  },
  {
    id: 4,
    name: "Sofía Valenzuela",
    role: "Diseñadora de Producto • 25 años",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    metrics: "-9% Grasa Corporal | +3.2 kg Masa Magra",
    duration: "9 semanas",
    verified: "Certificación Biométrica",
    quote: "El diseño del espacio parece de una película de ciencia ficción. Las luces cyan, la maquinaria de última generación y los vestuarios de lujo hacen que nunca te saltes una sesión. Vale cada centavo.",
    rating: 5,
    disciplineUsed: "Hypertrophy & Calistenia"
  }
];

export const FAQS = [
  {
    question: "¿Qué pasa si nunca he entrenado o tengo condición física baja?",
    answer: "El 40% de nuestros miembros comenzaron exactamente desde cero. Nuestra metodología 'Antygravity Zero' adapta cada ejercicio mediante progresiones con poleas de desgravitación, bandas elásticas y cargas milimétricas. Jamás harás un movimiento que sobrepase tu capacidad actual."
  },
  {
    question: "¿En qué consiste exactamente la 'Primera Clase de Prueba Gratis'?",
    answer: "No es una clase masiva improvisada. Es una sesión guiada de 60 minutos donde un Head Coach evalúa tu movilidad articular, te enseña los fundamentos técnicos del método ANTYGRAVITY y realizas una rutina adaptada a tu nivel actual. Cero compromiso de compra."
  },
  {
    question: "¿Tienen contratos con permanencia forzosa o cláusulas de penalización?",
    answer: "Rotundamente NO. Creemos en la retención basada en resultados reales, no en trampas contractuales. Pagas mes a mes y puedes pausar o cancelar tu suscripción con solo avisar con 48 horas de antelación sin costos ocultos."
  },
  {
    question: "¿Qué necesito llevar a mi primera sesión?",
    answer: "Ropa deportiva cómoda, calzado deportivo plano o de entrenamiento funcional, y tu smartphone para acceder a la app. Nosotros te proporcionamos toalla higienizada de microfibra, taquilla con cerradura digital, hidratación electrolítica filtrada y amenities en vestuarios."
  },
  {
    question: "¿Cómo funciona el seguimiento de bioimpedancia InBody y nutrición?",
    answer: "Todos los planes a partir de 3 días por semana incluyen un escáner InBody 770 quincenal que mide con precisión tu agua intracelular, masa magra segmentada por extremidad y grasa visceral. Tu coach ajusta tus cargas y pautas de alimentación en base a esos números reales."
  }
];
