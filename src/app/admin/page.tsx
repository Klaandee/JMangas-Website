import Link from "next/link";
import type { Metadata } from "next";

export const metadata = {
  title: "JMangas | Admin Panel",
};

export default function adminPage() {
  return (
    <main className="">
      <h1>Admin Page</h1>
      <Link href="/admin/manga-creation">Manga Creation</Link>
    </main>
  );
}
