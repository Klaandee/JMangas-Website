export default function MangaCard({cover, title = "Manga Title"}: {
  cover: string,
  title: string
}) {
  return (
    <div className="relative p-1 w-[12rem] h-auto">
      <div
        className="rounded-lg border-1 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] p-1"
        style={{
          animation: "gradient-border 3s ease infinite",
        }}
      >
        <img
          src={cover}
          alt="Mushoku Tensei"
          className="rounded-lg"
        />
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-xl">{title}</h2>
      </div>
      <style>
        {`
          @keyframes gradient-border {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
