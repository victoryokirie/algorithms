//determine whether an input is a power of two(2)

function isPowerOfTwo(number){
    if (number < 1) return false

    let remainder = number 
    while(remainder !==1 ){
       
        if(remainder % 2 !==0){
            return false
        }

         remainder = remainder /2
    }

    return true
    
    
   
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(20))
