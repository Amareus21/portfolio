import Footer from "./components/Footer";
import Proyecto from "./components/SeccionProyectos.";
import SeccionInicio from "./components/SeccionInicio";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start md:justify-center">
      <div className="flex w-full flex-col justify-start xl:container">
        <SeccionInicio />
        <Proyecto />
      </div>
      <Footer />
    </main>
  );
}
