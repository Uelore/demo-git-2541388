"use strict";

let myName = "Andy";
console.log(`Hello World! Mon nom est ${myName}`);

function sumBetweenValues(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += i;
    }
    return sum;
}

let sum5And10 = sumBetweenValues(5, 10);
console.log(`${sum5And10}`);

let sumResultDiv = document.getElementById("sum5And10");
sumResultDiv.innerText = sum5And10;
sumResultDiv.classList.add("red");
