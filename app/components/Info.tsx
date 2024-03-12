import TituloSeccion from "./TituloSeccion";

export default function Info() {
  return (
    <div className="px-3 my-14">
      <TituloSeccion>Info</TituloSeccion>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <p className="md:text-xl text-sm font-medium">
            Hola, me llamo{" "}
            <span className="font-bold text-blue-500">Miguel Ángel</span> y soy{" "}
            <span className="font-bold text-blue-500">estudiante</span> del
            ciclo formativo de Grado superior de Desarrollo de Aplicaciones Web
            en l&apos;Instiut Obert de Catalunya.
          </p>

          <p className="md:text-xl text-sm font-medium">
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
