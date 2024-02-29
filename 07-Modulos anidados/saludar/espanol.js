// saludar/espanol.js
var configuracion = require("./configuracion.json"); // mandar llamar la configuracion
var saludar = function () {
    console.log(configuracion.espanol); // imprimir el valor configuracion.espanol
};
module.exports = saludar;