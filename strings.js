export const countUppercaseLetters = (str) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let count = 0;
for (let i = 0; i < str.length; i += 1) {
  if (letters.includes(str[i])) {
    count += 1;
  }
}
return count;
};

export const combineStrings = (N1, N2, S1, S2) => `${S1.slice(0, N1)}${S2.slice(-N2)}`;

export const containsSubstring = (S0, S) => S0.includes(S);

export const replaceSubstring = (S, S1, S2) => S.replace(S1, S2);

// \b указывает на границы слова.
// (\w) соответствует и захватывает первую букву слова (в скобках).
// \w* соответствует нулю или более буквам после первой буквы (слово может быть произвольной длины).
// \1 соответствует той же букве, что и первая буква слова (второе вхождение той же буквы).
// \b снова указывает на границы слова.
// \b(\w)\w*\1\b
export const countWordsWithSameLetters = (sentence) => {
  const pattern = /\b(\w)(\w*\1)?\b/gi;
  const matches = sentence.match(pattern);
  if (matches !== null) {
      return matches.length;
  } else {
    return 0;
  }
};

export const countWordsWithA = (str) => {
  let count = 0;
  const word = str.split(' ');
  for (let i = 0; i < word.length; i += 1) {
    if (word[i].includes('a')) {
      count += 1;
     }
    }
    return count;
  };
  
  export const normalizeSpaces = (sentence) => sentence = sentence.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  // ^ - обозначает начало строки
  // \s ищет пробелы, табуляции
  // \s+ + означает 1 или более раз
  // | или
  // \s+$ $ конец строки
