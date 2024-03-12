import Benzinera from "@/public/benzinera.webp";
import Image from "next/image";
import Cocina from "@/public/LaCocinaDeTodos.webp";
import Express from "@/public/expressjs_dark.svg";
import Node from "@/public/nodejs.svg";
import Next from "@/public/nextjs_icon_dark.svg";
import React from "@/public/react.svg";
import MySQL from "@/public/mysql.svg";
import JS from "@/public/javascript.svg";
import HTML from "@/public/html5.svg";
import CSS from "@/public/css.svg";
import TituloSeccion from "./TituloSeccion";
import LineaSeparadora from "./LineaSeparadora";
import CardProyects from "./CardProyects";
import Boton from "./Boton";
import ImageProyect from "./ImageProyect";
import TitleProyect from "./TitleProyect";

export default function Proyecto() {
  return (
    <div className="px-2 mt-20">
      <TituloSeccion id="proyectos">Proyectos</TituloSeccion>
      <LineaSeparadora />
      <CardProyects>
        <ImageProyect src={Benzinera} />
        <div className="mb-5 lg:px-8 flex flex-col">
          <div className="flex justify-center gap-5 items-center mb-5">
            <Image alt="logo javascript" src={JS} className="w-10 h-10" />
            <Image alt="logo html5" src={HTML} className="w-10 h-10" />
            <Image alt="logo css3" src={CSS} className="w-10 h-10" />
          </div>
          <TitleProyect>La Benzinera Barata</TitleProyect>
          <p className="md:text-xl text-sm">
            Página web creada como proyecto para el curso de grado superior,
            usando la librería{" "}
            <span className="text-blue-500 font-semibold">Lealeft</span> para la
            creación del mapa y la{" "}
            <span className="text-blue-500 font-semibold">API</span> del
            gobierno de España para mostrar los precios de carburantes de las
            gasolineras españolas y poder filtrar la más barata por municipio.
          </p>
          <div className="grow flex gap-6 items-end lg:my-0  my-6">
            <Boton
              type="preview"
              text="Preview"
              href="https://amareus21.github.io/benzinera/"
            />
            <Boton
              type="code"
              text="Code"
              href="https://github.com/Amareus21/benzinera"
            />
          </div>
        </div>
      </CardProyects>

      {/*                                  */}
      <LineaSeparadora />
      <CardProyects>
        <ImageProyect src={Cocina} />
        <div className="mb-5 flex flex-col lg:px-8">
          <div className="flex justify-center gap-5 items-center mb-5">
            <Image alt="logo node" src={Node} className="w-10 h-10" />
            <Image alt="logo next" src={Next} className="w-10 h-10" />
            <Image alt="logo react" src={React} className="w-10 h-10" />
            <Image
              alt="logo de express.js"
              src={Express}
              className="h-10 w-10"
            />
            <Image alt="logo mysql" src={MySQL} className="w-10 h-10" />
          </div>
          <TitleProyect>La Cocina de Todos</TitleProyect>
          <p className="md:text-xl text-sm">
            Página web para poder crear y compartir recetas de los usuarios.
          </p>
          <p className="md:text-xl text-sm">
            Esta página fue creada como proyecto final de curso. Las diferentes
            tecnologías que se usaron fueron{" "}
            <span className="text-blue-500 font-semibold">Next.js</span> para el
            front-end,
            <span className="text-blue-500 font-semibold"> Express.js</span> en
            el back-end y{" "}
            <span className="text-blue-500 font-semibold">MySQL</span> como base
            de datos. Para la autenticación de los usuarios se usó la plataforma{" "}
            <span className="text-blue-500 font-semibold">Auth0</span>.
          </p>
          <div className="grow flex gap-6 items-end lg:my-0 my-6">
            <Boton
              type="code"
              text="Code"
              href="https://github.com/GestoresIOC2023/GestoresCocina"
            />
          </div>
        </div>
      </CardProyects>
      <LineaSeparadora />
    </div>
  );
}
