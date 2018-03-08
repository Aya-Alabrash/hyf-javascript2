//1
let numbers = [1, 2, 3, 4];

/*let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]
*/

console.log((numbers.filter(num => num % 2 !== 0)).map(res => res * 2));

//2
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];
/*
let tasks = monday.concat(tuesday);
console.log(tasks);
*/
let tasks = [monday, tuesday];

let formated_result = tasks.reduce((temp, current) => {
    //Collect two days' worth of tasks.
    return temp.concat(current);
}).map((task) => {
    //Convert the task durations to hours, instead of minutes
    return (task.duration / 60);
}).filter((duration) => {
    //Filter out everything that took two hours or more
    return duration < 2;
}).map((rate) => {
    //Multiply the each duration by a per-hour rate for billing
    return rate * 20;
}).reduce((temp, current) => {
    //sum it all up
    return [(+temp) + (+current)];
}).map((euro) => {
    //Output a formatted Euro amount
    return "€ " + euro.toFixed(2);
});
console.log("Maartje make at all " + formated_result);

//Other way

//Collect two days' worth of tasks.
let tasks2 = [monday, tuesday];
let connect = tasks2.reduce((temp, current) => {
    return temp.concat(current);
});
console.log(connect);

//OR
let concat = monday.concat(tuesday)
//Convert the task durations to hours, instead of minutes
let hours = concat.map((task) => {
    return (task.duration / 60);
});

//Filter out everything that took two hours or more
let hours_filtered = hours.filter((duration) => {
    return duration < 2;
});

//Multiply the each duration by a per-hour rate for billing
let rate_multiplied = hours_filtered.map((rate) => {
    return rate * 20;
});

//sum it all up
let sum = 0;
rate_multiplied.forEach((fee) => {
    sum += fee
});

//Output a formatted Euro amount
let formatted_amount = "€ " + sum.toFixed(2);

console.log("Maartje make at all " + formatted_amount);
