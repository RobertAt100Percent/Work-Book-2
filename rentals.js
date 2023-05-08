// initialize and declare all needed variables
var ppl = 38, NumPplVans = 15, VanCost = 250, costPerPerson = (VanCost*3) / ppl;

console.log("The charge per person is : " + costPerPerson.toFixed(2));
console.log("Vans are " + VanCost + " each. This means to fit " + ppl + " people on this trip, the cost of the vans are " + VanCost*3);