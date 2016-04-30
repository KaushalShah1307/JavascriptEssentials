/**
 * Created by kshah on 4/22/16.
 */

obj = {name: "Kaushal", surName: "Shah", age: 27, sex: "Male"};
console.log(obj.name);

var Object1 = "surName";
var Object2 = "sex";
console.log(obj [ Object1 ]);
console.log(obj [ Object2 ]);

obj.status = "Single";
console.log(obj);
obj.age += 1;
console.log(obj);