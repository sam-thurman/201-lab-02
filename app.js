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

var scoreCounter = 0

var earlAge = prompt('Do you think Earl is old enough to LEGALLY buy alcohol?');
earlAge = earlAge.toLowerCase();
if (earlAge === 'yes') {
    // console.log('He wishes...');
    alert('He wishes...');
} else if (earlAge === 'no') {
    // console.log('You are correct!');
    alert('You are correct!');
    scoreCounter++;
    console.log(scoreCounter);
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
    prompt('Do you think Earl is old enough to LEGALLY buy alcohol?');}

var birthplace = prompt('Was Earl born in Seattle?');
birthplace = birthplace.toLowerCase();
if (birthplace === 'yes') {
    // console.log('Sorry, no. He was born in Portland, OR.');
    alert('Sorry, no. He was born in Portland, OR.');
} else if (birthplace === 'no') {
    //console.log('Correct! Earl was born in Portland, OR.');
    alert('Correct! Earl was born in Portland, OR.');
    scoreCounter++;
    console.log(scoreCounter);
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
    prompt('Was Earl born in Seattle?');}

var siblings = prompt('Does Earl have any siblings?');
siblings = siblings.toLowerCase();
if (siblings === 'yes') {
    // console.log('Correct! He has a brother named Dewie, and a sister named Nelly!');
    alert('Correct! He has a brother named Dewie, and a sister named Nelly!');
    scoreCounter++;
    console.log(scoreCounter);
} else if (siblings === 'no') {
    // console.log('Wrong! Earl has a brother named Dewie, and a sister named Nelly!');
    alert('Wrong! Earl has a brother named Dewie, and a sister named Nelly!');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
    prompt('Does Earl have any siblings?');}

var favColor = prompt('Is Earl\'s favorite color black?');
favColor = favColor.toLowerCase();
if (favColor === 'yes') {
    // console.log('DUHHHHH..');
    alert('DUHHHHH..');
    scoreCounter++;
    console.log(scoreCounter);
} else if (favColor === 'no') {
    // console.log('Wrong! Of course black is his favorite color');
    alert('Wrong! Of course black is his favorite color');
} else {
    // console.log('try again...');
    alert('try again, please answer yes/no');
    prompt('Is Earl\'s favorite color black?')}

// GUESSING RANDOM #

var randomNumber = getRandomIntInclusive()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor (10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = 4
do {
    var numberGuess = prompt('Can you guess what number I\'m thinking? (4 tries) (Hint: it\'s between 1-10 inclusive)')
    console.log(randomNumber)
    
    if (parseInt(numberGuess, 10) > randomNumber){
        alert('your guess is too high! you have ' + i + ' guesses left');
    } else if (parseInt(numberGuess, 10) < randomNumber){
        alert('your guess is too low! you have ' + i + ' guesses left');
    }else {
        alert('Congrats! You guessed correctly');
        scoreCounter++;
        console.log(scoreCounter);}
    
    i--;
} while (numberGuess !== randomNumber.toString(10) && i !== 0)

// GUESSING FAV FOOD 


var favFoods = ['chicken', 'salmon', 'peanut butter', 'grass'];

console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
console.log(favFoods[3]);
var j = 6;
do {
    var askFoods = prompt('Earl has lots of favorite foods! Can you guess one of them? (6 tries)');
    console.log(askFoods);
    j--;
    if (askFoods === favFoods[0] || askFoods === favFoods[1] || askFoods === favFoods[2] || askFoods === favFoods[3]){
        alert('Congrats! You got one!');
        scoreCounter++;
        console.log(scoreCounter);
    } else if (j === 0){
        alert('Oh no :( you are out of guesses. 4 of his favorite foods are chicken, salmon, peanut butter and grass.  Yes, grass.  As in from my front lawn.');
    } else {
        alert('Oops, try again! you have ' + j + ' guesses left.');
    }
} while (askFoods !== favFoods[0] && askFoods !== favFoods[1] && askFoods !== favFoods[2] && askFoods !== favFoods[3] && j>0);

alert('Great job! You scored ' + scoreCounter.toString(10) + ' out of 7!!! Come back any time and try again :)');
