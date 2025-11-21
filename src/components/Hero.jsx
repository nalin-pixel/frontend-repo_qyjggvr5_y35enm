import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-slate-950 text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,rgba(15,23,42,0.35)_60%,rgba(15,23,42,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-slate-300 backdrop-blur">
          Hivebizz
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          A serious community for people who get things done
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 text-base sm:text-lg">
          Connect with peers, share opportunities, and work on real projects. No fluff. Just useful conversations that move you forward.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#join" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-200 transition-colors">
            Join the community
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition-colors">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
