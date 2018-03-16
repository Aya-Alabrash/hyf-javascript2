//1-Write a function that would allow you to do this:

let addSix = function createBase(number) {
    return number + 6;
};
//let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//or
let addSix2 = (number) => {
    return number + 6;
};
//let addSix2 = createBase(6);
console.log(addSix2(10)); // returns 16
console.log(addSix2(21)); // returns 27

/*Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']
and returns an array which only has unique values in it(so it removes the duplicate ones).
Make it a 'smart' algorithm that could do it for every array(only strings / number).
Try to make it as fast as possible!*/

let myArr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function makeUniqArray(myArr) {
    return new Set(myArr);
}
console.log(makeUniqArray(myArr));
