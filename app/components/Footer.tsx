"use client";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
export default function Footer({ id }: { id?: string }) {
  const [textTooltip, setTextTooltip] = useState("Click para copiar");
  return (
    <footer
      id="contacto"
      className={`flex w-full items-center justify-center bg-[#050505] px-2 py-5 text-[#909bac]`}
    >
      <div className="mx-auto w-full flex flex-col items-center justify-center xl:container">
        <div className="my-10">
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
        <div className="flex justify-end w-full md:text-base text-xs">
          <p>Diseñado por Miguel Ortiz</p>
        </div>
      </div>
    </footer>
  );
}
