import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Dra. María Rodríguez',
    role: 'Médico General',
    clinic: 'Clínica Santa Ana',
    avatar: 'M',
    color: 'from-teal-400 to-teal-600',
    text: 'MedySync transformó completamente mi práctica médica. Ahora puedo revisar el historial de mis pacientes en segundos y emitir recetas digitales al instante. Ya no pierdo tiempo buscando expedientes físicos.',
    stars: 5,
  },
  {
    name: 'Rafael Hernández',
    role: 'Administrador de Clínica',
    clinic: 'Centro Médico San Miguel',
    avatar: 'R',
    color: 'from-gold-400 to-gold-600',
    text: 'La gestión de citas es impresionante. Antes teníamos conflictos de horario constantemente. Con MedySync eso desapareció por completo. El sistema bloquea automáticamente los horarios ocupados.',
    stars: 5,
  },
  {
    name: 'Sonia Segovia',
    role: 'Recepcionista',
    clinic: 'Clínica Médica Oriente',
    avatar: 'S',
    color: 'from-emerald-400 to-emerald-600',
    text: 'El autocompletado de pacientes y médicos hace mi trabajo muchísimo más rápido. En lugar de buscar IDs en un Excel, simplemente escribo el nombre y el sistema lo encuentra. Es un cambio enorme.',
    stars: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonios" className="py-24 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-300 rounded-full text-sm font-semibold mb-4 border border-teal-500/20">
            Testimonios
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen quienes
            <span className="gradient-text"> ya lo usan</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, clinic, avatar, color, text, stars }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-teal-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex text-gold-400 text-sm mb-4">
                {'★'.repeat(stars)}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-white/40 text-xs">{role} · {clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}