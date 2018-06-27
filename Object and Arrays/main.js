 // start with strings, numbers and booleans
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
   
    // To make a shallow copy, use slice
    const team2 = players.slice();
    // OR using concat
    const team3 = [].concat(players);
    // OR Es6 spread operator
    const team4 = [...players];
    // OR array.from
    const team5 = Array.from(players);

    // Four ways to make a copy!!! INSANE!

    const person = {
      name: 'Wes Bos',
      age: 80
    };

    const jesse = {
        name: 'jesse',
        age: 99,
        social: {
            twitter: '@yay',
            facebook: '@nofacebook'
        } 
    };

    // What if we want to make a copy of an object?
    // We use Object.assign, optional third argument is to add additional properties to the object
    // ONLY problem, Object.assign makes a shallow copy and ONE level deep. 
    // Will not work for deep levels
    const captain2 = Object.assign({}, person, { number: 99 });

    // To fix the shallow copy, we can parse and stringify it
    const captain3 = JSON.parse(JSON.stringify(jesse));

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
