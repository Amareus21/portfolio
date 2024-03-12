import Image from "next/image";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navigationar from "./components/NavigationBar";
import Proyecto from "./components/Proyectos.";
import Titulo from "./components/Titulo";
import Arrow from "@/public/arrow.svg"
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start md:justify-center">
      <div className="xl:container w-full flex flex-col justify-start">
        <div className="relative min-h-screen flex flex-col justify-between">
          <Navigationar />
          <Titulo />
          <Info />
          <div className="absolute bottom-0 w-full flex justify-center animate-bounce">
            <Image alt="flecha" src={Arrow} className="md:w-20 md:h-20 w-10 h-10" />         
          </div>
        </div>
        <Proyecto />
      </div>
      <Footer />
    </main>
  );
}
