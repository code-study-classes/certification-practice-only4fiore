function sumOfSquares(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i += 1) {
      sum += i * i;
    }
    return sum;
  }
  
  function power(A, N) {
    let result = 1;
    for (let i = 0; i < N; i += 1) {
      result *= A;
    }
    return result;
  }
  
  function factorialProduct(N) {
    if (N <= 0) {
      return 1;
    }
    let product = 1;
    for (let i = 1; i <= N; i += 1) {
      product *= i;
    }
    return product;
  }
  
  function fibonacciSequence(N) {
    if (N <= 0) {
      return 0;
    } if (N === 1) {
      return 1;
    }
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= N; i += 1) {
      const next = prev + current;
      prev = current;
      current = next;
    }
    return current;
  }
  
  function sumOfPowers() {}
  
  function remainingLength() {}
  
  function findExponent() {}
  
  function findMinKAndSum() {}
  
  function calculateGCD() {}
  
  function findFibonacciIndex() {}
  
  export {
    sumOfSquares, power, factorialProduct, fibonacciSequence, sumOfPowers,
    remainingLength, findExponent, findMinKAndSum, calculateGCD, findFibonacciIndex,
  };