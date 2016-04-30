/**
 * Created by kshah on 4/24/16.
 */
var obj = {color: "red", height: 200, weight: 300};

var array = Object.keys(obj);

for (var i = 0; i < array.length; i++) {

    console.log( array[i] );
    console.log( obj [array[i]] );

}