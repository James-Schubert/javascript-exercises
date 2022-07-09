 const findTheOldest = function(people) {
 let oldestAge = 0;
 let oldestPerson;
 let curr;
 let age;
 let thisDate = Date.now();
 let thisYear = new Date().getFullYear();
 while (people.length != 0){
    curr = people.pop();
    if (curr.yearOfDeath != undefined) age = curr.yearOfDeath-curr.yearOfBirth;
    else age = thisYear - curr.yearOfBirth;
    //console.log(`${curr.name}: age ${age}\n`);
    if (age >= oldestAge){
        oldestPerson = curr;
        oldestAge = age;
    }
 }
 return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
