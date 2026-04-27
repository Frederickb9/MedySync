import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiSend, FiCheck } from 'react-icons/fi'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', clinica: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.clinica || !form.email) return
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-deep rounded-[2rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-teal-900/20"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative text-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl mb-4"
            >
              🚀
            </motion.div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Listo para modernizar
              <br />
              <span className="gradient-text">tu clínica?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Solicita una demo gratuita y descubre cómo MedySync puede transformar la gestión de tu clínica en días.
            </p>
          </div>

          {/* Form */}
          {!sent ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="relative space-y-4 max-w-lg mx-auto"
            >
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={e => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Nombre de tu clínica"
                value={form.clinica}
                onChange={e => setForm({ ...form, clinica: e.target.value })}
                className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-4 bg-white/8 border border-white/15 rounded-2xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(42,173,148,0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-2xl font-bold text-base shadow-lg shadow-teal-500/30 transition-all"
              >
                Solicitar Demo Gratuita <FiSend />
              </motion.button>
              <p className="text-white/30 text-xs text-center">
                Sin compromisos · Respuesta en menos de 24 horas
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-teal-400 text-2xl" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">¡Solicitud enviada!</h3>
              <p className="text-white/60 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}