import { bench, run } from "mitata"

const encoder = new TextEncoder()
const input = 'hello-world'.repeat(1000)
const subarray = new Uint8Array(1000)

bench('TextEncoder.encode', () => encoder.encode(input))
bench('TextEncoder.encodeInto', () => encoder.encodeInto(input, subarray))

await run()