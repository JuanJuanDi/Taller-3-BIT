function calcularPromedio(notas) {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

function guardarNotas() {
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");

    let materias = [];
    let notas = [];

    while (true) {
        let materia = prompt("Ingrese el nombre de la materia (o escriba 'fin' para terminar):");
        if (materia.toLowerCase() === "fin") {
            break;
        }
        let nota = parseFloat(prompt("Ingrese la nota correspondiente a " + materia + ":"));
        materias.push(materia); 
        notas.push(nota);
    }

    let alumno = {
        nombre: nombreAlumno,
        notasPorMateria: {},
        promedio: 0
    };

    for (let i = 0; i < materias.length; i++) {
        let materia = materias[i];
        let nota = notas[i];
        alumno.notasPorMateria[materia] = nota;
    }

    alumno.promedio = calcularPromedio(notas);

    return alumno;
}

function agregarOtroEstudiante() {
    let respuesta = prompt("¿Desea agregar información de otro estudiante? (s/n)").toLowerCase();
    return respuesta === "s";
}

let estudiantes = [];

do {
    let nuevoEstudiante = guardarNotas();
    estudiantes.push(nuevoEstudiante);
} while (agregarOtroEstudiante());

console.log(estudiantes);

