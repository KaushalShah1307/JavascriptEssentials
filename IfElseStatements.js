/**
 * Created by kshah on 4/24/16.
 */
var age = 0;

function myAge (age) {

    if ( age >= 18 ) {

        return 'Valid age to enter the pub';

    }

    else if ( age == 17 ) {

        return 'Wait for an year and come back!';

    }

    else {

        return 'Get out of here, Kiddo!';

    }
}

console.log( myAge(17) );
