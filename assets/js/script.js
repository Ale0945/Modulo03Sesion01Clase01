//arreglo simple
/* var colaboradores = [
    "Juan",
    "Pedro",
    "Francisco"
] */

// var colaboradores = [
//     {
//         rut: "12.345.678-9",
//         nombre: "Juan Fica",
//         activo: true,
//         salario_hora:5150.65,
//         horas_trabajadas: 38
//     },
//     {
//         rut: "23.345.678-9",
//         nombre: "Andrea Pérez",
//         activo: true,
//         salario_hora:6150.85,
//         horas_trabajadas: 38
//     },
//     {
//         rut: "15.345.678-9",
//         nombre: "Francisco Gonzáles",
//         activo: false,
//         salario_hora:4850.85,
//         horas_trabajadas: 0
//     }
// ]
// for (let index = 0; index < colaboradores.length; index++) {
//     var colaborador = colaboradores[index];
//     console.log("nombre",colaborador.nombre, typeof colaborador.nombre);
//     console.log("salario hora",colaborador["salario_hora"], typeof colaborador.salario_hora);
//     console.log("Activo",colaborador.activo, typeof colaborador.activols);
//     console.log("-------------------------")

// }
// console.log(colaboradores)


//Definición de un arreglo vacio
var colaboradores = []


// QuerySelector la utilizamos para apuntar a un elemento con selectores iguales a los de CSS
var inputRut = document.querySelector("#txt-rut")
var inputNombre = document.querySelector("#txt-nombre")
var inputSalarioHora = document.querySelector("#txt-salario-hora")
var inputHorasTrabajadas = document.querySelector("#txt-horas-trabajadas")

// getElementById la utilizamos para apuntar a un elemento con ssu Id
var checkActivo = document.getElementById("check-activo")

// Definición de función con retorno para calcular salarios
function calcularSalario(salario_hora, horas_trabajadas){
    var salario = salario_hora * horas_trabajadas
    return salario
}

//Deficnición de función para agregar un colaborador al arreglo
function agregarColaborador(rut, nombre, salario, horas, activo) {
    //Función push incorpora un nuevo elemento al arreglo y lo ubica en la última posición
    colaboradores.push({
        rut: rut,
        nombre: nombre,
        salrio_hora: salario,
        horas_trabajadas: horas,
        activo: activo,
        salario_neto: calcularSalario(salario, horas) // Llamado de la función con retorno para calcular salario

    })
    //Mostrar valor actual del arreglo de colaboradores (Lo muestra por consola del navegador)
    console.log(colaboradores)
}
//Captura del evento submit del formulario, con este evento podremos llamar a la función que agrega un nuevo colaborador al arreglo principal
document.getElementById("formulario").addEventListener("submit", function(ev){
    //prevenDefaul() es una función que detiene el envío de datos del formulario (Evento submit)
    ev.preventDefault();
    //Invocar función que agrega un colaborador al arreglo
    agregarColaborador(inputRut.value, inputNombre.value, inputSalarioHora.value, inputHorasTrabajadas.value, checkActivo.checked)
    //Líneas para borrar los valores de los imput del formulario
    inputRut.value = ""
    inputNombre.value = ""
    inputSalarioHora.value = ""
    inputHorasTrabajadas.value = ""
    checkActivo.checked = false
})