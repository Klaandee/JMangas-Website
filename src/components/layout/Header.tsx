'use client';

import { IoHomeSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { HiNewspaper } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import SearchBar from "@/components/layout/SearchBar";

export default function Header() {
  const pathname = usePathname(); 
  const isActive = (path: string) => pathname === path;

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
              <a href="/" className={isActive("/") ? "text-purple-500" : "text-gray-500"}>
                <IoHomeSharp color={isActive("/") ? "purple" : "#909090"} /> Inicio
              </a>
            </li>
            <li>
              <a href="/catalogo" className={isActive("/catalogo") ? "text-purple-500" : "text-gray-500"}>
                <FaBook color={isActive("/catalogo") ? "purple" : "#909090"} /> Catalogo
              </a>
            </li>
            <li>
              <a href="/noticias" className={isActive("/noticias") ? "text-purple-500" : "text-gray-500"}>
                <HiNewspaper color={isActive("/noticias") ? "purple" : "#909090"} /> Noticias
              </a>
            </li>
          </ul>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
