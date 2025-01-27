"use client";
import { useEffect, useState } from "react";

export default function MangasPage() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [mangas, setMangas] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/title/get-all")
      .then((res) => res.json())
      .then((data) => {
        setMangas(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <main className="">
      {isFetching ? <h1>Cargando...</h1> : <h1>Mangas</h1>}
    </main>
  );
}
