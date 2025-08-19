 /*DATA TYPES
 1.Primitive data type: There are 5;
 2. Reference data type */


// PRIMITIVE
 // string: words which we put inside single or double quotes
 let middleName = "Chidimma"
 let gender = "female"
 let favoriteMovie = "Harry Potter"
  // operations on string 
   console.log(middleName.toUpperCase())
   console.log(middleName.toLowerCase())
  //numbers
  let age = 20
  //boolean, true or false value
  age = true

  // undefined
  //null

  //LOGICAL OPERATORS 
   // COMPARISON, AND, OR, NOT

   let sadeAge = 20
   let bolaAge = 12

   const legalAge = 18

   console.log("Is Sade able to vote?", sadeAge>= legalAge)

   //LOGIC GATE (AND, OR, NOT)

   //AND GATE(&&)
   // z will be true if x and y is true
   
   console.log("AND OPERATOR")

   let x = true
   let y = true
   let a = false 
   let b = false 

   console.log("z is", x && y)
   console.log("z is", x && a)
   console.log("z is", a && b)
   console.log("z is", sadeAge >= legalAge && bolaAge >= legalAge )

   //OR GATE (||)
   // z will be true if any of y and x is true

   console.log("OR GATE")

   console.log("z is", x || y)
   console.log("z is", x || b)
   console.log("z is", a ||  b)

   //NOT GATE (!)
   // it negates a boolean value

    console.log("NOT OPERATOR")

    console.log(true)
    console.log(!true)

    //REFERENCE DATA TYPES : arrays, objects

    // array
    let array = [ 2, 4, 12, 14]
    // you can mix different datatypes in an array
     let mixArray = [ 2, 5, 8, "Chidimma"]
     //operations on an array: add, remove

     let colourArray = ["red", "blue", "cyan", "purple", "yellow"]

     colourArray.pop()
     colourArray.push("Indigo")
     colourArray[2] = "Violet"
     console.log(colourArray)
     // length property
     console.log(colourArray.length)
     //last element in an array
     console.log(colourArray[colourArray.length - 1])
     //delete an element from a particular position
     colourArray.splice(2, 1)
     console.log(colourArray)

     // joining two arrays 
     const myArrayA = ["A", "B", "C"]
     const myArrayB = ["D", "E", "F"]

     const joinArray = myArrayA.concat(myArrayB)

     console.log(joinArray)
      // or
     const newArray = [...myArrayB, ...myArrayA]
     console.log(newArray)

     //OBJECTS
     // key value pairs in curly braces, they are used to store related data

     let aboutMe = {
        name: "Chidimma", 
        gender: "female",
        age: 20,
        favoriteColor: "red"
         }
         aboutMe["height"] = "5'11"
         aboutMe.favoriteColor = "red"
         console.log(aboutMe)