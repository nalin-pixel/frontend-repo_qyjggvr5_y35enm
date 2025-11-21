function Who() {
  const groups = [
    {
      title: 'Professionals',
      points: ['Level up skills', 'Share work', 'Find peers'],
    },
    {
      title: 'Founders',
      points: ['Hire operators', 'Source customers', 'Get practical advice'],
    },
    {
      title: 'Job seekers',
      points: ['Show your work', 'Get referred', 'Find good roles'],
    },
    {
      title: 'Operators',
      points: ['Swap playbooks', 'Solve blockers fast', 'Join real projects'],
    },
  ]

  return (
    <section className="bg-slate-950 text-slate-200 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Who this is for</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                {g.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
