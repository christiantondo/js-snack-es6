const clubs = [

    // Club 1 - Inter
    {
        name: "Inter",
        points: "0",
        penalties: "0",
    },

    // Club 2 - Napoli
    {
        name: "Napoli",
        points: "0",
        penalties: "0",
    },

    // Club 3 - Roma
    {
        name: "Roma",
        points: "0",
        penalties: "0",
    }
];

const clubNames = []

for (let i = 0; i < clubs.length; i++) {
    clubs[i].points = (Math.floor(Math.random() * 99));
    clubs[i].penalties = (Math.floor(Math.random() * 30));
    console.log(clubs[i])
}

