'use strict';


// But, If you need to both filter and map, and your data is big: 

var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(function (value) {
  return value % 2 === 0;
}).map(function (value) {
  return value * 2;
});
console.timeEnd('bigData');

console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function (acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
console.timeEnd('bigDataReduce');

console.time('bigDataForIn');
var result = [];
let value;
for (let i = 0; i < bigData.length; i++) {
  value = bigData[i];
  if (value % 2 === 0) {
    result.push(value * 2);
  }

}
console.timeEnd('bigDataForIn');


console.time('bigDataForOf');
var result = [];
for (const value of bigData) {
    if (value % 2 === 0) {
    result.push(value * 2);
  }

}
console.timeEnd('bigDataForOf');

