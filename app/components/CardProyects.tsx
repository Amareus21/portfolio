import { ReactNode } from "react";

export default function CardProyects({children}:{children:ReactNode}) {
  return <div className="lg:grid lg:grid-cols-2 flex flex-col my-5">{children}</div>;
}
