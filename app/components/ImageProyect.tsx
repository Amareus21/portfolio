import Image, { StaticImageData } from "next/image";
export default function ImageProyect({ src }: { src: StaticImageData }) {
  return (
    <div className="relative mb-5 overflow-hidden rounded-xl hover:cursor-pointer">
      <Image
        alt="Imagen de la pagina web la cocina de todos"
        src={src}
        className="transition-all duration-500 hover:scale-95"
        sizes="100vh"
      />
    </div>
  );
}
