"use client";
import MangaCard from "@/components/utils/MangaCard";
import { useEffect, useState } from "react";

export default function MangasPage() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [mangas, setMangas] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/title/get-all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMangas(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <main className="">
      <h1 className="text-4xl my-6 font-black">Listado de Mangas</h1>
      {isFetching ? (
        <div className="absolute top-1/2 left-1/2">
          <span className="loader" />
        </div>
      ) : (
        <>
          {mangas.map((x) => (
            <MangaCard title={x.title} cover={x.cover.url} key={x.title} />
          ))}
        </>
      )}
    </main>
  );
}
