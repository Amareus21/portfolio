import Image, { StaticImageData } from "next/image";
export default function ImageProyect({ src }: { src: StaticImageData }) {
  return (
    <div className="relative mb-5 overflow-hidden hover:cursor-pointer rounded-xl">
      <Image
        alt="Imagen de la pagina web la cocina de todos"
        src={src}
        className="hover:scale-95 transition-all duration-500"
        sizes="100vh"
      />
    </div>
  );
}
