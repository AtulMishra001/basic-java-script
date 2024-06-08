// hello this a practice file for gitHub codespace.

function outerFunction() {//this function is to check laxcical scope.
  var name = "Ankit Mishra";
  function innerFunction() {
    console.log(name);
  }
  innerFunction();
}
// outerFunction();


// here we find out about the classes and getters and setters.
// class user {
//     constructor(username , email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     get username(){
//         return this._username;// in order to prevent stack filled error we used _ before all the properties
//     }
//     set username(value){
//         this._username = value;
//     }

//     get email(){
//         return this._email;
//     }
//     set email(value){
//         this._email = value;
//     }

//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(value){
//         this._password = value;
//     }
// }

// const user1 = new user("Atul001", "atul@google.com", "abcdefghijklmnopqrestuvwxyz");

// console.log(user1.username);
// console.log(user1.email);
// console.log(user1.password);

// What is Closure

function user() {
    const userId = 101;
    username = {
        userName: "user1",
        firstName : "Atul",
        lastName : "Mishra"
    }

    function getUsername () {
        return username.userName;
    }
    return getUsername;
}

let fun = user();
console.log(fun())

