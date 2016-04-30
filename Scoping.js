/**
 * Created by kshah on 4/24/16.
 */

/* Assign a global variable */
var global = "globe";
console.log("This is a Global variable: " +global);

/* Create a function and assign a local variable to it */
function myFunction () {

    var local = "local";
    return local;

}

/* Call the function myFunction */
console.log( myFunction() );

/* Change the value of the global variable within a function */
function changeGlobal () {

    global = "change";
    return global;
}

/* call the new function changeGlobal */
console.log( changeGlobal() );
console.log("This is a new changed value of the Global variable: " +global);