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

  function countWordsWithSameLetters(sentence) {
    const words = sentence.split(' ');
    const count = words.filter((word) => word.length >= 1
        && word[0].toLowerCase() === word[word.length - 1].toLowerCase()).length;
    return count;
  }
  
  function countWordsWithA(sentence) {
    const words = sentence.split(' ');
    const count = words.filter((word) => word.toLowerCase().includes('a')).length;
    return count;
  }
  
  function normalizeSpaces(sentence) {
    return sentence.replace(/\s+/g, ' ').trim();
  }
  
  function extractFileName(fullFileName) {
    const parts = fullFileName.split('/');
    const fileNameWithExtension = parts[parts.length - 1];
    const fileNameParts = fileNameWithExtension.split('.');
    const fileName = fileNameParts[0];
    return fileName;
  }
  
  function encryptSentence(sentence) {
    let evenChars = '';
    let oddChars = '';
  
    for (let i = 0; i < sentence.length; i += 1) {
      if (i % 2 === 0) {
        evenChars += sentence[i];
      } else {
        oddChars = sentence[i] + oddChars;
      }
    }
    const retr = evenChars + oddChars;
    return retr.split('').reverse().join('');
  }
  
  export {
    countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring,
    countWordsWithSameLetters, countWordsWithA, normalizeSpaces,
    extractFileName, encryptSentence, checkBrackets,
  };

