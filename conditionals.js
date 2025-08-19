//CONDITIONALS: these are simply decision making abilities

let chiObj = {
    name: "Chidimma",
    age: 20,
    nationality: "Nigerian"
}
// check if you are eligible to vote in an election in Nigeria
if(chiObj.nationality == "Nigerian" && chiObj.age >= 18) {
console.log("You are eligible to vote")
}
else{
console.log("You are not eligible to vote")
}