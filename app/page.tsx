import OmNomModel from "@/components/models/om-nom";
import { Topbar } from "@/components/topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        {/* Баннер с градиентом, роботом, поиском и быстрыми ссылками */}
        <div className="background-home relative flex h-96 flex-col justify-center gap-6 px-4 pt-8 pb-4 sm:px-8 md:px-20 lg:px-40 xl:px-80">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Робот */}
            <div className="flex flex-shrink-0 items-center justify-center">
              <OmNomModel />
            </div>
            {/* Центр: поиск и быстрые ссылки */}
            <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
              <div className="flex w-full max-w-xl flex-col gap-2">
                <div className="flex gap-2">
                  <button className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/30">
                    Рейвуслуги и Ам Ням
                  </button>
                  <button className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/30">
                    Оценка IT-компетенций
                  </button>
                  <button className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/30">
                    Служба по контракту
                  </button>
                </div>
                <div className="mt-2 flex w-full">
                  <input
                    type="text"
                    placeholder="Введите запрос..."
                    className="flex-1 rounded-l-full bg-white/90 px-5 py-3 text-base placeholder:text-gray-400 focus:outline-none"
                  />
                  <button className="text-primary rounded-r-full bg-white/90 px-6 py-3 font-semibold hover:bg-white">
                    →
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                    Запись к врачу
                  </button>
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                    Единое пособие
                  </button>
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                    Адресная справка
                  </button>
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                    Электронная трудовая
                  </button>
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                    Приставы
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Новое на портале */}
        <section className="w-full px-4 py-10 sm:px-8 md:px-20 lg:px-40 xl:px-80">
          <h2 className="mb-6 text-2xl font-bold">Новое на портале</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* Карточки */}
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">✉️</div>
              <div className="font-semibold">Налоговые уведомления</div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">🗂️</div>
              <div className="font-semibold">Каталог жизненных ситуаций</div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">📱</div>
              <div className="font-semibold">Сим-карты для иностранцев</div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">⭐</div>
              <div className="font-semibold">
                Меры поддержки для защитников Отечества
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">❤️</div>
              <div className="font-semibold">
                Станьте волонтёром в новых регионах
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 text-center shadow">
              <div className="text-3xl">🏦</div>
              <div className="font-semibold">
                Установите самозапрет на кредиты
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-10 flex w-full flex-col items-center justify-between gap-8 rounded-t-3xl bg-[#f4f7fa] px-4 py-8 text-lg text-gray-500 sm:px-8 md:flex-row md:items-start md:px-20 lg:px-40 xl:px-80">
        {/* Ссылки */}
        <div className="flex w-full max-w-3xl flex-1 flex-col gap-8 sm:flex-row">
          <div className="flex min-w-[150px] flex-col gap-3">
            <a href="#" className="hover:underline">
              Личный кабинет
            </a>
            <a href="#" className="hover:underline">
              Регистрация
            </a>
            <a href="#" className="hover:underline">
              Помощь
            </a>
          </div>
          <div className="flex min-w-[200px] flex-col gap-3">
            <a href="#" className="hover:underline">
              Как найти услугу
            </a>
            <a href="#" className="hover:underline">
              Карта центров обслуживания
            </a>
            <a href="#" className="hover:underline">
              Партнёрам
            </a>
          </div>
          <div className="flex min-w-[200px] flex-col items-start justify-center gap-3 md:items-center md:justify-start">
            <span className="flex items-center gap-2">
              <span className="text-xl">✈️</span> кв-л <b>26-09-101201</b>
            </span>
          </div>
        </div>
        {/* Соцсети */}
        <div className="mt-6 flex gap-3 md:mt-0">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300 text-2xl transition hover:bg-gray-400"
            title="Telegram"
          >
            ✈️
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300 text-2xl transition hover:bg-gray-400"
            title="VK"
          >
            🖖
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300 text-2xl transition hover:bg-gray-400"
            title="OK"
          >
            👤
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300 text-2xl transition hover:bg-gray-400"
            title="Rutube"
          >
            🅿️
          </a>
        </div>
      </footer>
    </>
  );
}
