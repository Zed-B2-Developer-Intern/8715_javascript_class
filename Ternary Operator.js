const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validPassword = "1234";
rl.question("Enter username: ", (username) => 
  {
  rl.question("Enter password: ", (password) =>
     {
    
    
    const loginStatus = (username === validUsername && password === validPassword)
      ? " Login successful!"
      : " Invalid username or password.";

    console.log(loginStatus);
    rl.close();
  });
});
