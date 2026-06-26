import { put } from "@vercel/blob";

export const uploadFile = async (file: File) => {
  const blobToken = process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN;

  const uniqueName = `${Date.now()}-${file.name}`;
  const blob = await put(file.name, file, {
    access: "public",
    token: blobToken,
  });
  return blob.url;
};
