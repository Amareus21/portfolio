import Link from "next/link";

export default function Navigationar() {
  return (
    <nav className=" flex items-start justify-end px-2 py-2 text-xs font-extrabold text-[#909bac] sm:text-sm">
      <ul className="flex max-h-10 gap-5 overflow-hidden uppercase md:gap-10">
        <li className="h-8 -translate-y-8 transition-all duration-300 md:translate-y-0 md:hover:-translate-y-8">
          <div className="flex h-8 items-center hover:cursor-pointer">
            Proyectos
          </div>
          <Link className="text-orange-500 " href="#proyectos">
            <div className="flex h-8 items-center hover:cursor-pointer">
              Proyectos
            </div>
          </Link>
        </li>
        <li className="h-8 -translate-y-8 transition-all duration-300 md:translate-y-0 md:hover:-translate-y-8">
          <div className="flex h-8 items-center hover:cursor-pointer">
            Contacto
          </div>
          <Link className="text-orange-500 " href="#contacto">
            <div className="flex h-8 items-center hover:cursor-pointer">
              Contacto
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
