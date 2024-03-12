import { ReactNode } from "react";

export default function CardProyects({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 flex flex-col lg:grid lg:grid-cols-2">{children}</div>
  );
}
