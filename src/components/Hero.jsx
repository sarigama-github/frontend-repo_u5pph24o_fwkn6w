import { Crown, Shield, Smartphone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.2),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 text-xs mb-5">
              <Crown className="w-4 h-4" />
              <span>Премиальный сервис для Узбекистана</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              DRIVEME — ваш водитель для деловых и личных поездок
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Комфорт, безопасность и пунктуальность. Выберите тариф — Business, Premium или Minivan — и отправляйтесь куда угодно по всему Узбекистану.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+998000000000"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition shadow-lg shadow-emerald-500/20"
              >
                Заказать поездку
              </a>
              <a
                href="#tariffs"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 transition border border-white/10 backdrop-blur"
              >
                Посмотреть тарифы
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <Feature icon={<Shield className="w-4 h-4" />} label="Безопасность" />
              <Feature icon={<Smartphone className="w-4 h-4" />} label="Безналичная оплата" />
              <Feature icon={<MapPin className="w-4 h-4" />} label="Точный маршрут" />
              <Feature icon={<Crown className="w-4 h-4" />} label="Премиальные авто" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/40 via-blue-500/40 to-indigo-500/40 blur-2xl rounded-3xl" />
              <div className="relative bg-slate-900/70 border border-white/10 rounded-3xl p-4 backdrop-blur">
                {/* Phone mock */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-6">
                  <div className="flex items-center gap-2 text-slate-300 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm">DRIVEME</span>
                  </div>
                  <div className="rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_70%_0%,rgba(59,130,246,0.25),transparent_45%)] p-5 border border-white/5">
                    <div className="text-white font-semibold">Пункт назначения</div>
                    <div className="mt-2 h-10 rounded-lg bg-white/10 border border-white/10 backdrop-blur flex items-center px-3 text-slate-300">
                      Введите адрес...
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center">
                        <div className="text-xs text-slate-300">Business</div>
                        <div className="text-white font-bold">7 000 сум/км</div>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center">
                        <div className="text-xs text-slate-300">Premium</div>
                        <div className="text-white font-bold">9 000 сум/км</div>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-center">
                        <div className="text-xs text-slate-300">Minivan</div>
                        <div className="text-white font-bold">8 000 сум/км</div>
                      </div>
                    </div>
                    <button className="mt-5 w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-3 transition">
                      Найти автомобиль
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-emerald-500/20 blur-2xl" />
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-blue-500/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-200/90">
      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
