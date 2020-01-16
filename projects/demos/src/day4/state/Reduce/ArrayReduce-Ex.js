'use strict';

 let people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function classifyExperience(employee) {
  let years = employee.yearsExperience;

  if (years <= 1)  return 'NEWBIE';
  if (years <= 5)  return 'AMATEUR';
  if (years <= 10) return 'PRO';

  return 'EXPERT';
}

// TODO: calculate via reducer
let allExperienceSum = 0;

console.log(
  "All experience sum",
    allExperienceSum
);

let departmentExperienceSums = people.reduce((groupedByObject, employee) => {
  // TODO: reduce logic
  return groupedByObject;
}, {});
console.log("Sum each department's collective experience", departmentExperienceSums);

let groupedByExperience = people.reduce((accumulator, current) => {
    let xpClass = classifyExperience(current);
    // TODO: reduce logic
    return accumulator;
  }, {});
console.log("Group employees by experience", groupedByExperience);

let numEmployeesByDept = people.reduce((accumulator, current) => {
    // TODO: reduce logic
    return accumulator;
  }, {});
console.log("Count the number of employees in each department", numEmployeesByDept);

