//dates

let currentDate = new Date();

console.log(currentDate.toDateString());// OUTPUT = Fri May 17 2024

console.log(currentDate.toTimeString());// OUTPUT = 23:09:44 GMT+0530 (India Standard Time)

console.log(currentDate.toLocaleDateString());// OUTPUT = 5/17/2024

const mydate = new Date(2005 , 3 , 24);//to declare a specific date provide peramiters as (YEAR , month(0-11) , Day)
//here 2005 is year , 3 is the month (follows zero indexing) , 24 is the day of the month

console.log(mydate.toDateString()); //OUTPUT = Sun Apr 24 2005

//more on toLocaleDateString() method

const newDate = Date.now(); //this is different  way of Date declaretion from line 3
// you can customize date formatting even more with this method

console.log(newDate.toLocaleDateString("default" , {//this is an object and you using it's properties to format the dates
  //here you can customaze what you want your date look like
    month: "long",
    day:"2-digit",
    year:"numeric",
    hourCycle:"h12",
    hour:"2-digit"
})) // OUTPUT  = April 24, 2005 at 12 AM explore more properties yourself


