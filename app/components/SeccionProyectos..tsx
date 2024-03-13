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
    <div className="mt-20 px-2">
      <TituloSeccion id="proyectos">Proyectos</TituloSeccion>
      <CardProyects>
        <ImageProyect src={Benzinera} />
        <div className="mb-5 flex flex-col lg:px-8">
          <div className="mb-5 flex items-center justify-center gap-5">
            <Image alt="logo javascript" src={JS} className="h-10 w-10" />
            <Image alt="logo html5" src={HTML} className="h-10 w-10" />
            <Image alt="logo css3" src={CSS} className="h-10 w-10" />
          </div>
          <TitleProyect>La Benzinera Barata</TitleProyect>
          <p className="text-sm md:text-xl">
            Página web creada como proyecto para el curso de grado superior,
            usando la librería{" "}
            <span className="font-semibold text-blue-500">Lealeft</span> para la
            creación del mapa y la{" "}
            <span className="font-semibold text-blue-500">API</span> del
            gobierno de España para mostrar los precios de carburantes de las
            gasolineras españolas y poder filtrar la más barata por municipio.
          </p>
          <div className="my-6 flex grow items-end gap-6  lg:my-0">
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
          <div className="mb-5 flex items-center justify-center gap-5">
            <Image alt="logo node" src={Node} className="h-10 w-10" />
            <Image alt="logo next" src={Next} className="h-10 w-10" />
            <Image alt="logo react" src={React} className="h-10 w-10" />
            <Image
              alt="logo de express.js"
              src={Express}
              className="h-10 w-10"
            />
            <Image alt="logo mysql" src={MySQL} className="h-10 w-10" />
          </div>
          <TitleProyect>La Cocina de Todos</TitleProyect>
          <p className="text-sm md:text-xl">
            Página web para poder crear y compartir recetas de los usuarios.
          </p>
          <p className="text-sm md:text-xl">
            Esta página fue creada como proyecto final de curso. Las diferentes
            tecnologías que se usaron fueron{" "}
            <span className="font-semibold text-blue-500">Next.js</span> para el
            front-end,
            <span className="font-semibold text-blue-500"> Express.js</span> en
            el back-end y{" "}
            <span className="font-semibold text-blue-500">MySQL</span> como base
            de datos. Para la autenticación de los usuarios se usó la plataforma{" "}
            <span className="font-semibold text-blue-500">Auth0</span>.
          </p>
          <div className="my-6 flex grow items-end gap-6 lg:my-0">
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
