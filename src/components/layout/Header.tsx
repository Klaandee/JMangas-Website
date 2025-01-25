import { IoHomeSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { HiNewspaper } from "react-icons/hi2";
import SearchBar from "@/components/layout/SearchBar";

export default function Header() {
  return (
    <header className="relative p-3 bg-zinc-800 font-rubik gradient-border-after-animated">
      <div className="light-floating">
        <span className="light"></span>
        <span className="light"></span>
        <span className="light"></span>
      </div>
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="">
          <h2 className="font-extrabold text-4xl">
            J<span className="gradientText">Mangas</span>
          </h2>
        </div>
        <div className="">
          <ul className="flex items-center gap-2 headerNav">
            <li>
              <a href="/">
                <IoHomeSharp color="var(--primary-color)" /> Inicio
              </a>
            </li>
            <li>
              <a href="#">
                <FaBook color="#909090" /> Catalogo
              </a>
            </li>
            <li>
              <a href="#">
                <HiNewspaper color="#909090" /> Noticias
              </a>
            </li>
          </ul>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
