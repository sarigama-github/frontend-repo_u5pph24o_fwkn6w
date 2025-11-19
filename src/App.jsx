import Hero from "./components/Hero";
import Tariffs from "./components/Tariffs";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500" />
            <span className="font-semibold">DRIVEME</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#tariffs" className="hover:text-white">Тарифы</a>
            <a href="#how" className="hover:text-white">Как это работает</a>
            <a href="#" className="hover:text-white">Контакты</a>
          </nav>
          <a href="tel:+998000000000" className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition">
            Заказать
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="how"><HowItWorks /></div>
        <Tariffs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
