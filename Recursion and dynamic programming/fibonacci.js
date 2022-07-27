function fib(n){
    if (n == 0 || n == 1){
        return 1
    }

    return fib(n-1) + fib(n-2)
}

console.log(fib(20))
console.log(fib(4))
console.log(fib(6))

//time complexity: O(2^n)