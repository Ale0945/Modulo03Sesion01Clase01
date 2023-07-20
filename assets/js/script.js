//arreglo simple
/* var colaboradores = [
    "Juan",
    "Pedro",
    "Francisco"
] */

var colaboradores = [
    {
        rut: "12.345.678-9",
        nombre: "Juan Fica",
        activo: true,
        salario_hora:5150.65,
        horas_trabajadas: 38
    },
    {
        rut: "23.345.678-9",
        nombre: "Andrea Pérez",
        activo: true,
        salario_hora:6150.85,
        horas_trabajadas: 38
    },
    {
        rut: "15.345.678-9",
        nombre: "Francisco Gonzáles",
        activo: false,
        salario_hora:4850.85,
        horas_trabajadas: 0
    }
]
for (let index = 0; index < colaboradores.length; index++) {
    var colaborador = colaboradores[index];
    console.log(colaborador)
}

