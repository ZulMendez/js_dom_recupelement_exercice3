// 1
let derniereD = document.getElementsByTagName('div')[2];
let enfant = derniereD.firstElementChild;
console.log(enfant);

// 2
let enfant2 = derniereD.lastElementChild;
console.log(enfant2);

// 3
let elem = derniereD.getElementsByTagName('p')[0];
let elemI = elem.firstElementChild;
console.log(elemI);

// 4
let elem2 = derniereD.getElementsByTagName('p')[1];
let elemI2 = elem2.firstElementChild;
console.log(elemI2);

// let p = dernierD.lastElementChild;
// console.log(p.firstElementChild);

// 5
let parent1 = elemI.parentElement;
console.log(parent1);

// 6
let parent2 = elemI2.parentNode;
console.log(parent2);

// 7

console.log(enfant.nextElementSibling);