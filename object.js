const person = {
  name: "Easha",
  age: 21,
  isStudent: true,
  skills: ["JavaScript", "HTML", "CSS"],
    greet: function () {
    console.log("hi, my name is " + this.name);
  }
};
console.log("Name:", person.name);
console.log("Age:", person["age"]);
person.greet();
person.age = 23;
console.log("Updated Age:", person.age);
person.country = "India";
console.log("Country:", person.country);
person.address = {
  city: "karaikudi",
  zip: "630106"
};
console.log("City:", person.address.city);
console.log("All Properties:");
for (let key in person) {
  console.log(key + ":", person[key]);
}
const jsonString = JSON.stringify(person);
console.log("JSON Output:", jsonString);
