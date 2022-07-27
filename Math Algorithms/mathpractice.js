//write an algorithm taht returns the lowest value in array




function getMin(numbers){
    numbers.sort(function(a,b){return a-b})
    return numbers[0]
}

console.log(getMin([5,4,6,7,30,3,2,10, 14]))


//Algorithm for checking if a number is even or odd

function isEven(number){
   return number % 2 == 0
}

console.log(isEven(2))
console.log(isEven(4))
console.log(isEven(7))