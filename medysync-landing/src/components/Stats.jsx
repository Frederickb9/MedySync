import { useCounterAnimation } from '../hooks/useCounterAnimation'

const stats = [
  { end: 500, suffix: '+', label: 'Citas gestionadas', icon: '📅' },
  { end: 20, suffix: '+', label: 'Médicos registrados', icon: '🩺' },
  { end: 300, suffix: '+', label: 'Pacientes atendidos', icon: '👤' },
  { end: 60, suffix: '%', label: 'Tiempo ahorrado', icon: '⚡' },
]

function StatItem({ end, suffix, label, icon }) {
  const { count, ref } = useCounterAnimation(end, 2000)
  return (
    <div ref={ref} className="text-center group">
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="font-display text-5xl lg:text-6xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <p className="text-white/50 text-sm font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map(stat => <StatItem key={stat.label} {...stat} />)}
        </div>
      </div>
    </section>
  )
}