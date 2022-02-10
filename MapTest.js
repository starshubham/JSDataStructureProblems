//filter
var array=[-1,0,2,-2,5]

function GetPositiveNumber(number){
    return number>0;
}

var filterarr=array.filter(GetPositiveNumber)

console.log("---filter----------")
console.log(filterarr);
//Map

var mapArray=[4,9,16]

function SqrtMethod(number){
    return Math.sqrt(number)
}

var newMap=mapArray.map(SqrtMethod)

console.log("-----Map------------")
console.log(newMap)

//every
var everyTest=[11,12,16]

var booloutput1=everyTest.every(everyfunc);

function everyfunc(number)
{
    return number>10
}

console.log("----every-----")
console.log(booloutput1)
//some

function someFunc(number){
    return number>15
}

var booloutput2=everyTest.some(someFunc)

console.log("----some-----")
console.log(booloutput2)

//from
var text="hello  world" 

var fromarr=Array.from(text)

console.log("----from-----------")
console.log(fromarr)
//find
const ages = [3, 10, 19, 20];


function checkAge(age) {
 return age > 18;
}

var output= ages.find(checkAge);
console.log("----find-----------")
console.log(output)

//map

var first=new Map([[1,'one'],[2,'two'],[3,'three']]) //[[key,value],[]]
var second=new Map([[1,'Raj'],[4,'four']])
var merge=new Map([...first,...second,[1,'ashok']]) 

console.log(merge)