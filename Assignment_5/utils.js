

const mat1 = [
    ['a1', 'a2'],
    ['a3', 'a4']
];

const mat2 = [
    ['b1', 'b2'],
    ['b3', 'b4']
];



function matrixProduct(mat1, mat2) {
    let result = [];
    let line1 = [];
    let line2 = [];

    let value1 = mat1[0][0] * mat2[0][0] + mat1[0][1] * mat2[1][0];
    let value2 = mat1[0][0] * mat2[0][1] + mat1[0][1] * mat2[1][1];
    let value3 = mat1[1][0] * mat2[0][0] + mat1[1][1] * mat2[1][0];
    let value4 = mat1[1][0] * mat2[0][1] + mat1[1][1] * mat2[1][1];

    line1.push(value1, value2);
    line2.push(value3, value4);

    result.push(line1, line2);

    console.log(result);

}

//matrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]]);

function sumOfMatrices(mat1, mat2) {
    let sum = [];
    let firstLine = [];
    let secondLine = [];

    let sum1 = (mat1[0][0] + mat2[0][0]) * (mat1[0][1] + mat2[0][1]);
    let sum2 = (mat1[1][0] + mat2[1][0]) * (mat1[1][1] + mat2[1][1]);

    firstLine.push(sum1);
    secondLine.push(sum2);
    sum.push(firstLine, secondLine);

    console.log(sum);


}

//sumOfMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]);

function _sumOfArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function sumOfEachRow(mat) {
    let result = [];

    for (let i = 0; i < mat.length; i++) {
        result[i] = _sumOfArray(mat[i]);
    }

    return result;
}

//console.log(sumOfEachRow([[1, 2, 3], [5, 6, 7], [1, 10, 5]]));

const prompt = require('readline-sync');

function countWords() {
    let count = 0;
    const sentence = prompt.question("     Write   your  text to count words\n");

    let metLetter = false;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ') {
            if (metLetter)
                count++;

            metLetter = false;
        }
        else {
            metLetter = true;
        }
    }

    if (metLetter)
        count++;


    console.log("The number of words is: " + count);

}

//countWords();




function trim() {
    let result = '';
    const sentence = prompt.question("Write your text to trim\n");

    let startIndex = 0;
    let endIndex = sentence.length - 1;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ')
            startIndex = i;
        else break;
    }

    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] == '')
            endIndex = i;
        else break;
    }

    result = sentence.substring(startIndex, endIndex + 1)
    console.log("your trimmed text is: " + result);
    return result;
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    countWords,
    trim
};