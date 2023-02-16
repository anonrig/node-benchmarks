import { bench, run } from "https://esm.sh/mitata"
import { StringDecoder } from "https://deno.land/std@0.177.0/node/string_decoder.ts"
import { uint8array_fixtures } from '../fixtures.mjs' 

const { bigUint8, smallUint8 } = uint8array_fixtures()
const stringDecoder = new StringDecoder()

bench('noop', () => {});
bench('noop', () => {});

bench('smallUint8', () => {
  stringDecoder.write(smallUint8)
  stringDecoder.end()
})
bench('bigUint8', () => {
  stringDecoder.write(bigUint8)
  stringDecoder.end()
})

await run()
