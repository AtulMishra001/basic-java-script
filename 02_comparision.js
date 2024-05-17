//doing simple comparision has nothing to write about i know it

// console.log(1<2)
// console.log(1<=2)
// console.log(1>2)
// console.log(1>=2)
// console.log(1!=2)

// now we will be doing diffrent comparisions

// console.log(null < 0)
// console.log(null == 0)
// console.log(null <= 0)


// console.log(undefined > 0)//false
// console.log(undefined >= 0)//false
// console.log(undefined < 0)//false
// console.log(undefined <= 0)//false
// console.log(undefined == 0)//false


//now we will do strict check means now we will also check datatype of variable

// console.log("1" === 1)//false

function comparisionstr(str1 , str2) {
    return str1.toUpperCase() === str2.toUpperCase()
}

console.log(comparisionstr("1234", "1234"));
