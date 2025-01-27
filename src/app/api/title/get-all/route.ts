import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Manga from "@/lib/models/manga";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: Request) {
  try {
    await dbConnect();

    const mangas = await Manga.find({}).select(
      "-banner.deletehash -cover.deletehash -__v"
    );

    return NextResponse.json(mangas);
  } catch (error) {
    console.error("Error en el endpoint GET:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
