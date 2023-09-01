// map remembers the insertion order



let map = new Map();



console.log(map.size);


let arr = [[1, 'Mithun'] ,[2, 'Alka'] ,[3, 'Prabir'] ,[4, 'Shivam'] ,[5, 'Vinay']];


arr.map((e) => map.set(e[0] , e[1]));



console.log(map);