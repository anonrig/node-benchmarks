import { bench, run } from "mitata"

const url = 'https://example.com'

bench('new URL', () => new URL(url))

await run()