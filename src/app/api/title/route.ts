import { NextResponse } from "next/server";
import { uploadImage } from "@/app/utils/imgur";
import dbConnect from "@/lib/mongodb";
import Manga from "@/lib/models/manga";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const genres = formData.get("genres") as string;
    const cover = formData.get("cover") as File;
    const banner = formData.get("banner") as File;

    if (!title || !description || !genres || !cover || !banner) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const coverUrl = await uploadImage(cover);
    const bannerUrl = await uploadImage(banner);

    const newManga = new Manga({
      _id: title.toLowerCase().replaceAll(" ", "-"),
      title,
      description,
      genres: genres.split(",").map((genre) => genre.trim()),
      cover: {
        url: coverUrl.data.link,
        deletehash: coverUrl.data.deletehash,
      },
      banner: {
        url: bannerUrl.data.link,
        deletehash: bannerUrl.data.deletehash,
      },
    });

    await newManga.save();

    return NextResponse.json(newManga);
  } catch (error) {
    console.error("Error en el endpoint POST:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
