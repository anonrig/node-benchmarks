import { bench, run } from "mitata"
import { Buffer } from 'node:buffer'

const encoder = new TextEncoder()
const input = 'hello-world'.repeat(1000)
const subarray = new Uint8Array(1000)

bench('Buffer.from', () => Buffer.from(input, 'utf8'))
bench('TextEncoder.encode', () => encoder.encode(input))
bench('TextEncoder.encodeInto', () => encoder.encodeInto(input, subarray))

await run()