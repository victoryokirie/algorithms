//Factorial algorithm

// function factorial(number){

//    return Math.factorial(number)
// }


function factorial(number){

    let result = 1
    for (i=1; i <=number ; i++){
        result = result * i
    }

    return result
}

console.log(factorial(3))

