import { IMGUR_CLIENT_ID } from "@/config";

const IMGUR_URL = "https://api.imgur.com/3";

interface ImgurResponse {
  status: number;
  success: boolean;
  data: {
    id: string;
    deletehash: string;
    account_id: number | null;
    account_url: string | null;
    ad_type: number | null;
    ad_url: string | null;
    title: string;
    description: string;
    name: string;
    type: string;
    width: number;
    height: number;
    size: number;
    views: number;
    section: string | null;
    vote: string | null;
    bandwidth: number;
    animated: boolean;
    favorite: boolean;
    in_gallery: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    is_ad: boolean;
    nsfw: boolean | null;
    link: string;
    tags: string[];
    datetime: number;
    mp4: string;
    hls: string;
  };
}

interface ImgurDeleteResponse {
  status: number;
  success: boolean;
  data: boolean;
}

/**
 * @description Sube una imagen a imgur
 * @param file Archivo subido
 * @returns ImgurResponse
 * @example
 * const res = await uploadImage(file);
 * console.log(res);
 */
export async function uploadImage(file: File): Promise<ImgurResponse> {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("image", file, file.name);
    formData.append("type", "image");
    formData.append("title", file.name);

    fetch(IMGUR_URL + "/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
      },
      body: formData,
    })
      .then((r) => r.text())
      .then((x) => resolve(JSON.parse(x)))
      .catch((e) => reject(e));
  });
}

export async function deleteImage(id: string): Promise<ImgurDeleteResponse> {
  return new Promise((resolve, reject) => {
    fetch(`${IMGUR_URL}/image/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
      },
    })
      .then((r) => r.text())
      .then((x) => resolve(JSON.parse(x)))
      .catch((e) => reject(e));
  });
}
