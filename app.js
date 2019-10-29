'use strict';

var name = prompt('what is your name?');
name = name.toLowerCase();

if (name === 'sam' || name === 'mercedes') {
    document.write('Welcome back, gangsta!')
} else {
    document.write('Welcome, ' + name + '!')
}

var hawksFan = confirm('You are a Seahawks fan, right?')
if (hawksFan === true) {
    document.write('  Go Hawks!');
} else {
    document.write('oh...');
}