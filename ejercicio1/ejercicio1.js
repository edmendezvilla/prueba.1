'use strict'


function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarP = function() {
        if (this.promedio >= 70) {
            return "aprobado";
        } else { 
            return "reprobado";
        }
    };
    function obtenerUsuario() {
        let pos = studentOne.correo.indexOf("@");
        let usuario = studentOne.correo.slice(0, pos);
        alert(usuario);
    }
}

let studentOne = new Student("EmendezVilla", "edmendez@gmail.com", 70);

alert(studentOne.validarP());


obtenerUsuario();

