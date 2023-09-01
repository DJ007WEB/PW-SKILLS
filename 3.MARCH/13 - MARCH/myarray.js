

const oneArray = [1,2,3,4];

const twoArray = [5,6,7,8];


const threeArray = [...oneArray,...twoArray];


// console.log(threeArray);


function manyArguments() {
   const finalArr =  Array.from(arguments).map((e) => e);
   console.log(finalArr);
}


// manyArguments(1,2,3);

function manyArgumentsV2(...args) {
    const finalArr = args.map((e) => e);
    console.log(finalArr);
}


// manyArgumentsV2(5,6,7,8,9,10,15)