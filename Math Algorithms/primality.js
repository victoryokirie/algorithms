//Primality test

function prime (number){

    for (i = 2; i < number; i++){
        console.log('Running')
        if(number % i == 0){
            return false
        }

    }
   return true
}

//Best case: number is either 1 or 2 ; O(1)
//worst case: O(n)

console.log(prime (27277))


/**  The Primality test can be improved to reduce the number of iterations.
 * The logic is that any non-prime number has a square root and the factors of the non-prime number are either equal to or less than the square root. 
 * so using this method massively reduces the number of iterations in the for loop
 
 
**/

function isPrime (number){

    for (i = 2; i < Math.sqrt(number); i++){
         console.log('Running')
        if(number % i == 0){ 
            return false
        }

    }
   return true
}

//Best case: number is either 1 or 2 ; O(1)
//worst case: O(sqrt(n))

console.log(isPrime (27277))


