import { bench, run } from "https://esm.sh/mitata"
import fs from 'node:fs'

const dataset = new URL('dataset.txt', import.meta.url)
const file = fs.readFileSync(dataset, 'utf-8')
const lines = file.split('\n')

bench('noop', () => { });
bench('noop', () => { });

bench('new URL', () => {
  for (let line of lines) {
    try {
      new URL(line);
    } catch {
      // do nothing
    }
  }
})

await run()
