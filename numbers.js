const calculateDistance = (x1, x2) => {
    return Math.abs(x1 - x2);
};

const calculateSegmentProduct = (A, B, C) => {
    const AClength = Math.abs(C - A);
    const BClength = Math.abs(C - B);
    return AClength * BClength;
};

const calculateKilobytes = (fileSizeInByte) => {
    if (fileSizeInByte % 1024 === 0) {
        return fileSizeInByte / 1024;
    } else {
      return Math.floor(fileSizeInByte / 1024);
    }
};

const calculateSegments = (lengthA, lengthB) => {
    return Math.floor(lengthA / lengthB);
};

const calculateDigitSum = (twoDigitNumber) => {
    let arr = twoDigitNumber.toString();
  return twoDigitNumber = parseInt(arr[0]) + parseInt(arr [1]);
};

const swapHundredsAndTens = (twoDigitNumber) => {
    let arr = twoDigitNumber.toString();
    return twoDigitNumber = parseInt((arr[1]) + parseInt(arr [0] + parseInt(arr [2])));

};

const getHundredsDigit = (number) => {
    if (number > 999) {
        return Math.trunc(number / 100) % 10
    } else {
        return 0;
    }
};

const getFullHours = (seconds) => {
    if (typeof seconds !== 'number' || seconds < 0 || !Number.isInteger(seconds)) {
      throw ''; //mozilla//
    }
    const hours = Math.trunc(seconds / 3600);
    return hours;
  };
  
const getDayOfWeek = (DayOfYear) => {
    return (((DayOfYear + 1) % 7) - 1); 
};

const countSquares = (A, B, C) => {
    const squaresByW =  Math.floor(A / C);
    const squaresByH =  Math.floor(B / C);
    return  squaresByW * squaresByH;
    

};

export {
calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments,
calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours,
getDayOfWeek, countSquares
};
