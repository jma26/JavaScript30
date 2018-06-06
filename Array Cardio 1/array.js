const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500s
(function inventorsIn1950s() {
    let count = 0;
    let Bornin1950s = inventors.filter((inventor) => {
        if ((inventor.year >= 1500 && inventor.year < 1600)) {
            return true;
        } else {
            return false;
        }
    });
    console.table(Bornin1950s);
})();

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
(function inventorsLastName() {
    let fullnames = inventors.map((inventor) => {
        return `${inventor.first} ${inventor.last}`;
    })
    console.table(fullnames);
})();

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
(function birthdateSort() {
    let birthdaySort = inventors.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
    console.table(birthdaySort);
})();

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
(function totalYearsAlive() {
    let sum = inventors.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.passed - currentValue.year);
    }, 0);
    console.log(`${sum} total years lived by all inventors`);
})();

// 5. Sort the inventors by years lived
(function yearsAlive() {
    let oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        if (lastGuy > nextGuy) {
            return -1;
        } else {
            return 1;
        }
    });
    console.table(oldest);
})();

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
(function deLinks() {
    let category = document.querySelector('.mw-category');
    let links = Array.from(category.querySelectorAll('a'));
    let de = links.map(link => {
        link.textContent
    }).filter(streetname => {
        streetname.includes('de');
    });
    console.table(de);
})();