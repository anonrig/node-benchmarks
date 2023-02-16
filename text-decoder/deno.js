import { bench, run } from "https://esm.sh/mitata"
import { Buffer } from "https://deno.land/std@0.177.0/node/buffer.ts"
import { uint8array_fixtures } from '../fixtures.mjs' 

const { bigUint8, smallUint8 } = uint8array_fixtures()
const decoder = new TextDecoder()

const smallUint8Buf = Buffer.from(smallUint8)
const bigUint8Buf = Buffer.from(bigUint8)

bench('noop', () => {});
bench('noop', () => {});

bench('smallUint8 - TextDecoder.decode()', () => decoder.decode(smallUint8))
bench('bigUint8 - TextDecoder.decode()', () => decoder.decode(bigUint8))
bench('smallUint8 - buffer.toString()', () => smallUint8Buf.toString())
bench('bigUint8 - buffer.toString()', () => bigUint8Buf.toString())

await run()
