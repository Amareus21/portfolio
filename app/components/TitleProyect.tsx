import { ReactNode } from "react";

export default function TitleProyect({ children }: { children: ReactNode }) {
  return (
    <h3 className="md:text-4xl text-xl font-semibold mb-2 text-gray-600">
      {children}
    </h3>
  );
}
