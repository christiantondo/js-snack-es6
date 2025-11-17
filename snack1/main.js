console.log("JS ok - Snack 1")

// Creo l'array contenente 3 oggetti, in questo caso 3 modelli diversi di bici da corsa
const racingBicycles = [

    // Bici 1: Bianchi, la più leggera
    {
        name: "bike1",
        brand: "Bianchi",
        weight: 6.85,
        color: "white",
        rider: "Micheal",
    },

    // Bici 2: Pinarello, la più pesante
    {
        name: "bike2",
        brand: "Pinarello",
        weight: 7.60,
        color: "black",
        rider: "Dwight",
    },

    // Bici 3: Trek, l'intermedia
    {
        name: "bike3",
        brand: "Trek",
        weight: 7.52,
        color: "red",
        rider: "Jim",
    }
];

// Creo un ciclo che analizza gli oggetti nell'array e stampa in console il loro peso
for (let i = 0; i < racingBicycles.length; i++) {
    const bicyclesWeight = (racingBicycles[i].weight);
    console.log("Le bici nell'array pesano:", bicyclesWeight);
}
