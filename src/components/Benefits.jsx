function Benefits() {
  const items = [
    {
      title: 'Real connections',
      desc: 'Meet serious people. Build relationships that lead to work and opportunities.',
    },
    {
      title: 'Practical insights',
      desc: 'No theory. Real tactics, tools, and playbooks that ship results.',
    },
    {
      title: 'Opportunities',
      desc: 'Find collaborators, hires, clients, and roles. Share openings and deals.',
    },
    {
      title: 'Focused discussions',
      desc: 'Direct, useful threads. Signal over noise. Moderated for quality.',
    },
  ]

  return (
    <section className="bg-slate-950 text-slate-200 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Community benefits</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
