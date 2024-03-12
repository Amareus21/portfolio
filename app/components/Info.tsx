import TituloSeccion from "./TituloSeccion";

export default function Info() {
  return (
    <div className="my-14 px-3 animate-fade">
      <TituloSeccion>Info</TituloSeccion>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <p className="text-sm font-medium md:text-xl">
            Hola, me llamo{" "}
            <span className="font-bold text-blue-500">Miguel Ángel</span> y soy{" "}
            <span className="font-bold text-blue-500">estudiante</span> del
            ciclo formativo de Grado superior de Desarrollo de Aplicaciones Web
            en l&apos;Instiut Obert de Catalunya.
          </p>

          <p className="text-sm font-medium md:text-xl">
            Actualmente, estoy{" "}
            <span className="font-bold text-blue-500">
              buscando una empresa
            </span>{" "}
            donde realizar las{" "}
            <span className="font-bold text-blue-500">prácticas</span> para
            poder finalizar mis estudios.
          </p>
        </div>
      </div>
    </div>
  );
}
