

const pattern = 'pw';

const flag = 'gi';

const regOne = new RegExp(pattern,flag);


const regTwo = /pw/gi;

const strTocheck = 'pw is growing at a rapid speed and recently they are working on pwskills to create skills based pw content.';


const result = regOne.test(strTocheck);

const result2 = regTwo.test(strTocheck);

console.log(result);

console.log(result2);


const anotherResult = strTocheck.match(regOne);

const anotherResult2 = strTocheck.match(regTwo);


console.log(anotherResult);
console.log(anotherResult2);