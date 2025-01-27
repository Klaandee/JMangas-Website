import Badge from "@/components/utils/Badge";

export default function Hero() {
  return (
    <section className="mt-2 flex justify-center">
      <div className="">
        <div className="flex justify-center">
          <Badge>¡Nueva Pagina de Mangas! ✨</Badge>
        </div>
        <h1 className="text-5xl font-bold text-center font-ubuntu">
          ¡Mangas sin <span className="gradientText">ANUNCIOS</span>!
        </h1>
      </div>
    </section>
  );
}
