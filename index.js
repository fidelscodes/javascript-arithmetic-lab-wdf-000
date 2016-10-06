function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n) {
  return parseInt(n, 10); // takes two arguments. First is thing to parse, second the base
}

function preserveDecimal(n) {
  return parseFloat(n); // takes a single argument
}
