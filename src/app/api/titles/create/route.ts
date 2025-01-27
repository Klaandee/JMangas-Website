import { NextResponse } from "next/server";
import { uploadImage } from "@/app/utils/imgur";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get("title");
  const description = formData.get("description");
  const genres = formData.get("genres");
  const cover = formData.get("cover") as File;
  const banner = formData.get("banner") as File;

  if (!title || !description || !genres || !cover || !banner) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log({
    title,
    description,
    genres,
    cover,
    banner,
  });

  const coverUrl = await uploadImage(cover as File);
  const bannerUrl = await uploadImage(banner as File);

  return NextResponse.json({
    title,
    description,
    genres,
    cover: {
      url: coverUrl.data.link,
      deletehash: coverUrl.data.deletehash,
    },
    banner: {
      url: bannerUrl.data.link,
      deletehash: bannerUrl.data.deletehash,
    },
  });
}
