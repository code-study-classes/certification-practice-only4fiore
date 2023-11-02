import {
  countUppercaseLetters,
  combineStrings,
  containsSubstring,
  replaceSubstring,
  countWordsWithSameLetters,
  countWordsWithA,
  normalizeSpaces,
  extractFileName,
  encryptSentence,
  checkBrackets,
} from '../strings';

describe('Group: strings', () => {
  test('task1', () => {
    expect(countUppercaseLetters('Hello World')).toBe(2);

    expect(countUppercaseLetters('')).toBe(0);

    expect(countUppercaseLetters('123!@#')).toBe(0);

    expect(countUppercaseLetters('ABCDEFGHIJKLM')).toBe(13);

    expect(countUppercaseLetters('!@#$%^&*()')).toBe(0);
  });

  test('task2', () => {
    expect(combineStrings(2, 1, 'abc', 'def')).toBe('abf');

    expect(combineStrings(0, 3, 'hello', 'world')).toBe('rld');

    expect(combineStrings(5, 2, 'abcdefgh', 'ijklmnop')).toBe('abcdeop');

    expect(combineStrings(3, 4, '$#@%', '!&*()')).toBe('$#@&*()');

    expect(combineStrings(0, 0, 'abc', 'def')).toBe('');
  });

  test('task3', () => {
    expect(containsSubstring('Hello World', 'Hello')).toBe(true);

    expect(containsSubstring('Lorem Ipsum', 'World')).toBe(false);

    expect(containsSubstring('', '')).toBe(true);

    expect(containsSubstring('ABCdef', 'abc')).toBe(false);

    expect(containsSubstring('$#@%', '#')).toBe(true);
  });

  test('task4', () => {
    expect(replaceSubstring('Hello World, Hello Universe', 'Hello', 'Hi')).toBe('Hi World, Hello Universe');

    expect(replaceSubstring('apple pie is delicious', 'apple', 'cherry')).toBe('cherry pie is delicious');

    expect(replaceSubstring('JavaScript is fun! JavaScript is powerful!', 'JavaScript', 'TypeScript')).toBe('TypeScript is fun! JavaScript is powerful!');

    expect(replaceSubstring('No changes here', 'missing', 'replace')).toBe('No changes here');
  });

  test('task5', () => {
    expect(countWordsWithSameLetters('apple banana avocado')).toBe(0);

    expect(countWordsWithSameLetters('dog cat elephant')).toBe(0);

    expect(countWordsWithSameLetters('')).toBe(0);

    expect(countWordsWithSameLetters('a b c d e')).toBe(5);

    expect(countWordsWithSameLetters('Hello world Willow')).toBe(1);
  });

  test('task6', () => {
    expect(countWordsWithA('apple banana avocado')).toBe(3);

    expect(countWordsWithA('dog cat elephant')).toBe(2);

    expect(countWordsWithA('')).toBe(0);

    expect(countWordsWithA('a b c d e')).toBe(1);

    expect(countWordsWithA('Hello world Wicked')).toBe(0);
  });

  test('task7', () => {
    expect(normalizeSpaces('   Hello     world!   ')).toBe('Hello world!');

    expect(normalizeSpaces('This is a normal sentence.')).toBe('This is a normal sentence.');

    expect(normalizeSpaces('')).toBe('');

    expect(normalizeSpaces('     ')).toBe('');

    expect(normalizeSpaces('Multiple    spaces    between   words.')).toBe('Multiple spaces between words.');
  });

  test('task8', () => {
    expect(extractFileName('/path/to/file.txt')).toBe('file');

    expect(extractFileName('')).toBe('');

    expect(extractFileName('/folder1/folder2/file.name.ext')).toBe('file');

    expect(extractFileName('../filename.txt')).toBe('filename');

    expect(extractFileName('/path.with.dots/to/file.xls')).toBe('file');
  });

  test('task9', () => {
    expect(encryptSentence('JavaScript')).toBe('aacitprSvJ');

    expect(encryptSentence('Hello, World!')).toBe('el,Wrd!lo olH');

    expect(encryptSentence('')).toBe('');

    expect(encryptSentence('A')).toBe('A');
  });

  test('task10', () => {
    expect(checkBrackets('(a[b{c}]d)')).toBe(0);

    expect(checkBrackets('(a[b{c]d)')).toBe(-1);

    expect(checkBrackets('(ab]{c}')).toBe(3);

    expect(checkBrackets('')).toBe(0);
  });
});
