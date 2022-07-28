function findElement(sortedArr, element, offset){
    let startIndex = 0
    let endIndex = sortedArr.length - 1

    
        const middleIndex = Math.floor((endIndex - startIndex ) / 2)

        if(element === sortedArr[middleIndex] ){
            return middleIndex + offset
        }

        if(sortedArr[middleIndex] < element){
            startIndex = middleIndex + 1
            offset = offset + middleIndex + 1
            // return findElement(sortedArr.slice(startIndex, endIndex), element)
        }else{
            endIndex = middleIndex 
            
        }

        return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset)
    
    
}


const arr =[1,3,5,7,9,11,13,15,17,19,21]

console.log(findElement(arr, 3))
console.log(findElement(arr, 17))