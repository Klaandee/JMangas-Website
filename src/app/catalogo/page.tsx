"use client";
import MangaCard from "@/components/utils/MangaCard";
import { useState, useEffect } from "react";

export default function catalogPage() {
  const [mangas, setMangas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/title/get-all")
      .then((res) => res.json())
      .then((data) => {
        setMangas(data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <main className="">
      <h1 className="text-4xl font-black my-6">Catalogo</h1>

      {isLoading ? (
        <div className="absolute top-1/2 left-1/2">
          <span className="loader" />
        </div>
      ) : (
        mangas.map((x) => (
          <MangaCard title={x.title} cover={x.cover.url} key={x.title} />
        ))
      )}
    </main>
  );
}
