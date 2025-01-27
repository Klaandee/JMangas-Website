import { NextResponse } from "next/server";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const content = await req.formData();
    const uploadedFiles = content.getAll("files") as File[];

    for (const file of uploadedFiles) {
      fs.writeFileSync(file.name, Buffer.from(await file.arrayBuffer()));
    }

    if (!uploadedFiles) {
      return NextResponse.json(
        { error: "No se subió ningún archivo" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Archivo subido exitosamente",
    });
  } catch (error) {
    console.error("Error al subir archivo:", error);
    return NextResponse.json(
      { error: "Error al subir archivo" },
      { status: 500 }
    );
  }
}
