//arrays

const myarray = ["volvo" , "ford" , "maruti" , "swift" , "tiago"];
const arr = new Array(0,1,2,3,4,5,6,7,8,9)

// console.log(arr[3]);
// console.log(myarray[3]);

//********************** array methods ************************

// console.log(arr);

arr.push(10,11,12); //push adds elements at the end of the array

arr.pop()//pop method dose't take any perameters it removes last element from the array

arr.unshift(100)//unshift add elements at the begning of the array
arr.shift()//shift remover the first element from array

//join and concat method these are used to marge arrays together

const array1 = ["one" , "two" , "Three" , "Four" , "Five" , "six" , "seven" , "eight" , "nine" , "ten"];
const array2 = new Array(1,2,3,4,5,6,7,8,9,10);

//use of join

// const array3 = array1.join()//join method returns a string which can leed to type mismatch 

// console.log(array1);
// console.log(typeof array3);//string

//use of concat method

// const array3 = array1.concat(array2);//adds two arrays 
// console.log(array3);

// the slice and splice method 

// console.log(array1);
// console.log("slice array1");
const newarr  = array1.slice(0, 3);
// console.log("afert slice");
// console.log("originel array")
// console.log(array1)

console.log(typeof newarr);


// const newarray2 = array2.splice(0,3);
// console.log("using splice " +newarray2);
// console.log("real array "+ array2);











