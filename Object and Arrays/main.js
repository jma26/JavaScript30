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

    // and think we make a copy:
    // how do we take a copy instead?
    // We will hopefully soon see the object ...spread
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
