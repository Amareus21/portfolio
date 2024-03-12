import Link from "next/link";

export default function Navigationar() {
  return (
    <nav className=" text-[#909bac] flex justify-end items-start sm:text-sm text-xs px-2 md:p-5">
      <ul className="flex md:gap-10 gap-5 uppercase max-h-10 overflow-hidden">
        
        <li className="h-8 md:hover:-translate-y-8 -translate-y-8 md:translate-y-0 transition-all duration-300">
          <div className="h-8 flex items-center hover:cursor-pointer">
            Proyectos
          </div>
          <Link className="text-orange-500 " href="#proyectos">
            <div className="h-8 flex items-center hover:cursor-pointer">
              Proyectos
            </div>
          </Link>
        </li>
        <li className="h-8 md:hover:-translate-y-8 -translate-y-8 md:translate-y-0 transition-all duration-300">
          <div className="h-8 flex items-center hover:cursor-pointer">
            Sobre mí
          </div>
          <Link className="text-orange-500 " href="#sobremi">
            <div className="h-8 flex items-center hover:cursor-pointer">
              Sobre mí
            </div>
          </Link>
        </li>
        <li className="h-8 md:hover:-translate-y-8 -translate-y-8 md:translate-y-0 transition-all duration-300">
          <div className="h-8 flex items-center hover:cursor-pointer">
            Contacto
          </div>
          <Link className="text-orange-500 " href="#contacto">
            <div className="h-8 flex items-center hover:cursor-pointer">
              Contacto
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
