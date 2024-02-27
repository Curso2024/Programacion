// Metodo Nuevo
class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
    DecirEdad() {
        console.log("Tengo " + this.edad + " años");
    }
    Caminar() {
        console.log("Estoy caminando!");
    }
    Dormir() {
        console.log("Me fui a dormir!");
    }
}


//Metodo Viejo
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.Saludar = function () {
    console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
};

Persona.prototype.DecirEdad = function () {
    console.log("Tengo " + this.edad + " años");
};

Persona.prototype.Caminar = function () {
    console.log("Estoy caminando!");
};

Persona.prototype.Dormir = function () {
    console.log("Me fui a dormir!");
};




var Roberto = new Persona("Roberto", "Buena", 27);
var Julen = new Persona("Julen","aaaa",111);
Roberto.Saludar();
Roberto.DecirEdad();
Roberto.Caminar();
Roberto.Dormir();
Julen.Saludar();
