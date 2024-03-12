"use client";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
export default function Footer({ id }: { id?: string }) {
  const [textTooltip, setTextTooltip] = useState('Click para copiar')
  return (
    <footer
      id="contacto"
      className={`px-2 bg-[#050505] text-[#909bac] py-5 w-full flex justify-center h-32 items-center`}
    >
      <div className="xl:container mx-auto  flex justify-center">
        <Tooltip
          content={<p className="text-orange-500 bg-black">{textTooltip}</p>} placement="bottom"
        >
          <p
            className="lg:4xl md:text-2xl text-xl font-medium m-0 hover:text-orange-500 hover:cursor-pointer"
            onClick={(e) =>{
              navigator.clipboard.writeText(e.currentTarget.innerText)
              setTextTooltip('Copiado')
            }
            
            }
            onMouseLeave={() => setTextTooltip('Click para copiar')}
          >
            miguelortiz8105@gmail.com
          </p>
        </Tooltip>
      </div>
    </footer>
  );
}
