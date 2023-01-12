// Practising Objects and functions

let person = {
    name: "Ujjwal",
    age: 21,
    country: "Nepal"
}
function logData()
{
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()



// Practising conditionals

let age = 20;
let message;
// In Js, javascript bhitra matra aauta condition herdo raicha which means only one age < 18 is accepted but 12 < age < 19 is not
if (age < 6) {
  message = "free";
} else if (age < 18) {
  message = "child discount";
} else if (age < 26) {
  message = "student discount";
} else if (age < 66) {
  message = "full price";
} else {
  message = "Senior citizen discount";
}

console.log(message);



// Iterating through arrays

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (let count = 0; count < largeCountries.length; count++)
{
    console.log("- " + largeCountries[count])
}



// Push, Pop, Shift, Unshift challenge

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// Push Pop works the same way as it does in a stack i.e. last in first out (Here, Monaco)
largeCountries.pop();
largeCountries.push("Pakistan");
// Now using shift and unshift to do operation on the front end 
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);



// Practising logical operations

let dayofMonth = 13
let weekday = "Friday"

if(dayofMonth===13 && weekday==="Friday")
{
    console.log("🦇")
}



// Function that returns a random item from the array

let hands = ["rock", "paper", "scissor"];
function game(){
    let num = Math.floor(Math.random()* 3);
    return hands[num];
}
console.log(game());
