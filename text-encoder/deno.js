import { bench, run } from "https://esm.sh/mitata"
import { Buffer } from "https://deno.land/std@0.177.0/node/buffer.ts"

let u = new Uint8Array(2048);
let b = Buffer.alloc(2048);
let uf8Write = Buffer.prototype.utf8Write;
let te = new TextEncoder();

bench('buffer.write', () => b.write('hello world', 10))
bench('buffer.utf8Write', () => b.utf8Write('hello world', 10, 0xffffff))
bench('utf8Write.call', () => uf8Write.call(u, 'hello world', 10, 0xffffff))
bench('TextEncoder.encodeInto with subarray(10)', () => te.encodeInto('hello world', u.subarray(10)))
bench('TextEncoder.encodeInto', () => te.encodeInto('hello world', u))

await run();
