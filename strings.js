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
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
  const getSum = (a, b) => {
    return a + b;
};

const getSmallestNumber = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
};

const castBoolean = (value) => {
    return !!value;
};

const capitalize = (str, num) => {
    if (num < 0 || num >= str.length) {
        return str;
    } else {
        return str.slice(0, num) + str.charAt(num).toUpperCase() + str.slice(num + 1);
    }
};

const countCapitalLetters = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        count += 1;
        }
    }
    return count;
};




    //export {getSum, getSmallestNumber, castBoolean, capitalize, countCapitalLetters};
    //Напишите и экспортируйте функцию `getSum()`, которая возвращает сумму двух целых чисел.

    //**Параметры**

   // - *a*: первое целое число для сложения.
   // - *b*: второе целое число для сложения.

   // **Пример использования**

    //```javascript
    //getSum(2, 12); // 14
   // getSum(3, -5); // -2
    //```

    //## 2 задача

    //Напишите и экспортируйте функцию `getSmallestNumber()`, которая возвращает наименьшее число из двух переданных аргументов.

   // **Параметры**

   // - *a*: первое целое число для сравнения.
   // - *b*: второе целое число для сравнения.

   // **Пример использования**

   // ```javascript
    //getSmallestNumber(2, 12); // 2
    //getSmallestNumber(-1000, 10); // -1000
   // ```

   // ## 3 задача

   // Напишите и экспортируйте функцию `castBoolean()`, которая возвращает *boolean* значение принятого аргумента.

   // **Параметры**

  //  - *value*: аргумент, который приводится к *boolean* значению.

  //  **Пример использования**

    //```javascript
    //castBoolean(0); // false
    //castBoolean('Hexlet'); // true
    //castBoolean(NaN); // false
    //castBoolean(); // false
    //castBoolean(''); // false
    //castBoolean(() => { }); // true
    //castBoolean(122343n); // true
    //castBoolean(console.log); // true
    //castBoolean(console.log()); // false
   // ```

   // ## 4 задача

    //Напишите и экспортируйте функцию `capitalize()`, которая возвращает строку с буквой, приведенной к верхнему регистру, по указанному индексу.

    //**Условия** 

    //- Если индекс отрицателен или превышает количество букв в слове, вернется исходная строка без изменений.

    //**Параметры**

    //- *str*: строка, которую надо вернуть.
    //- *num*: индекс, по которому будет произведено преобразование.

    //**Пример использования**

    //```javascript
    //capitalize('Hexlet', 2); // HeXlet
    //capitalize('Hello, world!', 22); // Hello, world!
    //capitalize('What`s up!', -22); // What`s up!
    //capitalize('Hello', 0); // Hello
    //```

    //## 5 задача

    //Напишите и экспортируйте функцию `countCapitalLetters()`, которая возвращает количество заглавных букв в строке.

    //**Условия**

    //- В строке допускаются только буквы и пробелы. 
    //- Пробелы не учитываются при подсчете заглавных символов.

    //**Параметры**

    //- *str*: строка, в которой ведется подсчет заглавных букв.

    //**Пример использования**

   // ```javascript
    //countCapitalLetters('HeXlet'); // 2
    //countCapitalLetters(''); // 0
    //countCapitalLetters('   a   '); // 0
    //countCapitalLetters('hello world'); // 0
    //countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'); // 33;
    //``
