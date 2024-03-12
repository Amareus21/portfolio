"use client";
import { anton } from "@/app/fonts/fonts";
export default function Footer({ id }: { id?: string }) {
  return (
    <div
      id="contacto"
      className={`px-2 bg-[#050505] text-[#909bac] py-5 w-full flex justify-center h-32 items-center`}
    >
      <div className="xl:container mx-auto flex justify-center">
        <span className="invisible hover:visible text-orange-500">Copiame</span>
        <p
          className="md:text-3xl text-xl font-medium m-0 hover:text-orange-500 hover:cursor-pointer"
          onClick={(e) =>
            navigator.clipboard.writeText(e.currentTarget.innerText)
          }
          
        >
          miguelortiz8105@gmail.com
        </p>
      </div>
      
    </div>
  );
}
