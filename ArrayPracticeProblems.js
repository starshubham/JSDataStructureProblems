/* ### Array Practice Problems ### */

/* 1. Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */

function getThreeDigitRandomNumber() {
    return Math.floor((Math.random() * 900) + 100);
}
//initialising a array
let elementArray = new Array();
//function to find second largest and second smallesr
let findLargestAndSmallest = () => {
    //getting arrray elements
    for (let i = 0; i < 10; i++)
        elementArray[i] = getThreeDigitRandomNumber();
    console.log("The Ten 3 digits numbers are: " + elementArray.toString());
    //setting both values to min value
    let firstLargest = 0, secondlargest = 0;
    //setting both values to max value
    let firstSmallest = 1000, secondSmallest = 1000;
    for (let i = 0; i < elementArray.length; i++) {
        //checking array element is greater than first largest
        if (elementArray[i] > firstLargest) {
            //assign first largest to second largest and array element to first largest
            secondlargest = firstLargest;
            firstLargest = elementArray[i];
        }
        //to check if second largest lies b/w first largest and second largest
        else if (elementArray[i] > secondlargest && elementArray[i] != firstLargest)
            secondlargest = elementArray[i];
    }
    for (let i = 0; i < elementArray.length; i++) {
        //checking array element is lesser than first largest
        if (elementArray[i] < firstSmallest) {
            //assign first smallest to second smallest and array element to first smallest
            secondSmallest = firstSmallest;
            firstSmallest = elementArray[i];
        }
        //to check if second smallest lies b/w first smallest and second smallest
        else if (elementArray[i] < secondSmallest && elementArray[i] != firstSmallest)
            secondSmallest = elementArray[i];
    }
    console.log(secondSmallest != 1000 ? `Second smallest = ${secondSmallest}` : `There is no second smallest`);
    console.log(secondlargest != 0 ? `Second largest = ${secondlargest}` : `There is no second largest`);

}
findLargestAndSmallest();


// 2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
console.log("\n**** Problem No-2 ****")
let numArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
}
console.log("Sorted Array are... ");
console.log(numArray.sort());
console.log("Second largest after sorting : " + numArray.slice(-2, -1));
console.log("Second smallest after sorting : " + numArray[1]);


let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for (let element of numArray) {
    maxNum = Math.max(element, maxNum);
    minNum = Math.min(element, minNum);
}
for (let element of numArray) {
    max2 = (element < maxNum && element > max2) ? element : max2;
    min2 = (element > minNum && element < min2) ? element : min2;
}
console.log("Second largest without sorting : " + max2);
console.log("Second smallest without sorting : " + min2);


/* 3. Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output. */
console.log("\n**** Problem No-3 ****")
function getPrimeFactors(number) {
    let array = new Array();
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            let count = 0;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) count++;
            }
            if (count == 0 && i > 1) array.push(i);
        }
    }
    return array;
}

let number = Math.floor(Math.random() * 1000);
console.log("Prime Factors of " + number + " are : ");
console.log(getPrimeFactors(number));