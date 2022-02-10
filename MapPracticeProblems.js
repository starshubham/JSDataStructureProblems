/*            ### Map Practice Problems ###
Map:- Dictionary/Map are very useful data structures Dictionary are key value
map similar to HaspMap in Java or the one in python 
*/

/* 1. Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times
*/
console.log("\n**** Problem No-1 ****")
let getDiceRoll = () => Math.floor(Math.random()*6)+1;

let diceRollFunctions = () =>
{
    let limit = 10, count = 0;
    //map to store diceroll and count
    let diceMap = new Map();
    while(count < limit)
    {
        let diceRoll = getDiceRoll();
        let c = 1;
        //check whether map already has the element
        if(diceMap.has(diceRoll))
            c = diceMap.get(diceRoll)+1
        //set the map with diceroll and count of occurance
        diceMap.set(diceRoll, c);
        if(c > count)
            count = c;
    }
    console.log(diceMap);
    //initialising max and min, keys
    let max = 0, min = 11, maxKey, minkey;
    for(let [key, value] of diceMap)
    {
        if(value > max)
        {
            max = value;
            maxKey = key;
        }
        if(value < min)
        {
            min=value;
            minkey=key;
        }
    }
    console.log('Max Key = ' + maxKey + ',\n' + 'Min Key = ' + minkey);
}
diceRollFunctions();


/* 2. Write a Program to generate a birth month of 50 individuals between the year 92 & 93. 
Find all the individuals having birthdays in the same month. Store it to finally print. */
console.log("\n**** Problem No-2 ****")
let getBirthmonthNumber = () => Math.floor(Math.random()*12)+1;
let getBdayMonth = () =>
{
    //map to store month and individuals having bday on that month
    let bDayMap = new Map();
    for(let i=0; i<50; i++)
    {
        let month = getBirthmonthNumber();
        let personsHavingSameBdayMonth = '';
        //check whether it already has values
        if(bDayMap.has(month))
            personsHavingSameBdayMonth = bDayMap.get(month);
        //appending old value with new one
        personsHavingSameBdayMonth = personsHavingSameBdayMonth + (`${i},`);
        //seeting it to dictionary
        bDayMap.set(month, personsHavingSameBdayMonth);
    }
    console.log(bDayMap);
}
getBdayMonth();