const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

describe('Calculator - basic operations', () => {
  test('addition: basic and floats', () => {
    expect(addition(2, 3)).toBe(5);
    expect(addition(-1, 1)).toBe(0);
    expect(addition(2.5, 0.5)).toBeCloseTo(3);
  });

  test('subtraction: positives and negatives', () => {
    expect(subtraction(10, 4)).toBe(6);
    expect(subtraction(0, 5)).toBe(-5);
  });

  test('multiplication: integers and negatives', () => {
    expect(multiplication(45, 2)).toBe(90);
    expect(multiplication(-2, 3)).toBe(-6);
  });

  test('division: integer and float results', () => {
    expect(division(20, 5)).toBe(4);
    expect(division(5, 2)).toBeCloseTo(2.5);
  });

  test('division by zero should throw', () => {
    expect(() => division(5, 0)).toThrow(/Division by zero/);
  });

  test('numeric strings are accepted', () => {
    expect(addition('2', '3')).toBe(5);
    expect(division('10', '2')).toBe(5);
  });

  test('invalid inputs throw TypeError', () => {
    expect(() => addition('a', 1)).toThrow(TypeError);
    expect(() => division('foo', 'bar')).toThrow(TypeError);
  });

  // Extended operations
  test('modulo: remainder operation', () => {
    expect(modulo(5, 2)).toBe(1);
    expect(modulo('10', '3')).toBe(1);
  });

  test('modulo by zero should throw', () => {
    expect(() => modulo(5, 0)).toThrow(/Modulo by zero/);
  });

  test('power: exponentiation', () => {
    expect(power(2, 3)).toBe(8);
    expect(power('2', '8')).toBe(256);
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('squareRoot: positive and zero', () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot('0')).toBe(0);
  });

  test('squareRoot of negative should throw RangeError', () => {
    expect(() => squareRoot(-9)).toThrow(RangeError);
    expect(() => squareRoot('-4')).toThrow(RangeError);
  });
});
