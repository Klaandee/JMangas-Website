"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/app/functions/discorduser";
import Image from "next/image";

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
      <h1>Content</h1>

      <h1>User: {user}</h1>
    </main>
  );
}
