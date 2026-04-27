import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const roles = [
  {
    emoji: '🛡️',
    role: 'Administrador',
    desc: 'Control total del sistema',
    perks: [
      'Gestión de usuarios y roles',
      'Alta y baja de médicos',
      'Visualización de logs del sistema',
      'Configuración de accesos',
      'Estadísticas globales',
    ],
    gradient: 'from-deep to-teal-900',
    accent: 'text-teal-300',
    border: 'border-teal-500/30',
    badge: 'bg-teal-500/20 text-teal-300',
  },
  {
    emoji: '🩺',
    role: 'Médico',
    desc: 'Enfocado en la atención clínica',
    perks: [
      'Ver sus citas del día',
      'Registrar consultas y signos vitales',
      'Emitir recetas digitales',
      'Gestionar diagnósticos',
      'Consultar expedientes de pacientes',
    ],
    gradient: 'from-teal-700 to-teal-900',
    accent: 'text-teal-200',
    border: 'border-teal-400/30',
    badge: 'bg-teal-400/20 text-teal-200',
  },
  {
    emoji: '📋',
    role: 'Recepcionista',
    desc: 'Coordinación del flujo de pacientes',
    perks: [
      'Agendar y editar citas',
      'Registro de nuevos pacientes',
      'Gestión de sala de espera',
      'Buscar expedientes',
      'Gestión de médicos activos',
    ],
    gradient: 'from-gold-600 to-amber-800',
    accent: 'text-gold-300',
    border: 'border-gold-500/30',
    badge: 'bg-gold-400/20 text-gold-300',
  },
  {
    emoji: '👤',
    role: 'Paciente',
    desc: 'Acceso a su información médica',
    perks: [
      'Ver sus citas programadas',
      'Solicitar nuevas citas',
      'Consultar historial clínico',
      'Ver recetas emitidas',
      'Revisar sus consultas previas',
    ],
    gradient: 'from-emerald-700 to-teal-900',
    accent: 'text-emerald-300',
    border: 'border-emerald-400/30',
    badge: 'bg-emerald-400/20 text-emerald-300',
  },
]

export default function Roles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="roles" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Roles del sistema
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-deep mb-4">
            Cada usuario tiene su
            <br />
            <span className="gradient-text">propio espacio de trabajo</span>
          </h2>
          <p className="text-deep/60 text-lg max-w-2xl mx-auto">
            MedySync adapta la experiencia según el rol. Cada perfil ve exactamente lo que necesita, sin más ni menos.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ emoji, role, desc, perks, gradient, accent, border, badge }, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative bg-gradient-to-b ${gradient} rounded-3xl p-7 border ${border} shadow-xl shadow-deep/10 overflow-hidden group`}
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />

              <div className="relative">
                {/* Emoji */}
                <div className="text-4xl mb-4">{emoji}</div>

                {/* Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badge} mb-3`}>
                  {role}
                </span>

                <p className="text-white/60 text-xs mb-5">{desc}</p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-5" />

                {/* Perks */}
                <ul className="space-y-2.5">
                  {perks.map(perk => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className={`${accent} text-sm mt-0.5`}>✓</span>
                      <span className="text-white/70 text-xs leading-relaxed">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}