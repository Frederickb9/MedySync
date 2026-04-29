import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const floatingCards = [
  { icon: '📅', label: 'Cita confirmada', sub: 'Dr. Sonia Segovia · 09:00', color: 'from-teal-400/20 to-teal-600/10', delay: 0 },
  { icon: '✅', label: 'Historial actualizado', sub: 'Paciente #EXP-0042', color: 'from-gold-400/20 to-gold-600/10', delay: 0.3 },
  { icon: '💊', label: 'Receta emitida', sub: 'Amoxicilina 500mg', color: 'from-teal-300/20 to-teal-500/10', delay: 0.6 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-deep overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(42,173,148,1) 1px, transparent 1px), linear-gradient(90deg, rgba(42,173,148,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-8"
            >
              <MdVerified className="text-teal-400" />
              Sistema clínico de nueva generación
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Gestiona tu clínica
              <br />
              <span className="gradient-text">sin complicaciones</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
            >
              MedySync centraliza citas, expedientes, recetas y facturación en una sola plataforma.
              Diseñado para médicos, recepcionistas y pacientes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(42,173,148,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-2xl font-semibold text-base shadow-lg shadow-teal-500/30 transition-all"
              >
                Solicitar Demo <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('características')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-7 py-4 border border-white/20 text-white rounded-2xl font-semibold text-base hover:bg-white/5 transition-all"
              >
                <FiPlay className="text-teal-400" /> Ver características
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {['S','R','K','A'].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-deep flex items-center justify-center text-white text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-gold-400 text-sm">★★★★★</div>
                <p className="text-white/50 text-xs mt-0.5">Confiado por clínicas en El Salvador</p>
              </div>
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            {/* Main dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md glass rounded-3xl p-6 border border-teal-500/20 shadow-2xl shadow-teal-900/40"
            >
              {/* Mock header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-sm font-bold">M</div>
                <div>
                  <p className="text-white text-sm font-semibold">MedySync</p>
                  <p className="text-white/40 text-xs">Panel de Recepcionista</p>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400/60" />
                </div>
              </div>

              {/* Mock stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[['12','Citas hoy'],['3','En espera'],['48','Pacientes']].map(([n,l]) => (
                  <div key={l} className="bg-white/5 rounded-2xl p-3 text-center">
                    <p className="text-teal-300 font-display font-bold text-xl">{n}</p>
                    <p className="text-white/40 text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              {/* Mock list */}
              <div className="space-y-2.5">
                {[
                  { name: 'Carlos Pérez', time: '09:00', status: 'Confirmada', color: 'bg-teal-400' },
                  { name: 'Ana López', time: '09:30', status: 'Pendiente', color: 'bg-gold-400' },
                  { name: 'José Ramos', time: '10:00', status: 'Confirmada', color: 'bg-teal-400' },
                ].map(({ name, time, status, color }) => (
                  <div key={name} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5">
                    <div className={`w-2 h-2 rounded-full ${color}`} />
                    <span className="text-white/80 text-xs font-medium flex-1">{name}</span>
                    <span className="text-white/40 text-xs">{time}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${color === 'bg-teal-400' ? 'bg-teal-400/20 text-teal-300' : 'bg-gold-400/20 text-gold-400'}`}>{status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating notification cards */}
            {floatingCards.map(({ icon, label, sub, color, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: delay + 0.6 },
                  x: { duration: 0.5, delay: delay + 0.6 },
                  y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay },
                }}
                className={`absolute bg-gradient-to-br ${color} glass rounded-2xl px-4 py-3 border border-white/10 shadow-xl flex items-center gap-3`}
                style={{
                  right: delay === 0 ? '-10%' : delay === 0.3 ? '-15%' : '-8%',
                  top: delay === 0 ? '10%' : delay === 0.3 ? '50%' : '80%',
                }}
              >
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold">{label}</p>
                  <p className="text-white/50 text-xs">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  )
}