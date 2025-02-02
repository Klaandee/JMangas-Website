import type { Metadata } from "next";
import "./globals.css";
import "./loader.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "JMangas | Mangas gratis en español y sin anuncios",
  description: "Undefined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <main className="">
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <div className="w-full max-w-6xl mx-auto">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
