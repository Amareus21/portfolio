import { anton } from "@/app/fonts/fonts";
export default function Titulo() {
  return (
    <div>
      <h2
        className={`${anton.className} px-2 mb-5 overflow-hidden uppercase 2xl:text-[12] lg:text-9xl md:text-7xl sm:text-5xl text-4xl text-gray-600 drop-shadow-[1px_14px_3px_rgb(0,0,0,1)]  shadow-black `}
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
        className={`${anton.className} lg:px-0 overflow-hidden md:px-1 px-2 uppercase 2xl:text-[22rem] lg:text-[17rem] md:text-[11rem] sm:text-9xl text-7xl text-[#6d798b]  drop-shadow-[1px_14px_5px_rgb(0,0,0,1)]`}
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
