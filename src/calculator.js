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

module.exports = { addition, subtraction, multiplication, division };
