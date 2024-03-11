import TituloSeccion from "./TituloSeccion";

export default function Info() {
  return (
    <div className="px-3 my-14">
      <TituloSeccion>Info</TituloSeccion>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <p className="md:text-xl text-sm font-medium">
            Hola, me llamo <span className="font-bold text-pink-500">Miguel Ángel</span> y soy <span className="font-bold text-pink-500">estudiante</span> del ciclo formativo de
            Grado superior de Desarrollo de Aplicaciones Web en l&apos;Instiut
            Obert de Catalunya.
          </p>
          <p className="md:text-xl text-sm font-medium">
            Actualmente,estoy <span className="font-bold text-pink-500">buscando empresa</span> donde realizar
            las <span className="font-bold text-pink-500">prácticas</span> para poder finalizar mis estudios.
          </p>
        </div>
        <div className="lg:w-1/2 flex items-end text-[#909bac] l">
          <div className="flex gap-2 items-center  lg:justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p className="md:text-xl text-sm font-medium">miguelortiz8105@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
