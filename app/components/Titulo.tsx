import {anton} from '@/app/fonts/fonts'
export default function Titulo() {
  return (
    <div>
      <h1
        className={`${anton.className} px-2 mb-5 uppercase lg:text-9xl md:text-7xl text-5xl text-gray-600 drop-shadow-[1px_14px_3px_rgb(0,0,0,1)]  shadow-black `}
      >
        Full-Stack
      </h1>
      <h2
        className={`${anton.className} lg:px-0 md:px-1 px-2 uppercase lg:text-[20rem] md:text-[12rem] text-7xl text-[#6d798b]  drop-shadow-[1px_14px_5px_rgb(0,0,0,1)]`}
      >
        Developer
      </h2>
    </div>
  );
}
