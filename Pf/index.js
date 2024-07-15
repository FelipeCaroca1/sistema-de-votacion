//Objeto para almacenar encuentas
const encuestas = []

//Función para crear una nueva encuesta
// *arg: argumento
const crearEncuesta = (arg_pregunta, arg_opciones) => {
    encuestas.push({
        pregunta: arg_pregunta,
        opciones: arg_opciones,
        votos: {},
        //
    });
};

//Función para votar en una encuesta
const votar = (index_pregunta, index_opcion) => {
    const encuesta = encuestas[index_pregunta];
    if (encuesta && index_opcion < encuesta.opciones.length) {

        if (encuesta.votos[index_opcion] === undefined) {
            encuesta.votos[index_opcion] = 0;
        }

        encuesta.votos[index_opcion]++;
        console.log(`¡Has votado por "${encuesta.opciones[index_opcion]}" en la encuesta: ${encuesta.pregunta}!`);
    } else {
        console.log('La encuesta u opción seleccionada no existe.');
    }
    verResultados(index_pregunta);
};

//Función para ver los resultados de una encuesta
const verResultados = (index_pregunta) => {
    if (encuestas[index_pregunta]) {
        console.log(`Resultados de la encuesta: ${encuestas[index_pregunta].pregunta}`);
        encuestas[index_pregunta].opciones.forEach((opcion, index) => {
            console.log(`    ${opcion}: ${encuestas[index_pregunta].votos[index] ?? 0} votos`);
        })
    } else {
        console.log('La encuesta seleccionada no existe.');
    }
};

// lista las encuestas
const listarEncuestas = () => {
    encuestas.forEach((encuesta, index) => {
        console.log(`${index}: ${encuesta.pregunta}`)

        encuesta.opciones.forEach((opcion, index_opcion) => {
            console.log(`${index_opcion}:   ${opcion}`)
        })

    })
}

// Crear una nueva encuesta
crearEncuesta('¿Cuál es tu estacion favorita?', ['Otoño', 'Invierno', 'Primavera', 'Verano']);
crearEncuesta('¿Cuál es tu raza de perro favorita?', ['Chihuahua', 'Quiltro', 'Labrador', 'Salchicha']);
crearEncuesta('¿Cuál de estos generos de peliculas te gusta más ?', ['Drama', 'Acción', 'Fantasía', 'Comedia']);
crearEncuesta('¿Cuál disciplina de baile te gusta más?', ['Clásica', 'Ballroom', 'Danza contemporanea', 'Danza urbana']);
crearEncuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
crearEncuesta('¿Cuál es tu signo del zodiaco?', ['Aries','Tauro','Géminis','Cáncer', 'Leo', 'Virgo','Libra', 'Escorpio', 'Sagitario','Capricornio','Acuario','Piscis']);
crearEncuesta('¿Cuál es tu comida favorita?', ['Casera Chilena', 'Peruana', 'China', 'Francesa', 'Italiana', 'Japonesa', 'Comida Rápida']);
crearEncuesta('¿Fumas?', ['Si', 'No', 'fumar qué?']);

// Votar en la encuesta
votar(0, 0);
votar(0, 1);
votar(0, 2);
votar(0, 3);
votar(0, 4);
// Ver los resultados de la encuesta
verResultados(0);
