'use strict'

var name = prompt('what is your name?');
name = name.toLowerCase();
document.write('Welcome, ' + name + '!')

var hawksFan = prompt('You are a Seahawks fan, right?');
hawksFan = hawksFan.toLowerCase();
if (hawksFan === 'yes') {
    document.write('  Go Hawks!');
    //console.log('Thank God')
} else {
    document.write('oh...');
}

var earlAge = prompt('Do you think Earl is old enough to LEGALLY buy alcohol?');
earlAge = earlAge.toLowerCase();
if (earlAge === 'yes') {
    // console.log('He wishes...');
    alert('He wishes...');
} else if (earlAge === 'no') {
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
}

var birthplace = prompt('Was Earl born in Seattle?');
birthplace = birthplace.toLowerCase();
if (birthplace === 'yes') {
    // console.log('Sorry, no. He was born in Portland, OR.');
    alert('Sorry, no. He was born in Portland, OR.');
} else if (birthplace === 'no') {
    //console.log('Correct! Earl was born in Portland, OR.');
    alert('Correct! Earl was born in Portland, OR.');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
}

var siblings = prompt('Does Earl have any siblings?');
siblings = siblings.toLowerCase();
if (siblings === 'yes') {
    // console.log('Correct! He has a brother named Dewie, and a sister named Nelly!');
    alert('Correct! He has a brother named Dewie, and a sister named Nelly!');
} else if (siblings === 'no') {
    // console.log('Wrong! Earl has a brother named Dewie, and a sister named Nelly!');
    alert('Wrong! Earl has a brother named Dewie, and a sister named Nelly!');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
}

var favColor = prompt('Is Earl\'s favorite color black?');
favColor = favColor.toLowerCase();
if (favColor === 'yes') {
    // console.log('DUHHHHH..');
    alert('DUHHHHH..');
} else if (favColor === 'no') {
    // console.log('Wrong! Of course black is his favorite color');
    alert('Wrong! Of course black is his favorite color');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
}

// GUESSING RANDOM #

var randomNumber = getRandomIntInclusive()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor (10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = 4
do {
var numberGuess = prompt('Can you guess what number I\'m thinking? (4 tries) (Hint: it\'s between 1-10 inclusive)' + randomNumber)
if (parseInt(numberGuess, 10) > randomNumber){
    alert('your guess is too high, try again!')
} else if (parseInt(numberGuess, 10) < randomNumber){
    alert('your guess is too low, try again!')
} else {
    alert('Congrats! You guessed correctly')
}
i--
} while (numberGuess !== randomNumber.toString(10) && i !== 0)

// GUESSING FAV FOOD 

var j = 6
var favFoods = ['chicken', 'salmon', 'peanut butter', 'grass'] 
console.log(favFoods[0])
console.log(favFoods[1])
console.log(favFoods[2])
console.log(favFoods[3])

do {
    var askFoods = prompt('Earl has lots of favorite foods! Can you guess one of them? (6 tries)');
    j--;
    alert('you are on guess number' + j)
if (askFoods === favFoods[0]){
    alert('chicken')}
} while (askFoods !== favFoods[0] || askFoods !== favFoods[1] || askFoods !== favFoods[2] || askFoods !== favFoods[3])