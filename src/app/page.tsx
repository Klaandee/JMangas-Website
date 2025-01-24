"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/app/functions/discorduser";
import Image from "next/image";
import Hero from "@/components/page/Hero";

export default function Home() {
  const [user, setUser] = useState<string>("Unkown");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.location.search = "";
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser(localStorage.getItem("token")!).then((data) => {
        setUser(data.username);
      });
    }
  }, []);
  return (
    <main className="">
      <Hero />
      <h1 className="text-center">Admin User: {user}</h1>
      {/* Nota para el papu: Hacer que este texto aparezca unicamente cuando el admin esta logeado <3
       asi evitamos que los usuarios lo vean. NYAA~*/}
    </main>
  );
}
