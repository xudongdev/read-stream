import { createReadStream, readFileSync } from "fs";

import { readStream } from "../src";

it("test", async () => {
  const text = readFileSync("./README.md");
  const buffer = await readStream(createReadStream("./README.md"));

  expect(text.toString("utf-8")).toBe(buffer.toString("utf-8"));
});
