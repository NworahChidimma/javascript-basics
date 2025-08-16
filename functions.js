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
 