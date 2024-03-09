class Animal {
    #hambre; // <= propiedad privada DEFINIDA, no queremos que se pueda ver desde fuera
    constructor(estado = 'feliz', hambre = false) {
        this.estado = estado;
        this.#hambre = hambre;
    };
    
    hablar() {
        console.log(`Soy un animal ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho!'}`);
    }
};

const aml = new Animal();
aml.hablar(); // Soy un animal feliz satisfecho!

// Si es true, animal feliz con mucha hambre
// Si es false, animal feliz satisfecho