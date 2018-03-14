//0
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000);

//1
function outerFunction(func) {
    return func;
}

function innerFunction() {
    console.log('Hello World!');
}

outerFunction(innerFunction());

//another example
function foo(message) {
    let func = new Function(message);
    func();
}
foo("console.log('Hello')");

// another example
function favAnimals(animal1, animal2) {
    console.log("My favorite animals are: " + animal1 + " and " + animal2);
}
function myLovelyAnimals(callback, args) {
    callback.apply(this, args);
}

myLovelyAnimals(favAnimals, ["Cats", "Dogs"]);

//2
function threeCallback(num) {
    console.log(num + ' is divide by three');
}

function fiveCallback(num) {
    console.log(num + ' is divide by five');
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let myArr = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            threeCallback(i);
            fiveCallback(i);
            myArr.push(i);
        }
        else if (i % 3 == 0) {
            threeCallback(i);
            myArr.push(i);
        }
        else if (i % 5 == 0) {
            fiveCallback(i);
            myArr.push(i);
        }
        else {
            myArr.push(i);
        }
    }
    return myArr;
}

let myRes = threeFive(10, 15, threeCallback, fiveCallback);
console.log(myRes);

//3
//3.1 A for loop
function repeatStringNumTimes(str, num) {
    let repeat = "";
    if (num === 0) return "";
    for (let i = 1; i <= num; i++) {
        repeat = repeat.concat(str + ' ');
    }
    return repeat;
}
let res = repeatStringNumTimes('Hi', 5);
console.log(res);

//3.2 A while loop.
function repeatStringNumTimesUsingWhile(str, num) {
    let repeat = "";
    if (num === 0) return "";
    let i = 1;
    while (i <= num) {
        repeat = repeat.concat(str + ' ');
        i++;
    }
    return repeat;
}
let res2 = repeatStringNumTimesUsingWhile('wait', 5);
console.log(res2);

//3.3 A do loop.
function repeatStringNumTimesUsingDo(str, num) {
    let repeat = "";
    if (num === 0) return "";
    let i = 1;
    do {
        repeat = repeat.concat(str + ' ');
        i++;
    } while (i <= num);
    return repeat;
}
let res3 = repeatStringNumTimesUsingDo('Bye', 5);
console.log(res3);

//4
var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

var MotorBike = function () {
    this.wheels = 2;
    this.engines = 2;
    this.seats = 2;
};

console.log(new MotorBike());
console.log(new Car());

//5
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1], [2], [3]]));

//6
let arr2d = [[1, 2], [3, 4], [5, 6]];

function show2DArray(arr2d) {
    let str = "";
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
            str += arr2d[i][j] + " ";
        }
        console.log(str);
        str = "";
    }
    return str;
}
console.log(show2DArray(arr2d));

//or
function showArray(arr2d) {
    let str = "";
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
            str += arr2d[i][j] + " ";
        }
    }
    return str;
}
console.log(showArray(arr2d));

//7
let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

/*
In JavaScript 
Primitive type variable like string, number are always pass as pass by value.

Array and Object is passed by reference or by value based on:
if you are changing value of that Object or array with new Object or Array
then it is pass by Value.

if you are changing a property value of an object or array then it is pass by Reference.
*/