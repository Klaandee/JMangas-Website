import type { Metadata } from "next";

export const metadata = {
  title: 'JMangas | Publicar un manga'
}

export default function mangaCreationPage() {
  return (
    <main className="p-2">
      <h1 className="font-ubuntu font-bold text-4xl text-center">
        Publicar un <span className="gradientText">Manga</span>
      </h1>
      <form
        action="/api/titles/create"
        method="POST"
        encType="multipart/form-data"
      >
        <div
          className="formCont grid mt-2 p-3 bg-gradient-to-r from-[var(--background)] to-violet-600 rounded-2xl bg-opacity-3"
          style={{ border: "2px solid #353535" }}
        >
          <label>Título</label>
          <input
            type="text"
            id=""
            name="title"
            className="mangaCreationTxtInput"
          />

          <label>Descripción</label>
          <textarea
            id=""
            name="description"
            className="mangaCreationTxtInput resize-none h-[6rem]"
          />

          <label>Géneros</label>
          <input
            type="text"
            id=""
            className="mangaCreationTxtInput"
            name="genres"
          />

          <label>Portada</label>
          <input type="file" accept="image/**" name="cover" />

          <label>Banner</label>
          <input type="file" accept="image/**" name="banner" />

          <input
            type="submit"
            value="Crear Manga"
            className="bg-[#202020] p-2 rounded-xl mt-2 cursor-pointer hover:bg-[#353535]"
          />
        </div>
      </form>
    </main>
  );
}
