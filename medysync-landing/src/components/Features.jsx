import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiUsers, FiFileText, FiActivity, FiDollarSign, FiShield } from 'react-icons/fi'

const features = [
  {
    icon: FiCalendar,
    title: 'Gestión de Citas',
    desc: 'Agenda, edita y cancela citas sin conflictos de horario. Validación automática de disponibilidad médica en tiempo real.',
    color: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: FiUsers,
    title: 'Control de Médicos',
    desc: 'Registra especialistas con número de junta médica, horarios y consultorio. Activa o desactiva según disponibilidad.',
    color: 'from-gold-400 to-gold-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: FiFileText,
    title: 'Expediente Digital',
    desc: 'Historial clínico completo por paciente. Consultas, diagnósticos, recetas y antecedentes en un solo lugar.',
    color: 'from-teal-300 to-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: FiActivity,
    title: 'Consultas y Diagnósticos',
    desc: 'Registra signos vitales, observaciones y diagnósticos durante la consulta. Emite recetas digitales al instante.',
    color: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: FiDollarSign,
    title: 'Facturación Integrada',
    desc: 'Genera facturas automáticamente al finalizar cada consulta. Historial completo de pagos y estados de cuenta.',
    color: 'from-gold-300 to-gold-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: FiShield,
    title: 'Control de Acceso por Roles',
    desc: 'Cuatro roles: Administrador, Médico, Recepcionista y Paciente. Cada usuario ve solo lo que le corresponde.',
    color: 'from-teal-500 to-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="características" className="py-24 bg-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px]" />
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
            Características
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Todo lo que tu clínica
            <br />
            <span className="gradient-text">necesita en un solo lugar</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Un ecosistema completo diseñado específicamente para el flujo de trabajo de clínicas médicas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 hover:border-teal-500/30 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white text-xl" />
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(42,173,148,0.06), transparent 70%)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}