'use strict'

var name = prompt('what is your name?');
name = name.toLowerCase();
document.write('Welcome, ' + name + '!')

var hawksFan = confirm('You are a Seahawks fan, right?');
if (hawksFan === true) {
    document.write('  Go Hawks!');
} else {
    document.write('oh...');
}

var myAge = prompt('Do you think Sam is old enough to LEGALLY buy alcohol?');
myAge = myAge.toLowerCase();
if (myAge === 'yes') {
    console.log('He wishes...');
} else if (myAge === 'no') {
    console.log('You are correct!');
} else {
    console.log('try again...');
}

var birthplace = prompt('Was Sam born in Seattle?');
birthplace = birthplace.toLowerCase();
if (birthplace === 'yes') {
    console.log('Sorry, no. He was born in El Paso, TX.');
} else if (birthplace === 'no') {
    console.log('Correct! Sam was born in El Paso, Texas.');
} else {
    console.log('try again...')
}