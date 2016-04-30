/**
 * Created by kshah on 4/24/16.
 */

/* define Constructor  - Constructors are similar to a function but are used when you need to create a dynamic variable with limited use of the defined properties*/
function Myconstructor (color, height, weight) {

    this.color = color;
    this.height = height;
    this.weight = weight;

    console.log(this);

}

var enemy1 = new Myconstructor("red", 200, 300);
var enemy2 = new Myconstructor("blue", 500, 200);

console.log(enemy1);
console.log(enemy2);