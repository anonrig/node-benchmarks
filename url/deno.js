import { bench, run, group } from "https://esm.sh/mitata"
import { parse } from 'node:url'

bench('noop', () => {});
bench('noop', () => {});

group('basic domain', () => {
  bench('new URL', () => new URL('https://example.com?application_id=123456789'))
  bench('parse', () => parse('https://example.com?application_id=123456789'))
})
group('ipv4', () => {
  bench('new URL', () => new URL('http://192.168.1.1'))
  bench('parse', () => parse('http://192.168.1.1'))
})
group('ipv6', () => {
  bench('new URL', () => new URL('http://[2606:4700:4700::1111]'))
  bench('parse', () => parse('http://[2606:4700:4700::1111]'))
})
group('complex', () => {
  bench('new URL', () => new URL('postgresql://other:9818274x1!!@localhost:5432/otherdb?connect_timeout=10&application_name=myapp'))
  bench('parse', () => parse('postgresql://other:9818274x1!!@localhost:5432/otherdb?connect_timeout=10&application_name=myapp'))
})

await run()
