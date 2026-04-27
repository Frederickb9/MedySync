import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiX, FiCheck } from 'react-icons/fi'

const problems = [
  'Citas agendadas en papel o en Excel',
  'Expedientes perdidos o desactualizados',
  'Sin control de horarios de médicos',
  'Historial clínico inaccesible',
  'Facturación manual y propensa a errores',
  'Sin visibilidad del estado de la clínica',
]

const solutions = [
  'Citas digitales con validación de horarios',
  'Expediente digital centralizado y seguro',
  'Control total de médicos y disponibilidad',
  'Historial clínico consultable en segundos',
  'Facturación integrada y automatizada',
  'Dashboard con estadísticas en tiempo real',
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="beneficios" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            El problema real
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-deep mb-4">
            Las clínicas pierden tiempo y dinero
            <br />
            <span className="gradient-text">con procesos obsoletos</span>
          </h2>
          <p className="text-deep/60 text-lg max-w-2xl mx-auto">
            MedySync transforma cada proceso manual en una operación digital, rápida y confiable.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-50 border border-red-100 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <FiX className="text-red-500 text-xl font-bold" />
              </div>
              <h3 className="font-display text-xl font-bold text-red-700">Sin MedySync</h3>
            </div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiX className="text-red-500 text-xs" />
                  </div>
                  <span className="text-red-800/80 text-sm">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-teal-50 border border-teal-100 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <FiCheck className="text-teal-600 text-xl font-bold" />
              </div>
              <h3 className="font-display text-xl font-bold text-teal-700">Con MedySync</h3>
            </div>
            <div className="space-y-3">
              {solutions.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-teal-600 text-xs" />
                  </div>
                  <span className="text-teal-900/80 text-sm">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}