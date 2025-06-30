const car = {
  brand: "Mahindra",
  model: "Thar",
  year: 2020,
  isRunning: false,
  start: function () {
    this.isRunning = true;
    console.log(this.brand + " started.");
  },
  stop: function () {
    this.isRunning = false;
    console.log(this.brand + " stopped.");
  },
  getDetails: function () {
    return `${this.brand} ${this.model} - ${this.year}`;
  }
};
console.log("Details:", car.getDetails());

car.start(); 
console.log("Is running?", car.isRunning);

car.stop();
console.log("Is running?", car.isRunning); 
