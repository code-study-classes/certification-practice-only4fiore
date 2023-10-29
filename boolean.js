function isPositive(A) {
    return A > 0;
  }
  
  function isOdd(A) {
    return A % 2 !== 0;
  }
  
  function checkInequality(A, B) {
    return A > 2 && B <= 3;
  }
  
  function checkInequality2(A, B) {
    return A >= 0 || B < -2;
  }
  
  function checkBetweenNumbers(A, B, C) {
    return A < B && B < C;
  }
  
  function checkOddThreeDigitNumber(number) {
    const numberStr = number.toString();
    return numberStr.length === 3 && number % 2 !== 0;
  }
  
  function checkUniqueDigits(number) {
    if ((number < 100 || number > 999) && (number > -100 || number < -999)) {
      return false;
    }
    const numberStr = Math.abs(number).toString();
  
    for (let i = 0; i < numberStr.length; i += 1) {
      for (let j = i + 1; j < numberStr.length; j += 1) {
        if (numberStr[i] === numberStr[j]) {
          return false;
        }
      }
    }
  
    return true;
  }

  export {
    isPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers,
    checkOddThreeDigitNumber,
    checkUniqueDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields,
  };