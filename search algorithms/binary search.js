//Binary search only works on ordered lists. 

function findElement(sortedArr, element){
    let startIndex = 0
    let endIndex = sortedArr.length - 1

    while(startIndex <= endIndex){
        const middleIndex =startIndex + Math.floor((endIndex - startIndex ) / 2)

        if(element === sortedArr[middleIndex] ){
            return middleIndex
        }

        if(sortedArr[middleIndex] < element){
            startIndex = middleIndex + 1
        }else{
            endIndex = middleIndex -1
        }
    }
    
}


const arr =[1,3,5,7,9,11,13,15,17,19,21]

console.log(findElement(arr, 3))
console.log(findElement(arr, 17))


//time complexity for a binary search algorithm = O(log n)
