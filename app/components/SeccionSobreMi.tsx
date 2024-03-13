import Image from "next/image";
import TituloSeccion from "./TituloSeccion";
import YoMismo from "@/public/yomismo.png";

export default function SeccionSobreMi() {
  return (
    <div id="sobremi" className="lg:container h-min mx-auto px-2">
      <TituloSeccion>Sobre mí</TituloSeccion>
      <div className="flex flex-col lg:gap-0 gap-4 lg:flex-row mb-10">
        <div className="lg:w-1/2">
          <p className="text-sm font-medium md:text-xl">
            He trabajado durante más de 20 años como electricista, 10 de los
            cuales han sido como autónomo. Durante estos 20 años me ha
            apasionado enfrentarme a proyectos que incluyeran el desarrollo de
            automatismos y sistemas eléctricos complejos.
          </p>

          <p className="text-sm font-medium md:text-xl">
            En 2020, decidí darme la oportunidad de hacer lo que realmente me
            apasiona, y decidí estudiar programación formándome como{" "}
            <span className="font-bold text-blue-500">
              técnico superior en Desarrollo de Aplicaciones Web
            </span>
            , motivado por mi pasión por la{" "}
            <span className="font-bold text-blue-500">
              resolución de problemas, el aprendizaje continuo y la creatividad
            </span>
            .
          </p>

          <p className="text-sm font-medium md:text-xl">
            {" "}
            Mi tiempo libre lo dedico a viajar o hacer senderismo con mi mujer y
            nuestro perro Gufo.
          </p>
        </div>
        <div className="relative min-h-[220px] lg:w-1/2 overflow-hidden">
          <Image
            alt="imagen de mi mismo"
            src={YoMismo}
            className="absolute top-0 left-0 w-full h-full object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
}
