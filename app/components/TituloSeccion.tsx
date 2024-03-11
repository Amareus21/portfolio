import { anton } from "@/app/fonts/fonts";
import { ReactNode } from "react";

export default function TituloSeccion({ children }: { children: ReactNode }) {
  return (
    <h3
      className={`${anton.className} py-1 text-5xl  text-[#6d798b] mb-5 w-full border-b-2 border-b-slate-400`}
    >
      {children}
    </h3>
  );
}
