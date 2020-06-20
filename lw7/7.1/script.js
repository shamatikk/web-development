function isPrimeNumber(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0){
    console.log(num + ' is not prime number');
    return false;
    break
    }
  console.log(num + ' is prime number');
  return true;
}