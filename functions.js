  //Functions: this a piece of code that performs a single specific function
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

  let georgeObj = {
    name: "George",
    age: 18,
    nationality: "Nigerian"
  }

  let samObj = {
    name: "Samantha",
    age: 28,
    nationality: "Canadian"
}

let chiObj = {
    name: "Chidimma",
    age: 20,
    nationality: "Nigerian"
}

function introduction(personObj) {
  console.log("my name is",personObj.name, ", I am", personObj.age, "years", "and i am",personObj.nationality)
}

introduction(chiObj)
introduction(georgeObj)
introduction(samObj)