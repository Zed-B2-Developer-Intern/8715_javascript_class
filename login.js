const readline = require('readline');


const validUsername = "admin";
const validPassword = "1234";
const maxAttempts = 3;
let attemptCount = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function promptLogin() {
  rl.question("Enter username: ", function(username) {
    rl.question("Enter password: ", function(password) {
      attemptCount++;
      username = username.trim();
      password = password.trim();
      if (username === "" || password === "") {
        console.log("Username or password cannot be empty.\n");
        retryOrExit();
      } else if (username.toLowerCase() === validUsername.toLowerCase() && password === validPassword) {
        console.log("Login Successful!");
        rl.close();
      } else {
        console.log("Invalid Credentials. Try again.\n");
        retryOrExit();
      }
    });
  });
}

function retryOrExit() {
  if (attemptCount < maxAttempts) {
    console.log(`Attempt ${attemptCount} of ${maxAttempts}.\n`);
    promptLogin();
  } else {
    console.log("Too many failed attempts. Access denied.");
    rl.close();
  }
}

console.log("=== Welcome to Secure Login System ===\n");
promptLogin();
