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