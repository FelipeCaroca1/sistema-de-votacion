//Objeto para almacenar encuentas
const encuestas = {}

//Función para crear una nueva encuesta 
const crearEncuesta = (pregunta, opciones) => {
    encuestas[pregunta] = {};
    opciones.forEach((opcion) => {
        encuestas[pregunta][opcion] = 0;
    })
};

//Función para votar en una encuesta
const votar = (pregunta, opcion) => {
    if (encuestas[pregunta] && encuestas[pregunta][opcion] !== undefined) {
        encuestas[pregunta][opcion]++;
        console.log(`¡Has votado por "${opcion}" en la encuesta: ${pregunta}!`);
    } else {
        console.log('La encuesta u opción seleccionada no existe.');
    }
    verResultados (pregunta);
};

//Función para ver los resultados de una encuesta
const verResultados = (pregunta) => {
    if (encuestas[pregunta]) {
        console.log(`Resultados de la encuesta: ${pregunta}`);
        for (const opcion in encuestas[pregunta]) {
            console.log(`${opcion}: ${encuestas[pregunta][opcion]} votos`);
        }
    } else {
        console.log('La encuesta seleccionada no existe.');
    }
};

// Crear una nueva encuesta
crearEncuesta('¿Cuál es tu estacion favorita?', ['Otoño', 'Invierno', 'Primavera', 'Verano']);

// Votar en la encuesta
votar('¿Cuál es tu estacion favorita?', 'Otoño');
votar('¿Cuál es tu estacion favorita?', 'Invierno');
votar('¿Cuál es tu estacion favorita?', 'Primavera');
votar('¿Cuál es tu estacion favorita?', 'Verano');
// Ver los resultados de la encuesta
verResultados('¿Cuál es tu estacion favorita?');
