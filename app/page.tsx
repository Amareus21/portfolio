import Footer from "./components/Footer";
import Info from "./components/Info";
import Proyecto from "./components/Proyectos.";
import Titulo from "./components/Titulo";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start md:justify-center ">
      <div className="md:container max-w-full flex flex-col justify-start">
        <div className="relative h-screen flex flex-col md:justify-center justify-around">
          <Titulo />
          <Info />
          <div className="absolute bottom-0 text-slate-600 w-full flex justify-center animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <Proyecto />
      </div>
      <Footer />
    </main>
  );
}
