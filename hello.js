function greetUser(callback) {
  const name = "Easha";
  callback(name);
}

greetUser((name) => {
  console.log("Hello, " + name + "!");
});
