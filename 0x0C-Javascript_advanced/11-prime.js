countPrimeNumbers = () => {
  
  var primes= 4;
  for (var counter = 2; counter <= 100; counter = counter + 1)
  {
      var isPrime = 0;
      if(isPrime == 0){ 
          if(counter == 2 || counter == 3 ||counter == 5 || counter == 7);
          else if(counter % 2 == 0 || counter % 3 == 0 || counter % 5 == 0 || counter % 7 == 0)isPrime=0; 
          else {
              primes = primes + 1;
          }
      }
  }
}

const t0 = performance.now()
for (let times = 0; times <= 100; times++){ 
  setTimeout(() => { countPrimeNumbers();}, 0)
}

const t1 = performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${t1-t0} milliseconds`)
