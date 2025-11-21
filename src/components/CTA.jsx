function CTA() {
  return (
    <section id="join" className="bg-slate-950 text-slate-200 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Join Hivebizz</h2>
          <p className="mt-3 text-slate-300">Step in, introduce yourself, and get to work.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-200 transition-colors">
              Request access
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition-colors">
              What you’ll find inside
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
