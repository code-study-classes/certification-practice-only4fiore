const countUppercaseLetters = (str) => {
  const matches = str.match(/[A-Z]/g);
  return matches ? matches.length : 0;
};

const combineStrings = (N1, N2, S1, S2) => {
  if (N1 === 0 && N2 === 0) {
    return '';
  }
  const part1 = S1.slice(0, N1);
  const part2 = S2.slice(-N2);
  const result = part1 + part2;
  return result;
};

const containsSubstring = (S, S0) => {
    return S.includes(S0);
};
 
const replaceSubstring = (S, S1, S2) => {
    const index = S.indexOf(S1);
    if (index !== -1) {
        S = S.slice(0, index) + S2 + S.slice(index + S1.length);
    }
    return S;
};

const countWordsWithSameLetters = () => {
    
};



export {
  countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring,
  countWordsWithSameLetters,
};
