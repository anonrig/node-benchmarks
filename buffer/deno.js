import { bench, run } from "https://esm.sh/mitata"
import { Buffer } from "https://deno.land/std@0.177.0/node/buffer.ts"
import { uint8array_fixtures } from '../fixtures.mjs'

const { smallUint8, bigUint8 } = uint8array_fixtures();

bench('noop', () => {});
bench('noop', () => {});

bench('ByteLength - small', () => Buffer.byteLength(smallUint8))
bench('ByteLength - big', () => Buffer.byteLength(bigUint8))

await run()
