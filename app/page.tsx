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

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
