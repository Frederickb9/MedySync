import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const links = {
  Producto: ['Características', 'Roles', 'Cómo funciona', 'Precios'],
  Empresa:  ['Sobre nosotros', 'Blog', 'Careers', 'Contacto'],
  Legal:    ['Privacidad', 'Términos', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-teal-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">M</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Medy<span className="gradient-text-gold">sync</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Sistema de gestión clínica diseñado para modernizar la administración de clínicas médicas en El Salvador.
            </p>
            <div className="flex gap-3">
              {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="text-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 MedySync · Desarrollado por{' '}
            <span className="text-teal-400 font-semibold">Huisquil Programming</span>
          </p>
          <p className="text-white/20 text-xs">
            Universidad de Oriente · Ingeniería en Desarrollo de Software
          </p>
        </div>
      </div>
    </footer>
  )
}