import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-8xl font-extrabold tracking-tight text-fg">404</p>
          <h1 className="mt-6 text-xl font-semibold text-fg">ეს გვერდი ვერ მოიძებნა</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            ბმული შეიძლება მოძველებული იყოს, ან გვერდი გადატანილია.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            მთავარ გვერდზე დაბრუნება
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
