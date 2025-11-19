export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white font-semibold">DRIVEME</div>
          <nav className="flex items-center gap-6">
            <a href="#tariffs" className="hover:text-white transition">Тарифы</a>
            <a href="#" className="hover:text-white transition">О сервисе</a>
            <a href="#" className="hover:text-white transition">Контакты</a>
          </nav>
        </div>
        <div className="mt-6 text-slate-500">© {new Date().getFullYear()} DRIVEME. Все права защищены.</div>
      </div>
    </footer>
  );
}
