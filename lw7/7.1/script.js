let n = [2, 3, 4, 5];
isPrimeNumber(n);

function isPrimeNumber(n) {
  let isPrime = false;
  let isArray = Array.isArray(n);
  let isNumberArray = false;
  let arrData = [];
  let arrLength;

  if (isArray) {
    arrData = Array.from(n);
    arrLength = arrData.length;
    isNumberArray = arrData.every(isInteger);
  } 

  if (isNumberArray) {
    for (j = 0; j < arrLength; j++) { 
      n = arrData.shift(); 
      isPrime = isIntPrime(n, isPrime);
      Result(n, isPrime);
    }     
  } else if (isInteger(n)) {
    isPrime = isIntPrime(n, isPrime);
    Result(n, isPrime);
  } else {
    console.log('Ошибка');
  }
}

function isInteger(elem) {
  return((typeof elem) == 'number');
}

function isIntPrime(n, isPrime) {
  isPrime = true;

  for (let i = 2; ((i < n) && (isPrime)); i++) {
    if (((n % i) == 0) || (n <= 1))  {
      isPrime = false;
    }
  }

  return isPrime;
} 

function Result(n, isPrime) { 

  if (isPrime) {
    console.log('Результат: ', n, 'is prime number');
  } else {
    console.log('Результат: ', n, 'is not prime number');
  }
}   