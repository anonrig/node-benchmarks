import { bench, run } from "mitata"
import { uint8array_fixtures } from '../fixtures.mjs'

const { bigUint8, smallUint8 } = uint8array_fixtures()
const decoder = new TextDecoder()

const smallUint8Buf = Buffer.from(smallUint8)
const bigUint8Buf = Buffer.from(bigUint8)

bench('smallUint8 - TextDecoder.decode()', () => decoder.decode(smallUint8))
bench('bigUint8 - TextDecoder.decode()', () => decoder.decode(bigUint8))
bench('smallUint8 - buffer.toString()', () => smallUint8Buf.toString())
bench('bigUint8 - buffer.toString()', () => bigUint8Buf.toString())

await run()
