"use client";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
export default function Footer({ id }: { id?: string }) {
  const [textTooltip, setTextTooltip] = useState("Click para copiar");
  return (
    <footer
      id="contacto"
      className={`flex h-32 w-full items-center justify-center bg-[#050505] px-2 py-5 text-[#909bac]`}
    >
      <div className="mx-auto flex justify-center xl:container">
        <Tooltip
          content={<p className="bg-black text-orange-500">{textTooltip}</p>}
          placement="bottom"
        >
          <p
            className="m-0 text-xl font-medium hover:cursor-pointer hover:text-orange-500 md:text-2xl lg:text-3xl"
            onClick={(e) => {
              navigator.clipboard.writeText(e.currentTarget.innerText);
              setTextTooltip("Copiado");
            }}
            onMouseLeave={() => setTextTooltip("Click para copiar")}
          >
            miguelortiz8105@gmail.com
          </p>
        </Tooltip>
      </div>
    </footer>
  );
}
