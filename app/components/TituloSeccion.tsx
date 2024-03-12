import { anton } from "@/app/fonts/fonts";
import { ReactNode } from "react";

export default function TituloSeccion({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <h3
      id={id}
      className={`${anton.className} mb-10 w-full border-b-2 border-b-slate-400 py-1 text-4xl text-[#6d798b] md:text-6xl`}
    >
      {children}
    </h3>
  );
}
