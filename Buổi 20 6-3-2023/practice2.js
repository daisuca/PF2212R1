function isPrimeNumber(number) {
  let totaldivisor = 0;
  let i = 2;
  while (i < number) {
    if (number % i == 0) {
      totaldivisor += 1;
      break;
    }
    i++;
  }
  if (totaldivisor == 0) {
    return true;
  } else {return false;}
}
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(18));
