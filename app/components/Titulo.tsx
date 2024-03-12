import { anton } from "@/app/fonts/fonts";
export default function Titulo() {
  return (
    <div>
      <h2
        className={`${anton.className} mb-5 overflow-hidden px-2 text-4xl uppercase text-gray-600 shadow-black drop-shadow-[1px_14px_3px_rgb(0,0,0,1)] sm:text-5xl md:text-7xl lg:text-9xl  2xl:text-[12] `}
      >
        <span className="escalar transition-all duration-100">F</span>
        <span className="escalar transition-all duration-100">u</span>
        <span className="escalar transition-all duration-100">l</span>
        <span className="escalar transition-all duration-100">l</span>
        <span className="escalar transition-all duration-100">-</span>
        <span className="escalar transition-all duration-100">s</span>
        <span className="escalar transition-all duration-100">t</span>
        <span className="escalar transition-all duration-100">a</span>
        <span className="escalar transition-all duration-100">c</span>
        <span className="escalar transition-all duration-100">k</span>
      </h2>
      <h1
        className={`${anton.className} overflow-hidden px-2 text-7xl uppercase text-[#6d798b] drop-shadow-[1px_14px_5px_rgb(0,0,0,1)] sm:text-9xl md:px-1 md:text-[11rem] lg:px-0 lg:text-[17rem]  2xl:text-[22rem]`}
      >
        <span className="escalar transition-all duration-100">D</span>
        <span className="escalar transition-all duration-100">e</span>
        <span className="escalar transition-all duration-100">v</span>
        <span className="escalar transition-all duration-100">e</span>
        <span className="escalar transition-all duration-100">l</span>
        <span className="escalar transition-all duration-100">o</span>
        <span className="escalar transition-all duration-100">p</span>
        <span className="escalar transition-all duration-100">e</span>
        <span className="escalar transition-all duration-100">r</span>
      </h1>
    </div>
  );
}
