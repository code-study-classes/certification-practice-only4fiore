import {
  calculateDistance,
  calculateSegmentProduct,
  calculateKilobytes,
  calculateSegments,
  calculateDigitSum,
  swapHundredsAndTens,
  getHundredsDigit,
  getFullHours,
  getDayOfWeek,
  countSquares,
} from '../numbers';

describe('Group: numbers', () => {
  test('task1', () => {
    expect(calculateDistance(0, 5)).toBe(5);

    expect(calculateDistance(-3, 2)).toBe(5);

    expect(calculateDistance(10, 5)).toBe(5);
    expect(calculateDistance(-5, -10)).toBe(5);

    expect(calculateDistance(0, 0)).toBe(0);
    expect(calculateDistance(-3, -3)).toBe(0);
  });

  test('task2', () => {
    expect(calculateSegmentProduct(0, 5, 2)).toBe(6);

    expect(calculateSegmentProduct(-3, 2, 0)).toBe(6);

    expect(calculateSegmentProduct(-5, 3, 0)).toBe(15);

    expect(calculateSegmentProduct(48, 1031, 547)).toBe(241516);

    expect(calculateSegmentProduct(7, 64, 23)).toBe(656);
  });

  test('task3', () => {
    expect(calculateKilobytes(1024)).toBe(1);

    expect(calculateKilobytes(500)).toBe(0);

    expect(calculateKilobytes(2048)).toBe(2);

    expect(calculateKilobytes(1536)).toBe(1);
  });

  test('task4', () => {
    expect(calculateSegments(10, 10)).toBe(1);

    expect(calculateSegments(20, 5)).toBe(4);

    expect(calculateSegments(25, 7)).toBe(3);
  });

  test('task5', () => {
    expect(calculateDigitSum(34)).toBe(7);

    expect(calculateDigitSum(10)).toBe(1);

    expect(calculateDigitSum(99)).toBe(18);

    expect(calculateDigitSum(44)).toBe(8);
  });

  test('task6', () => {
    expect(swapHundredsAndTens(456)).toBe(546);

    expect(swapHundredsAndTens(100)).toBe(10);

    expect(swapHundredsAndTens(987)).toBe(897);

    expect(swapHundredsAndTens(355)).toBe(535);
  });

  test('task7', () => {
    expect(getHundredsDigit(3456)).toBe(4);

    expect(getHundredsDigit(1000)).toBe(0);

    expect(getHundredsDigit(98765)).toBe(7);

    expect(getHundredsDigit(77777)).toBe(7);
  });

  test('task8', () => {
    expect(getFullHours(5000)).toBe(1);

    expect(getFullHours(0)).toBe(0);

    expect(getFullHours(100000)).toBe(27);

    expect(getFullHours(3600)).toBe(1);

    expect(() => getFullHours(123.5)).toThrow();

    expect(() => getFullHours(-1000)).toThrow();
  });

  test('task9', () => {
    expect(getDayOfWeek(100)).toBe(2);

    expect(getDayOfWeek(1)).toBe(1);

    expect(getDayOfWeek(365)).toBe(1);
  });

  test('task10', () => {
    expect(countSquares(10, 15, 2)).toBe(35);

    expect(countSquares(8, 8, 8)).toBe(1);

    expect(countSquares(12, 24, 3)).toBe(32);

    expect(countSquares(1, 1, 1)).toBe(1);
  });
});
