"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/app/functions/discorduser";
import { setCookie, getCookie } from "@/app/functions/cookies";

function handleDiscordAccessToken() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("access_token");
  if (token) {
    setCookie(
      "access_token",
      token,
      params.get("expires_in") ? parseInt(params.get("expires_in")!) : 0
    );
    setCookie(
      "refresh_token",
      params.get("refresh_token")!,
      params.get("expires_in") ? parseInt(params.get("expires_in")!) : 0
    );
    window.location.search = "";
  }
}

async function getLogin() {
  const token = getCookie("access_token");
  if (!token) return null;

  try {
    const userdata = await getUser(token);
    console.log(userdata);
    return userdata;
  } catch (error) {
    console.error("Error obteniendo el usuario:", error);
  }
}

export default function Home() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    handleDiscordAccessToken();
    getLogin().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <main className="">
      <h1>Content</h1>

      <h1>User: {user?.username}</h1>
    </main>
  );
}
