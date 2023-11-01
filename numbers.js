import { Scope } from 'eslint-scope';

export const calculateDistance = (x1, x2) => Math.abs(x1 - x2);

export const calculateSegmentProduct = (A, B, C) => Math.abs(A - C) * (B - C);

export const calculateKilobytes = (fileSizeInBytes) => Math.floor(fileSizeInBytes / 1024);

export const calculateSegments = (lengthA, lengthB) => Math.floor(lengthA / lengthB);

export const calculateDigitSum = (twoDigitNumber) => {
  let count = 0;
  const twoDigitNumberS = twoDigitNumber.toString();
  for (let i = 0; i < twoDigitNumberS.length; i += 1) {
    count += parseInt(twoDigitNumberS[i], 10);
  }
  return count;
};

export const swapHundredsAndTens = (twoDigitNumber) => {
  const a = Math.floor(twoDigitNumber / 100);
  const b = Math.floor(twoDigitNumber / 10) % 10;
  const c = Math.floor(twoDigitNumber % 10);
  return parseInt(`${b}${a}${c}`, 10);
};

export const getHundredsDigit = (twoDigitNumber) => {
  if (twoDigitNumber < 999) {
    return 0;
  }
  const result = Math.floor(twoDigitNumber / 100) % 10;
  return result;
};

export const getFullHours = (seconds) => Math.floor(seconds / 3600);

export const getDayOfWeek = (dayOfYear) => {
  switch (dayOfYear % 7) {
    case 0:
      return 7;
      break;
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 5;
      break;
    case 6:
      return 6;
      break;
    default:
  }
};

export const countSquares = (A, B, C) => {
  const squareHeight = Math.floor(A / C);
  const squareWidth = Math.floor(B / C);
  return squareHeight * squareWidth;
};
