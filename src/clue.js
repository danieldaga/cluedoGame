    // ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    },
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    },
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    },
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    },
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    },
    {
        firstName: 'dani',
        lastName: 'García',
        occupation: 'frontend developer',
        age: 29,
        description:'asd',
        image: 'img',
        color: 'black'
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'salom',
        weight: 30
    },
    {
        name: 'salom',
        weight: 30
    }, 
    {
        name: 'salom',
        weight: 30
    },
    {
        name: 'salom',
        weight: 30
    },
    {
        name: 'salom',
        weight: 30
    },
    {
        name: 'salom',
        weight: 30
    }, {
        name: 'salom',
        weight: 30
    },
    {
        name: 'salom',
        weight: 30
    }, {
        name: 'salom',
        weight: 30
    }

];

// Rooms Array

const roomsArray = [
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'salom'},
    {name: 'bedroom'}

];


// ITERATION 2

function selectRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function pickMystery() {
    let suspect = selectRandom(suspectsArray)
    let weapon = selectRandom(weaponsArray)
    let room = selectRandom(roomsArray)

    return {suspect, weapon, room}
}


// ITERATION 3

function revealMystery({suspect,weapon,room}) {
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
}
