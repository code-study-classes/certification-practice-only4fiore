import {
  isPositive,
  isOdd,
  checkInequality,
  checkInequality2,
  checkBetweenNumbers,
  checkOddThreeDigitNumber,
  checkUniqueDigits,
  isSecondQuadrant,
  isIsoscelesTriangle,
  areSameColorFields,
} from '../boolean';

describe('Group: boolean', () => {
  test('task1', () => {
    expect(isPositive(5)).toBe(true);

    expect(isPositive(-3)).toBe(false);

    expect(isPositive(0)).toBe(false);

    expect(isPositive(2.5)).toBe(true);

    expect(isPositive(-1.7)).toBe(false);
  });

  test('task2', () => {
    expect(isOdd(5)).toBe(true);

    expect(isOdd(4)).toBe(false);

    expect(isOdd(0)).toBe(false);

    expect(isOdd(-3)).toBe(true);

    expect(isOdd(-2)).toBe(false);
  });

  test('task3', () => {
    expect(checkInequality(5, 3)).toBe(true);

    expect(checkInequality(2, 3)).toBe(false);

    expect(checkInequality(4, 5)).toBe(false);

    expect(checkInequality(1, 4)).toBe(false);

    expect(checkInequality(6, 3)).toBe(true);

    expect(checkInequality(2, -1)).toBe(false);
  });

  test('task4', () => {
    expect(checkInequality2(5, -3)).toBe(true);

    expect(checkInequality2(-1, -3)).toBe(true);

    expect(checkInequality2(4, -2)).toBe(true);

    expect(checkInequality2(-4, 0)).toBe(false);

    expect(checkInequality2(1, -3)).toBe(true);

    expect(checkInequality2(-3, -4)).toBe(true);

    expect(checkInequality2(6, -2)).toBe(true);
  });

  test('task5', () => {
    expect(checkBetweenNumbers(2, 3, 4)).toBe(true);

    expect(checkBetweenNumbers(3, 3, 4)).toBe(false);

    expect(checkBetweenNumbers(2, 4, 4)).toBe(false);

    expect(checkBetweenNumbers(4, 2, 3)).toBe(false);

    expect(checkBetweenNumbers(2, 2, 1)).toBe(false);

    expect(checkBetweenNumbers(5, 6, 6)).toBe(false);
  });

  test('task6', () => {
    expect(checkOddThreeDigitNumber(357)).toBe(true);

    expect(checkOddThreeDigitNumber(246)).toBe(false);

    expect(checkOddThreeDigitNumber(79)).toBe(false);

    expect(checkOddThreeDigitNumber(1234)).toBe(false);

    expect(checkOddThreeDigitNumber(4680)).toBe(false);

    expect(checkOddThreeDigitNumber(900)).toBe(false);
  });

  test('task7', () => {
    expect(checkUniqueDigits(123)).toBe(true);

    expect(checkUniqueDigits(1223)).toBe(false);

    expect(checkUniqueDigits(5)).toBe(false);

    expect(checkUniqueDigits(7777)).toBe(false);

    expect(checkUniqueDigits(-123)).toBe(true);
  });

  test('task8', () => {
    expect(isSecondQuadrant(-2, 3)).toBe(true);

    expect(isSecondQuadrant(0, 5)).toBe(false);

    expect(isSecondQuadrant(-3, 0)).toBe(false);

    expect(isSecondQuadrant(4, 2)).toBe(false);

    expect(isSecondQuadrant(-2, -4)).toBe(false);

    expect(isSecondQuadrant(5, -1)).toBe(false);
  });

  test('task9', () => {
    expect(isIsoscelesTriangle(3, 3, 5)).toBe(true);

    expect(isIsoscelesTriangle(4, 5, 4)).toBe(true);

    expect(isIsoscelesTriangle(7, 7, 2)).toBe(true);

    expect(isIsoscelesTriangle(5, 8, 6)).toBe(false);

    expect(isIsoscelesTriangle(0, 0, 0)).toBe(false);
  });

  test('task10', () => {
    expect(areSameColorFields(1, 1, 3, 3)).toBe(true);

    expect(areSameColorFields(2, 4, 8, 8)).toBe(true);

    expect(areSameColorFields(1, 1, 3, 4)).toBe(false);

    expect(areSameColorFields(5, 7, 1, 2)).toBe(false);

    expect(areSameColorFields(1, 2, 2, 1)).toBe(true);

    expect(areSameColorFields(4, 7, 6, 5)).toBe(true);
  });
});
