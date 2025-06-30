console.log(" JavaScript Variables & Data Types\n");

var name = "Easha";
console.log("Name:", name, "→", typeof name);

let age = 21;
console.log("Age:", age, "→", typeof age);

const isStudent = true;
console.log("Is Student:", isStudent, "→", typeof isStudent);

let grade;
console.log("Grade:", grade, "→", typeof grade);

let score = null;
console.log("Score:", score, "→", typeof score);

let bigNumber = 12345678901234567890n;
console.log("Big Number:", bigNumber, "→", typeof bigNumber);
let uniqueId = Symbol("id");
console.log("Unique ID:", uniqueId.toString(), "→", typeof uniqueId);

let person = {
  firstName: "Easha",
  lastName: "Z",
  age: 21
};
console.log("Person:", person, "→", typeof person);

let hobbies = ["Coding", "Music", "Art"];
console.log("Hobbies:", hobbies, "→", typeof hobbies);
console.log("Is Array:", Array.isArray(hobbies));

function greet() {
  return "Hello from Node.js!";
}
console.log("Greet Function:", greet(), "→", typeof greet);

let today = new Date();
console.log("Today's Date:", today.toDateString(), "→", typeof today);

let info = `My name is ${name}, I'm ${age} years old.`;
console.log("Info String:", info);

console.log("\nType Detection Completed.");
