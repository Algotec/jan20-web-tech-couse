'use strict';

// Sample 1  - Sum array

var data = [15, 3, 20];

var reducer1 = function(accumulator, item) {
  return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer1, initialValue);

console.log("The sum is", total);


// Sample 2  - reduce to object



//see CONSOLE!
var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

var initialValue = {};

var reducer2 = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote]++;
  }

  return tally;
};

var result = votes.reduce(reducer2, initialValue);

console.log('Here:', result);
console.log('Here:', initialValue);

// ------------------- If you need to map and filter, reduce will be MUCH faster: --------------------------------------------------

// Just reducing instead of mapping (not the way to go)
var data = [1, 2, 3];
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);

  return acc;
}, []);
// Mapping
var doubleMapped = data.map(function(item) {
  return item * 2;
});

// Just reducing instead of filtering (not the way to go)
var data2 = [1, 2, 3, 4, 5, 6];
var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }

  return acc;
}, []);

// Filtering
var evenFiltered = data2.filter(function(item) {
  return (item % 2 === 0);
});

 // ------------------------------------------------------------------
 // Dont forget the initial value
 // Dont forget to return the accumulator


// ReduceRight
var data = [1, 2, 3, 4, "5"];
var sum = data.reduceRight(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);

console.log(sum);

// Avg with Reduce:
function reducer(accumulator, value, index, array) {
  var intermediaryValue = accumulator + value;

  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }

  return intermediaryValue;
}

var data = [1, 2, 3, 3, 4, 5, 3, 1];
var mean = data.reduce(reducer, 0);

console.log(mean);


// More about Reducing
var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value);
}, []);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

// Create a disntictive list of stars
var stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);






