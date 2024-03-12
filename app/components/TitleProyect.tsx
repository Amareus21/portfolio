import { ReactNode } from "react";

export default function TitleProyect({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2 text-xl font-semibold text-gray-600 md:text-4xl">
      {children}
    </h3>
  );
}
