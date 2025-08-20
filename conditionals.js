//CONDITIONALS: these are simply decision making abilities

let chiObj = {
    name: "Chidimma",
    age: 20,
    nationality: "Nigerian"
}

let samObj = {
    name: "Samantha",
    age: 18,
    nationality: "Canadian"
}
// check if you are eligible to vote in an election in Nigeria
if(chiObj.nationality.toUpperCase() == "Nigerian".toUpperCase() && chiObj.age >= 18) {
console.log("You are eligible to vote")
}
else{
console.log("You are not eligible to vote")
}

if(samObj.nationality.toUpperCase() == "Nigerian".toUpperCase() && samObj.age >= 18) {
console.log("You are eligible to vote")
}
else{
console.log("You are not eligible to vote")
}