import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Who from './components/Who'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">Hivebizz</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Benefits</a>
            <a href="#" className="hover:text-white">Who</a>
            <a href="#join" className="rounded-md bg-white text-slate-900 px-3 py-1.5 font-medium hover:bg-slate-200 transition-colors">Join</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Benefits />
        <Who />
        <CTA />
      </main>

      <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Hivebizz</p>
          <a href="/test" className="hover:text-white">Status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
