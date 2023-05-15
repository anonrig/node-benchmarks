import { bench, run } from "https://esm.sh/mitata"

const readableStreamForReading = new ReadableStream({
  pull: function(controller) {
    controller.enqueue(1);
  },
});

const reader = readableStreamForReading.getReader();

const writableStreamForWriting = new WritableStream({
  write: () => {}
});

const writer = writableStreamForWriting.getWriter();

const transformStream = new TransformStream({
  transform: (chunk, controller) => controller.enqueue(chunk)
});

const transformStreamReader = transformStream.readable.getReader();
const transformStreamWriter = transformStream.writable.getWriter();

bench('noop', () => {});
bench('noop', () => {});

bench('new ReadableStream', () => {
  new ReadableStream();
});

bench("new WritableStream", () => {
  new WritableStream();
});

bench("new TransformStream", () => {
  new TransformStream();
});

bench('Read from ReadableStream', async () => {
  await reader.read();
});

bench("Write to WritableStream", async () => {
  await writer.write("Hello World!");
});

bench("Transform in TransformStream", async () => {
  await Promise.all([
    transformStreamWriter.write("Hello World!"),
    transformStreamReader.read(),
  ]);
});

await run();