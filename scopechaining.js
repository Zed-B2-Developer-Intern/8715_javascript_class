function greet() {
  const name1 = "Michu";
  const name2 = "Esha";
  function welcomeMessage() 
  {

    const greeting = "Welcome";
    console.log(`${greeting} ${name1} and ${name2}!`);
  }

  welcomeMessage();
}

greet();
try {
  console.log(name1);
} catch (err) {
  console.log("Error:", err.message);
}
