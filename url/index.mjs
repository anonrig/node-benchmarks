import { bench, run } from "mitata"

bench('noop', () => {});
bench('noop', () => {});

bench('basic domain', () => new URL('https://example.com?application_id=123456789'))
bench('ipv4', () => new URL('http://192.168.1.1'))
bench('ipv6', () => new URL('http://[2606:4700:4700::1111]'))
bench('complex', () => new URL('postgresql://other:9818274x1!!@localhost:5432/otherdb?connect_timeout=10&application_name=myapp'))

await run()
