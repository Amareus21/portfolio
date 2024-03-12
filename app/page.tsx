import Image from "next/image";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navigationar from "./components/NavigationBar";
import Proyecto from "./components/Proyectos.";
import Titulo from "./components/Titulo";
import Arrow from "@/public/arrow.svg";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start md:justify-center">
      <div className="flex w-full flex-col justify-start xl:container">
        <div className="relative flex min-h-screen flex-col justify-between">
          <Navigationar />
          <Titulo />
          <Info />
          <div className="absolute bottom-0 flex w-full animate-bounce justify-center">
            <Image
              alt="flecha"
              src={Arrow}
              className="h-10 w-10 md:h-20 md:w-20"
            />
          </div>
        </div>
        <Proyecto />
      </div>
      <Footer />
    </main>
  );
}
