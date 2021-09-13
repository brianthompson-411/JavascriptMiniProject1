/*
let var1 = 4;
document.write(typeof var1);
document.write(var1);
console.log(typeof var1);
console.log(var1);

//variables
let x = "2";
console.log(x);
console.log(typeof x);
x = 2;
console.log(x);
console.log(typeof x);

//array
let z = ["dog", "cat", "bird"];
console.log(z);
console.log(typeof z);

//reassign
z = 4;
console.log(z);

//type conversion
let val;
*/


/*
//JavaScript Type Conversion
let val;

//Number to String
val = 5;

//String() Method

//Number to String
val = String(555);
val = String(4+4);
//Boolean To String
val = String(true);
//Date to String
val = String (new Date());
//Array to String
val = String([1,2,3,4]);

//.toString Property
val = (5).toString();
val = (true).toString();


//The Number() Method

//String-numbers to Number
val = "1y23.9999";
console.log(val);
console.log(typeof val);
val = Number(val);
console.log(val);
console.log(typeof val);

//Boolean to Number
//True
val = true;
console.log(typeof val);
val = Number(val);
console.log(val);
//False
val = false;
console.log(typeof val);
val = Number(val);
console.log(val);


//Null to Number
val = null;
console.log(val);
console.log(typeof val);
val = Number(val);
console.log(val);

//parseDataType
//parseInt
val = parseInt("100.20");
console.log(val);
//parseFloat
val = parseFloat("100.20");
console.log(val.toFixed(2));

*/




/*
//Numbers & The Math Objects

//Practice
let var1 = 13;
let var2 = 7;
var1 -= var2;
console.log("var1 is: " + var1);

let var3 = 7;
let var4 = 7;
var3 *= var1;
console.log("var3 is: " + var3);

let var5 = 19;
let var6 = 6;
var5 %= var6;
console.log(var5);


//PI
let var7 = Math.PI;
console.log(var7);

//Round
let var8 = Math.round(var7);
console.log(var8);

//Ceil
let var9 = Math.ceil(var7);
console.log(var9);

//Floor
let var10 = Math.floor(var7);
console.log(var10);


//Pow
let var11 = Math.pow(4, 0);
console.log("var11 is: " + var11);

//sqrt
let var12 = 49;
console.log(Math.sqrt(var12));


//.min
let var14;
var14 = Math.max(44, 48, 9, 43, 90, 4);
console.log(var14);


//.random
let var15;
var15 = Math.floor(Math.random() * 8 + 1);
console.log(var15);

*/



/*

//String Methods & Concatenations

const firstName = "Michael";
const lastName = "Thompson";
const age = 42;

let val;

val = firstName + lastName;


//Concatenation
val = firstName + ' ' + lastName;
val = 'Hello, my name is ' + firstName + ' and I am ' + age;


//Append
val = 'Brian ';
val += 'Thompson';

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', firstName, ' ', lastName, ' ', age);

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

//String Array
val = firstName[3];


//Index of
val = lastName.indexOf('m');
val = firstName.indexOf('l');

//charAt()
val = firstName.charAt(0);

//Get Last char
val = firstName.charAt(firstName.length - 1);

//substring
val  = firstName.substring(0, 3);

//slice
val = lastName.slice(-3);

//split
const str = 'Hello there my name is Brian';
val = str.split(' ');

tags = 'web design, web development, programming';
val = tags.split(',');

//replace
val = tags.replace('programming', 'Software Engineering');

//includes
val = tags.includes('web design');

//Index of
//substring
val  = firstName.slice(-4);


console.log(val);

*/


/*
//Template Literals
const name = 'Brian';
const age = 42;
const job = 'Web Developer';
const city = 'Kissimmee';


//Without Template Strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age
+ '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

document.body.innerHTML = html;


//Still Without Template Strings (formatted better)
html = 
    '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
    '</ul>'
document.body.innerHTML = html;



//With Template Literals strings (es6)
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${4-2}</li>
</ul>
`;

document.body.innerHTML = html;
*/



/*
let val1 = 4;
let val2 = 8;
let val4;

val4 = val1 >= val2;

console.log(val4);
document.write(val4);
*/

var answer = window.prompt("Type yes, or no");
if (answer)
{
    console.log(answer);
    console.log(answer, "you said true");
} else {
    console.log("you said false");
}

let state = "NY";
let taxrate = 0;

if (state === "FL")
{
    taxrate = 7;
}

console.log(taxrate);