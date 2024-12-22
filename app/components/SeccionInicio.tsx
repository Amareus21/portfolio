import Image from "next/image";
import Info from "./Info";
import Navigationar from "./NavigationBar";
import Titulo from "./Titulo";
import Arrow from "@/public/arrow.svg";
export default function SeccionInicio(){
    return <div className="relative flex min-h-screen flex-col justify-between">
    <Navigationar />
    <Titulo />
    <Info />
    <div className="absolute bottom-0 flex w-full animate-bounce justify-center">
      <Image
        alt="flecha"
        src={Arrow}
        priority
        sizes="(max-width: 600px) 10px" // Para dispositivos móviles (max-width: 600px), usa 10px
        className="h-10 w-10 md:h-20 md:w-20 animate-fade"
      />
    </div>
  </div>
}