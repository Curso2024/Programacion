var clientes = {
    nombre: "Roberto",
    apellido: "Buena",
    edad: 27,
    casado: true,
    direccion: {
        calle: "La Calle de La Misión",
        numero: 145,
        ciudad: "Bogota",
        pais: "Colombia",
    },
};

console.log(clientes);
console.log(clientes.nombre);
console.log(clientes[clientes.nombre + clientes.apellido]);

var proveedor = {
    nombre: "Roberto",
    apellido: "Buena",
    edad: 27,
    nombreCompleto: function () {
        return "Mi nombre completo es: " + this.nombre + " " + this.apellido + " " + this.edad;
    },
};

console.log(proveedor.nombreCompleto());