'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interfaCE = 'Audio";
// const private = 534;





function logger() {
    console.log('My name is Ezekiel');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);







// Function decalration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);




//Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Ezekiel'));
console.log(yearUntilRetirement(1980, 'Toluwalogo'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3))


const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}

const yearUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }


}
console.log(yearUntilRetirement(1991, 'Ezekiel'));
console.log(yearUntilRetirement(1958, 'Toluwalogo'));

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Ezekiel'));
console.log(yearUntilRetirement(1980, 'Toluwalogo'));



// Video Challenge 2
const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Nobody wins ...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



//Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Ezekiel';
console.log(friends);


const firstName = 'Jonas';
const jonas = [firstName, 'Schemdtmann', 2017 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Ezercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations(Methods)
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // it is used to add element to the end of an Array
console.log(friends);

friends.unshift('John');// It is used to add elements to the beginning of an Array
console.log(friends);

//Remove array
friends.pop(); // Remove last element of an Array
console.log(friends);

friends.shift(); // Remove first element of an Array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Ifeoluwa'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Ifeoluwa'));
console.log(friends.includes(23)); // It uses strict cohersion

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}


// Coding Challenge2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);



const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//Array
const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//Objects (In objest its properties are ordered alphabetically)

const jonas = {
    firstNmae: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);


// Dot and Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey) // it wouldnt work

const interestedIn = prompt('What do you need to know about Jonas?  Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


//Challenge
// "Jonas has 3 friends, and his bestfriend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);


//Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    //Any function attach to an objest is called a METHOD
    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah
    // }

    //     calcAge: function () {
    //         // console.log(this);
    //         return 2037 - this.birthYeah
    //     }

    calcAge: function () {
        this.age = 2037 - this.birthYeah
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
// };
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge

console.log(`${jonas.firstName} is a ${jonas.age} years old ${jonas.job}, and he has  ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`);

console.log(jonas.getSummary());


// Challenge 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    caclBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    caclBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}



mark.caclBMI();
john.caclBMI();
console.log(mark.bmi, john.bmi);
console.log(`${mark.fullName} weighs ${mark.mass}kg and is ${mark.height}m tall. ${john.fullName} weighs ${john.mass}kg and is ${john.height}m tall.`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
} 


// LOOP

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

// For Loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    // console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    console.log(`Lifting weighs repetition ${rep} 🏋️‍♂️`);
}


const jonas = [
    'Jonas',
    'Schemedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];



// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
//jonas [5] does not exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and Strings
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


//Looping Backwards

const jonas = [
    'Jonas',
    'Schemedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// 0,1, ..., 4
// 4,3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//Loop inside a Loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- STARTING EXERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}


// WHILE LOOP
// For Loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weighs repetition ${rep} 🏋️‍♂️`);
// }

// Now this is the while loop using the same example above
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/

//Challenge #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

