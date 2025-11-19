import { MapPin, CreditCard, Clock3 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step icon={<MapPin className="w-5 h-5" />} title="Укажите адрес">
            Введите пункт отправления и назначения. Мы предложим лучший маршрут.
          </Step>
          <Step icon={<CreditCard className="w-5 h-5" />} title="Выберите тариф">
            Business, Premium или Minivan — оплата картой или наличными.
          </Step>
          <Step icon={<Clock3 className="w-5 h-5" />} title="Подача вовремя">
            Мы отслеживаем дорожную ситуацию и подаем авто точно к времени.
          </Step>
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-300 text-sm">{children}</p>
    </div>
  );
}
