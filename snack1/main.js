// Creo l'array contenente 3 oggetti, in questo caso 3 modelli diversi di bici da corsa
const racingBicycles = [

    // Bici 1: Pinarello, la più pesante
    {
        name: "bike1",
        brand: "Pinarello",
        weight: 7.60,
        color: "black",
        rider: "Dwight",
    },

     // Bici 2: Bianchi, la più leggera
    {
        name: "bike2",
        brand: "Bianchi",
        weight: 6.85,
        color: "white",
        rider: "Micheal",
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

// Creo un ciclo che analizza gli oggetti nell'array e stampo in console 
// il loro peso associato al nome del brand per una maggiore chiarezza

// Creo la variabile lightestBicycle per inserirci la bici più leggera una volta identificata
let lightestBicycle = racingBicycles[0];

// Ciclo per confrontare i pesi delle varie bici
for (let i = 0; i < racingBicycles.length; i++) {
    console.log(`La bici ${racingBicycles[i].brand} pesa:`, racingBicycles[i].weight);
    
    if (racingBicycles[i].weight < lightestBicycle.weight) {
        lightestBicycle = racingBicycles[i];
        console.log("Identificata una bici più leggera:", lightestBicycle.brand);
    } else {
        console.log("Il confronto non ha identificato una bici più leggera, è ancora:", lightestBicycle.brand)
    }
} 
// Stampo la bici più leggera
console.log(`La bici più leggera è la ${lightestBicycle.brand}`)
