export default function mangaCreationPage() {
  return (
    <main className="p-2">
      <h1 className="font-ubuntu font-bold text-4xl text-center">Publicar un <span className="gradientText">Manga</span></h1>
      <div className="formCont grid mt-2 p-3 bg-gradient-to-r from-[var(--background)] to-violet-600 rounded-2xl bg-opacity-3" style={{ border: "2px solid #353535"}}>
        <label>Título</label>
        <input type="text" id="" className="mangaCreationTxtInput" />

        <label>Descripción</label>
        <textarea id="" className="mangaCreationTxtInput resize-none h-[6rem]" />

        <label>Géneros</label>
        <input type="text" id="" className="mangaCreationTxtInput" />

        <label>Portada</label>
        <input type="file" accept="image/**" />

        <label>Banner</label>
        <input type="file" accept="image/**" />

        <input type="submit" value="Crear Manga" className="bg-[#202020] p-2 rounded-xl mt-2 cursor-pointer hover:bg-[#353535]" />
      </div>
    </main>
  );
}