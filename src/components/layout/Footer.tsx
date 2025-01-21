import { IoIosWarning, IoLogoGithub } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative bg-zinc-800 p-2 gradient-border-top-animated text-center">
      <div className="">
        <h2 className="footerTxt text-xl">
          Página hecha con ❤ por <a href="https://github.com/Klaandee">JM</a> y{" "}
          <a href="https://github.com/ewwhenry">Henry</a>.
        </h2>
        <p className="text-zinc-400">
          Ninguna obra presente en esta página es de nuestra propiedad.
        </p>
      </div>
      <div className="footerDownLinks flex gap-3 justify-center">
        <span>
          <IoIosWarning />
          <a href="#">Aviso Legal</a>
        </span>
        <span>
          <FaUser />
          <a href="#">Política de Uso</a>
        </span>
        <span>
          <IoLogoGithub />
          <a href="https://github.com/Klaandee/JMangas-Website">Open Source</a>
        </span>
      </div>
    </section>
  );
}
