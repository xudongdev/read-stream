import { Stream } from "stream";

export async function readStream(stream: Stream): Promise<Buffer> {
  return await new Promise((resolve, reject) => {
    const buffers: Buffer[] = [];

    stream.on("data", (chunk) => buffers.push(Buffer.from(chunk)));
    stream.on("end", () => resolve(Buffer.concat(buffers)));
    stream.on("error", (error) => reject(error));
  });
}
