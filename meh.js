const questionario = [];
 
class crearEncuesta {
    constructor(question, options) {
        this.question = question;
        this.options = options;
    }
}
 
let cantidadEncuestas = parseInt(prompt(`Ingrese el número de preguntas a responder`), 10);
 
if (cantidadEncuestas >= 8) {
    for (let i = 0; i < cantidadEncuestas; i++) {
        let question = prompt(`Por favor, ingrese la pregunta:`);
        let options = prompt(`Por favor, ingrese sus opciones, separadas por comas:`);
        let nuevaEncuesta = new crearEncuesta(question, options);
        questionario.push(nuevaEncuesta);
    }
    console.log("Comencemos", questionario);
} else {
    console.log("Lo sentimos, el número mínimo de preguntas es 8");
}
 
var respuestas = [];
 
function votar(questionario) {
    console.log("Bienvenido al cuestionario, por favor siga estas instrucciones");
    for (let i = 0; i < questionario.length; i++) {
        console.log(`La pregunta es: ${questionario[i].question} y las opciones son: ${questionario[i].options}`);
        let respuesta;
        let respuestaValida = false;
 
        while (!respuestaValida) {
            respuesta = prompt(`Elija su respuesta a la pregunta: ${questionario[i].question} (opciones: ${questionario[i].options})`);
            if (questionario[i].options.includes(respuesta)) {
                respuestaValida = true;
                respuestas.push(respuesta);
                console.log(`Su respuesta a la pregunta: ${questionario[i].question} es: ${respuesta}`);
            } else {
                console.log(`Respuesta inválida. Por favor, elija una de las siguientes opciones: ${questionario[i].options}`);
            }
        }
    }
    console.log("GRACIAS POR SU PARTICIPACIÓN");
}
votar(questionario)