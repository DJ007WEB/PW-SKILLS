// set always store unique elements

const emptySet = new Set();

// console.log(emptySet.size);

const myArr = [1, 2, 3, 4];

const newSet = new Set(myArr);

console.log(newSet);

newSet.add(9);

console.log(newSet);

console.log(newSet.has(9));

// set difference

function setDiffer(setA, setB) {
  return new Set([...setA].filter((e) => !setB.has(e)));
}
