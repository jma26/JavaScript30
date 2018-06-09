const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() Is at least one person 19 or older?
(function olderThan19() {
    let year = new Date().getFullYear();
    people.some(function(age) {
        if (year - age.year >= 19) {
            console.log(true);
            return true;
        }
    });
})();

// Array.prototype.every() Is everyone 19 or older?
const allOver19 = people.every(function(person) {
    return new Date().getFullYear() - person.year >= 19;
});
console.log(allOver19);