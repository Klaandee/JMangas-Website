"use client";
import { useState, useEffect } from "react";

export default function catalogPage() {
  const [mangas, setMangas] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/title/get-all")
      .then((res) => res.json())
      .then((data) => {
        setMangas(data);
      });
  }, []);
  return (
    <main className="">
      <h1>Catalogo</h1>

      {mangas.map((manga) => (
        <div key={manga._id}>
          <h2>{manga.title}</h2>
          <p>{manga.description}</p>
          <img src={manga.cover.url} alt={manga.title} />
        </div>
      ))}
    </main>
  );
}
