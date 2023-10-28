import {
  sumOfSquares,
  power,
  factorialProduct,
  fibonacciSequence,
  sumOfPowers,
  remainingLength,
  findExponent,
  findMinKAndSum,
  calculateGCD,
  findFibonacciIndex,
} from '../loops';

describe('Group: loops', () => {
  test('task1', () => {
    expect(sumOfSquares(1, 3)).toBe(14);
    expect(sumOfSquares(2, 5)).toBe(54);
    expect(sumOfSquares(1, 5)).toBe(55);
    expect(sumOfSquares(0, 4)).toBe(30);
  });

  test('task2', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(3, 4)).toBe(81);
    expect(power(5, 2)).toBe(25);
    expect(power(10, 1)).toBe(10);
  });

  test('task3', () => {
    expect(factorialProduct(1)).toBe(1);
    expect(factorialProduct(2)).toBe(2);
    expect(factorialProduct(4)).toBe(24);
    expect(factorialProduct(5)).toBe(120);
  });

  test('task4', () => {
    expect(fibonacciSequence(1)).toBe(1);
    expect(fibonacciSequence(2)).toBe(1);
    expect(fibonacciSequence(10)).toBe(89);
    expect(fibonacciSequence(6)).toBe(13);
  });

  test('task5', () => {
    expect(sumOfPowers(1)).toBe(1);
    expect(sumOfPowers(2)).toBe(5);
    expect(sumOfPowers(3)).toBe(32);
    expect(sumOfPowers(4)).toBe(288);
  });

  test('task6', () => {
    expect(remainingLength(10, 3)).toBe(1);
    expect(remainingLength(15, 4)).toBe(3);
    expect(remainingLength(20, 7)).toBe(6);
    expect(remainingLength(30, 5)).toBe(0);
  });

  test('task7', () => {
    expect(findExponent(2)).toBe(1);
    expect(findExponent(8)).toBe(3);
    expect(findExponent(16)).toBe(4);
    expect(findExponent(64)).toBe(6);
  });

  test('task8', () => {
    expect(findMinKAndSum(3)).toBe(2);
    expect(findMinKAndSum(10)).toBe(4);
    expect(findMinKAndSum(20)).toBe(6);
    expect(findMinKAndSum(30)).toBe(7);
  });

  test('task9', () => {
    expect(calculateGCD(24, 18)).toBe(6);
    expect(calculateGCD(48, 60)).toBe(12);
    expect(calculateGCD(35, 21)).toBe(7);
  });

  test('task10', () => {
    expect(findFibonacciIndex(1)).toBe(1);
    expect(findFibonacciIndex(2)).toBe(3);
    expect(findFibonacciIndex(13)).toBe(7);
    expect(findFibonacciIndex(89)).toBe(11);
  });
});
