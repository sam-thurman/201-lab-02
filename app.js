'use strict'
// name prompt

var name = prompt('what is your name?');
name = name.toLowerCase();
document.write('Welcome, ' + name + '!')
var scoreCounter = 0
// hawks Q1

var hawksFan = prompt('You are a Seahawks fan, right?');
hawksFan = hawksFan.toLowerCase();

function question1() {
    if (hawksFan === 'yes') {
    document.write('  Go Hawks!');
    scoreCounter++;
    console.log(scoreCounter);
} else {
    document.write('oh...');}
}
question1();
// Q2

function question2() {
    var earlAge = prompt('Do you think Earl is old enough to LEGALLY buy alcohol?');
    earlAge = earlAge.toLowerCase();
    if (earlAge === 'yes') {

        alert('He wishes...');

    } else if (earlAge === 'no') {

        alert('You are correct!');
        scoreCounter++;
        console.log(scoreCounter);

    } else {

        alert('try again, please answer yes/no');
        prompt('Do you think Earl is old enough to LEGALLY buy alcohol?');
    }
}
question2();


//Q3

function question3() {
    var birthplace = prompt('Was Earl born in Seattle?');
    birthplace = birthplace.toLowerCase();
    if (birthplace === 'yes') {

        alert('Sorry, no. He was born in Portland, OR.');

    } else if (birthplace === 'no') {

        alert('Correct! Earl was born in Portland, OR.');
        scoreCounter++;
        console.log(scoreCounter);

    } else {

        alert('try again, please answer yes/no');
        prompt('Was Earl born in Seattle?');
    }
}
question3();

//Q4

function question4() {
    var siblings = prompt('Does Earl have any siblings?');
    siblings = siblings.toLowerCase();
    if (siblings === 'yes') {

        alert('Correct! He has a brother named Dewie, and a sister named Nelly!');
        scoreCounter++;
        console.log(scoreCounter);

    } else if (siblings === 'no') {

        alert('Wrong! Earl has a brother named Dewie, and a sister named Nelly!');

    } else {

        alert('try again, please answer yes/no');
        prompt('Does Earl have any siblings?');
    }
}
question4();
//Q5

function question5() {
    var favColor = prompt('Is Earl\'s favorite color black?');
    favColor = favColor.toLowerCase();
    if (favColor === 'yes') {

        alert('DUHHHHH..');
        scoreCounter++;
        console.log(scoreCounter);

    } else if (favColor === 'no') {

        alert('Wrong! Of course black is his favorite color');

    } else {

        alert('try again, please answer yes/no');
        prompt('Is Earl\'s favorite color black?')
    }
}
question5();

// GUESSING RANDOM #

function question6() {
    var randomNumber = getRandomIntInclusive()
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numberGuess = parseInt(numberGuess);
    var guesses = 4
    do {
        var numberGuess = prompt('Can you guess what number I\'m thinking? (4 tries) (Hint: it\'s between 1-10 inclusive)')
        console.log(randomNumber)

        if (numberGuess > randomNumber) {
            alert('your guess is too high! you have ' + guesses + ' guesses left');
            guesses--;
        } else if (numberGuess < randomNumber) {
            alert('your guess is too low! you have ' + guesses + ' guesses left');
            guesses--;
        } else if (numberGuess === ''){
            alert('please enter a number')
        } else {
            alert('Congrats! You guessed correctly');
            scoreCounter++;
            console.log(scoreCounter);
        }

    } while (parseInt(numberGuess) !== randomNumber && guesses > 0)
}
question6();

// GUESSING FAV FOOD 

function question7() {
    do {
        var favFoods = ['chicken', 'salmon', 'peanut butter', 'grass'];  
        console.log(favFoods[0]);
        console.log(favFoods[1]);
        console.log(favFoods[2]);
        console.log(favFoods[3]);
        var askFoods = prompt('Earl has lots of favorite foods! Can you guess one of them? (6 tries)');
        console.log(askFoods);
        var j = 6
        j--;

        if (askFoods === favFoods[0] || askFoods === favFoods[1] || askFoods === favFoods[2] || askFoods === favFoods[3]) {

            alert('Congrats! You got one!');
            scoreCounter++;
            console.log(scoreCounter);

        } else if (j === 0) {

            alert('Oh no :( you are out of guesses. 4 of his favorite foods are chicken, salmon, peanut butter and grass.  Yes, grass.  As in from my front lawn.');

        } else {

            alert('Oops, try again! you have ' + j + ' guesses left.');
        }

    } while (askFoods !== favFoods[0] && askFoods !== favFoods[1] && askFoods !== favFoods[2] && askFoods !== favFoods[3] && j > 0);}
question7();

//score count!

alert('Great job! You scored ' + scoreCounter.toString(10) + ' out of 7!!! Come back any time and try again :)');