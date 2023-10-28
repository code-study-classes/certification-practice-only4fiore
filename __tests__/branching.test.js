import {
  incrementIfPositive,
  getIndexOfSmallerNumber,
  findMiddleNumber,
  findUniqueNumber,
  calculateF,
  describeNumber,
  convertToMeters,
  describeAge,
  describeNumber2,
} from '../branching';

describe('Group: branching', () => {
  test('task1', () => {
    expect(incrementIfPositive(5)).toBe(6);

    expect(incrementIfPositive(0)).toBe(0);

    expect(incrementIfPositive(-3)).toBe(-3);

    expect(incrementIfPositive(2.5)).toBe(3.5);

    expect(incrementIfPositive(-1.8)).toBe(-1.8);
  });

  test('task2', () => {
    expect(getIndexOfSmallerNumber(3, 7)).toBe(1);

    expect(getIndexOfSmallerNumber(-5, 2)).toBe(1);

    expect(getIndexOfSmallerNumber(4, 4)).toBe(1);

    expect(getIndexOfSmallerNumber(0, -1)).toBe(1);

    expect(getIndexOfSmallerNumber(8.5, 8.8)).toBe(1);
  });

  test('task3', () => {
    expect(findMiddleNumber(2, 8, 4)).toBe(4);

    expect(findMiddleNumber(-3, 0, 5)).toBe(0);

    expect(findMiddleNumber(1, 1, 1)).toBe(1);

    expect(findMiddleNumber(-2, -5, -1)).toBe(-2);

    expect(findMiddleNumber(7.5, 6.2, 8.8)).toBe(7.5);
  });

  test('task4', () => {
    expect(findUniqueNumber(5, 5, 5, 2)).toBe(4);

    expect(findUniqueNumber(-3, -1, -1, -1)).toBe(1);

    expect(findUniqueNumber(7, 9, 7, 7)).toBe(2);

    expect(findUniqueNumber(2, 2, 2, 3)).toBe(4);
  });

  test('task5', () => {
    expect(calculateF(-3)).toBe(0);

    expect(calculateF(0.5)).toBe(1);

    expect(calculateF(1.5)).toBe(-1);

    expect(calculateF(2.7)).toBe(1);
  });

  test('task6', () => {
    expect(describeNumber(24)).toBe('четное двузначное число');

    expect(describeNumber(37)).toBe('нечетное двузначное число');

    expect(describeNumber(108)).toBe('четное трехзначное число');

    expect(describeNumber(215)).toBe('нечетное трехзначное число');
  });

  test('task7', () => {
    expect(getDayName(1)).toBe('Monday');

    expect(getDayName(2)).toBe('Tuesday');

    expect(getDayName(3)).toBe('Wednesday');

    expect(getDayName(4)).toBe('Thursday');

    expect(getDayName(5)).toBe('Friday');

    expect(getDayName(6)).toBe('Saturday');

    expect(getDayName(7)).toBe('Sunday');

    expect(getDayName(3.5)).toBe('Invalid day number.');

    expect(getDayName(0)).toBe('Invalid day number.');

    expect(getDayName(8)).toBe('Invalid day number.');
  });

  test('task8', () => {
    expect(convertToMeters(1, 5)).toBe(0.5);

    expect(convertToMeters(2, 2.5)).toBe(2500);

    expect(convertToMeters(3, 8)).toBe(8);

    expect(convertToMeters(4, 1200)).toBe(1.2);

    expect(convertToMeters(5, 30)).toBe(0.3);
  });

  test('task9', () => {
    expect(describeAge(20)).toBe('двадцать лет');
    expect(describeAge(32)).toBe('тридцать два года');
    expect(describeAge(41)).toBe('сорок один год');
    expect(describeAge(56)).toBe('пятьдесят шесть лет');
    expect(describeAge(69)).toBe('шестьдесят девять лет');
  });

  test('task10', () => {
    expect(describeNumber2(100)).toBe('сто');
    expect(describeNumber2(325)).toBe('триста двадцать пять');
    expect(describeNumber2(511)).toBe('пятьсот одиннадцать');
    expect(describeNumber2(999)).toBe('девятьсот девяносто девять');
  });
});
