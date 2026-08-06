export function greet(name) {
  return `Hello, ${name}!`;
}

if (import.meta.env?.DEV) {
  // eslint-disable-next-line no-console
  console.log(greet("world"));
}
