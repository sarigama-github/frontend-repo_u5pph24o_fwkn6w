import { Car, Crown, Users } from "lucide-react";

const tariffs = [
  {
    key: "business",
    name: "Business",
    price: "от 7 000 сум/км",
    desc: "Комфортные седаны для ежедневных поездок по городу и в аэропорт.",
    perks: ["Вода и зарядки", "Вежливые водители", "Кожаный салон"],
    icon: Car,
    accent: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    key: "premium",
    name: "Premium",
    price: "от 9 000 сум/км",
    desc: "Бизнес-класс для особых случаев и деловых встреч.",
    perks: ["Лучшие авто", "Максимальный комфорт", "Приоритетная подача"],
    icon: Crown,
    accent: "from-blue-500/20 to-blue-500/0",
  },
  {
    key: "minivan",
    name: "Minivan",
    price: "от 8 000 сум/км",
    desc: "Для компаний и семьи — 6–7 мест с увеличенным багажником.",
    perks: ["Детские кресла по запросу", "Просторный салон", "Идеально для трансферов"],
    icon: Users,
    accent: "from-indigo-500/20 to-indigo-500/0",
  },
];

export default function Tariffs() {
  return (
    <section id="tariffs" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Тарифы DRIVEME</h2>
          <p className="mt-3 text-slate-300">Выберите уровень комфорта для своей поездки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tariffs.map((t) => (
            <Card key={t.key} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ name, price, desc, perks, icon: Icon, accent }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white overflow-hidden">
      <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-b ${accent} blur-2xl`} />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="mt-3 text-slate-300">{desc}</p>
        <div className="mt-4 text-emerald-300 font-semibold">{price}</div>
        <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
          {perks.map((p, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {p}
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-3 transition">
          Выбрать
        </button>
      </div>
    </div>
  );
}
