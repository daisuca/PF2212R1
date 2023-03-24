function findPrime(nStat, nEnd) {
    for (let i = nStat; i < nEnd; i++) {
       if (isPrimeNumber(i) == true) {
        console.log(i);
       }
    }
}
findPrime(2, 24);