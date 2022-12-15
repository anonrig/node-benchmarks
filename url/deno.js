import { bench, run } from "https://esm.sh/mitata"

const url = 'https://example.com'

bench('new URL', () => new URL(url))

await run()