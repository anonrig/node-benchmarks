import { run, bench } from 'mitata'
import { Buffer } from 'node:buffer'
import { uint8array_fixtures } from '../fixtures.mjs'

const { smallUint8, bigUint8 } = uint8array_fixtures();

bench('noop', () => {});
bench('noop', () => {});

bench('ByteLength - small', () => Buffer.byteLength(smallUint8))
bench('ByteLength - big', () => Buffer.byteLength(bigUint8))

await run()
