import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: '🏥',
    title: 'Registro de la clínica',
    desc: 'El administrador configura la clínica, registra médicos con sus especialidades, horarios y número de junta médica.',
  },
  {
    number: '02',
    icon: '👥',
    title: 'Alta de usuarios',
    desc: 'Se crean los usuarios del sistema asignando roles: médicos, recepcionistas y pacientes, cada uno con su acceso específico.',
  },
  {
    number: '03',
    icon: '📅',
    title: 'Gestión diaria',
    desc: 'La recepcionista agenda citas, el médico atiende y registra consultas, el paciente consulta su historial.',
  },
  {
    number: '04',
    icon: '📊',
    title: 'Control total',
    desc: 'El administrador monitorea el sistema, gestiona accesos y tiene visibilidad completa de la operación clínica.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Cómo funciona
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-deep mb-4">
            Empieza en
            <span className="gradient-text"> 4 pasos simples</span>
          </h2>
          <p className="text-deep/60 text-lg max-w-xl mx-auto">
            Implementación rápida y sin complicaciones técnicas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon, title, desc }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Circle */}
                <div className="relative inline-flex w-16 h-16 rounded-full bg-white border-2 border-teal-200 items-center justify-center text-2xl mb-5 mx-auto shadow-lg shadow-teal-100 group-hover:border-teal-400 group-hover:shadow-teal-200 transition-all duration-300">
                  {icon}
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-deep mb-3">{title}</h3>
                <p className="text-deep/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}