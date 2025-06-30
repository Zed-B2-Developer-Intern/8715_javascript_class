let name = "Easha";
let age = 21;
let course = "Full-Stack Web Development";
let marks1 = 87;
let marks2 = 91;
let total = marks1 + marks2;
let skills = ["HTML", "CSS", "JavaScript", "React"];
let profile = {
  city: "Chennai",
  college: "Mount Zion College of Engineering",
  batch: 2025
};
function getGreeting(name) {
  return `Hello, ${name}! Hope you're doing great!`;
}
let output = `
 STUDENT PROFILE

 Name      : ${name}
 Age        : ${age}
 Course     : ${course}

Skills     : ${skills.join(", ")}
 City       : ${profile.city}
 College    : ${profile.college}
 Batch      : ${profile.batch}

 Total Marks (87 + 91): ${marks1} + ${marks2} = ${total}

 Greeting   : ${getGreeting(name)}

✅ All data has been dynamically inserted using JavaScript Interpolation!
`;

console.log(output);
