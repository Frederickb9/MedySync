import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['Características', 'Beneficios', 'Roles', 'Testimonios', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-deep/90 backdrop-blur-md shadow-lg shadow-teal-900/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">M</span>
            </div>
            <span className="font-display font-bold text-xl text-white">
              Medy<span className="gradient-text-gold">sync</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('Contacto')}
              className="px-5 py-2.5 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-shadow"
            >
              Solicitar Demo
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-deep/95 backdrop-blur-md border-b border-teal-800/30 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-white/80 hover:text-white text-left text-sm font-medium py-2 border-b border-teal-800/20"
              >
                {link}
              </button>
            ))}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('Contacto')}
              className="mt-2 px-5 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-xl font-semibold text-sm"
            >
              Solicitar Demo
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}