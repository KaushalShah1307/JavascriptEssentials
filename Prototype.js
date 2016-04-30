/**
 * Created by kshah on 4/23/16.
 */
var car = { color: "red", modelType: "Coupe" };
console.log(car.modelType);

var truck = {};

/* Prototype */

console.log(car.__proto__.hello = "world");
console.log(car.hello);
console.log(truck.hello);