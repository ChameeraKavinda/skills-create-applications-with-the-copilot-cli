function toNumber(n) {
  const num = Number(n);
  if (Number.isNaN(num)) throw new TypeError('Invalid number');
  return num;
}

function addition(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtraction(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiplication(a, b) {
  return toNumber(a) * toNumber(b);
}

function division(a, b) {
  const divisor = toNumber(b);
  if (divisor === 0) throw new Error('Division by zero');
  return toNumber(a) / divisor;
}

function modulo(a, b) {
  const divisor = toNumber(b);
  if (divisor === 0) throw new Error('Modulo by zero');
  return toNumber(a) % divisor;
}

function power(base, exponent) {
  return Math.pow(toNumber(base), toNumber(exponent));
}

function squareRoot(n) {
  const num = toNumber(n);
  if (num < 0) throw new RangeError('Cannot take square root of negative number');
  return Math.sqrt(num);
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot };
