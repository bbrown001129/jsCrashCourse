// JavaScript source code
//alerts are inefficient, use console instead
//mdn console - best documentation for developers
/*
console.log("hello World");
console.error('This is an error');
console.warn('This is a warning');
*/

// var,(don't wanna use var as much, can lead to conflicts) let, const

// let can be changed
/*let age = 30;
age = 31;

console.log(age)
*/
// const cannot be changed- always use const unless you need to reassign

// String, Number, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

/* STRINGS*/

// String Concatenation
console.log('My name is ' + name + 'and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));

console.log(s.split(''));

const set = 'technology, computers, it, code';
console.log(set.split(', '));

/* ARRAYS - variables that hold multiple values */

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits[1]);
console.log(numbers);
fruits[3] = 'grapes';
// Values can be added to const array you just cannot reassign values

fruits.push('mangos')
// push will add values to the end of the arrat

fruits.unshift('strawberries')
// unshift adds strawberries to the begining of the list

fruits.pop();
// removes the last element off of the array

console.log(Array.isArray(fruits))
//Checks to see if variable is an array or not

console.log(fruits.indexOf('oranges'));
// lets you know where the index of specific value is

/* OBJECT LITERALS-  key value pairs*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);

console.log(person.address.city);

//destructuring
const {firstName, lastName, address:{city}} = person;

console.log(firstName);

// can add properties

person.email = 'john@gmail.com'
console.log(person);

//oject arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

/* JSON - a data format; use JSON Converter*/

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/* LOOPS */

//For
for(let i = 0;i<10;i++){
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Loop through array
for(let i = 0;i < todos.length; i++){
    console.log(todos[i].text);
}

// for of loop
for(let todo of todos){
    console.log(todo.id);
}

// High order array operations
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

// Map
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// Filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
return todo.text;
})

console.log(todoCompleted);

/* Conditionals */

const t = 10; // works for t = '10'
if(t == 10){ // Adding third equal sign checks for type too
    console.log('t is 10');
}else if (t >10){
    console.log('x is greater than 10');
}else{
    console.log('t is not 10');
}
