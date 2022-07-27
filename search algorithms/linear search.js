

function linearSearch(arr, elementToBeFound){
    let index =0
    for (const item of arr){
        if(item == elementToBeFound){
            return index
        }

        index++
    }

    
    

}


const arr = [4,6,2,7,1,8,40,32,20,21]

console.log(linearSearch(arr, 40))



// Another implementation of linear search algorithm using for loop


function find(numbers, elementToBeFound){
    for(i=0; i< numbers.length; i++){
        if(elementToBeFound == arr[i]){
            return i
        }
    }

}

const numbers = [4,6,2,7,1,8,40,32,20,21]

console.log(find(arr, 7))


// Another implementation of linear search algorithm using forEach loop

function findNumber(arr, elementToBeFound){
   

    arr.forEach((element, index)=> {
        if(elementToBeFound == element){
            console.log(index)
        }
        
        
    });
    

}


const array = [4,6,2,7,1,8,40,32,20,21]

findNumber(arr, 20)


// These will not work for an array of objects. it works well for primitive data types(strings, numbers)

// For objects one has to tweak the algorithm a bit to ensure the datatype is an object

function findEmployee(employees, employeeDetails){

    let index =0
    for (const item of employees){
       if(typeof employeeDetails === 'object' && employeeDetails !==null && employeeDetails.name === item.name) {
           return index
       }

   
        index++
    }
    

}

const employees=[
    {name: 'Tony', Age:26},
    {name: 'Jane', Age:23},
    {name: 'Ben', Age:21},
    {name: 'Mike', Age:25}
]

console.log(findEmployee(employees,{name: 'Ben', Age:21}))
