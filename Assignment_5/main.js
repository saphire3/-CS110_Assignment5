const readlineSync = require("readline-sync");
const utils = require("./utils.js");


utils.matrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
utils.sumOfMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
console.log(utils.sumOfEachRow([[1, 2, 3], [5, 6, 7], [1, 10, 5]]));

utils.countWords();
utils.trim();