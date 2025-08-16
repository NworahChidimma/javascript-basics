// VARIABLES//

var favoriteColor = "red"
let name = "Chidimma"
const PI = 3.14
// console.log allows you to see your code in your console
 console.log(name);

 /*DATA TYPES
 1.Primitive data type: There are 5;
 2. Reference data type */


// PRIMITIVE
 // string: words which we put inside single or double quotes
 let middleName = "Chidimma"
 let gender = "female"
 let favoriteMovie = "Harry Potter"
  //numbers
  let age = 20
  //boolean, true or false value
  age = true

  //Functions
  //function declaration syntax:

  function sum (num1,num2){
    if (num2 === undefined){
        return num1 
    }
    return num1 + num2;
  }
  console.log(sum(2,4))
  console.log(sum(2))
   
  // we can also have an anonymous function or arrow function
  const add = (num1,num2) => {
    return num1 + num2
  }
  console.log(add  (1,2))
 