"use strict";
const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};
sumArray([1, 2, 3, 4, 5]);
