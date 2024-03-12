import Link from "next/link";

export default function Navigationar(){

    return <nav className=" text-[#909bac] flex justify-end items-start md:text-sm text-xs p-5">
        <ul className="flex gap-10 uppercase">
            <li><Link href='#proyectos'>Proyectos</Link></li>
            <li><Link href='#contacto'>Contacto</Link></li>
        </ul>
    </nav>
}