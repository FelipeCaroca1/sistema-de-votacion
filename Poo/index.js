//Almacenar preguntas, opciones y votos en la clase encuesta
class Encuesta {
    constructor(question, options) {
        this.question = question;
        this.options = options;
        this.votes = {};
    }
//Almacena votos mostrando como resultado en que opcion se almacenó
    votar(index_option) {
        if (index_option < this.options.length) {

            if (this.votes[index_option] === undefined) {
                this.votes[index_option] = 0;
            }

            this.votes[index_option]++;
            console.log(`¡Has votado por "${this.options[index_option]}" en la encuesta: ${this.question}!`);
        } else {
            console.log('La opción seleccionada no existe.');
        }
        this.verResultados();
    }
//Funcion para mostrar los resultados de la clase encuesta
    verResultados() {
        console.log(`Resultados de la encuesta: ${this.question}`);
        this.options.forEach((opcion, index) => {
            console.log(`    ${index} ${opcion}: ${this.votes[index] ?? 0} votos`);
        })
    }
}
//Almacena cantidades "x" de la clase encuesta
class Encuestas {
    constructor() {
        this.encuestas = []
    }

    crearEncuesta(arg_pregunta, arg_opciones) {
        this.encuestas.push(new Encuesta(arg_pregunta, arg_opciones));
    };
    verResultados(index) {
        if (index) {
            this.encuestas[index].verResultados();
        } else {
            this.encuestas.forEach(encuesta => {
                encuesta.verResultados();
            })  
        }
    }
    votar(index_pregunta, index_opcion) {
        const encuesta = this.encuestas[index_pregunta];
        if (encuesta) {
            encuesta.votar(index_opcion);
        } else {
            console.log('Esta encuesta no existe')
        }
    };
//Función para mostrar las diferentes encuestas y resultados
    listarEncuestas() {
        this.encuestas.forEach((encuesta, index) => {
            console.log(`${index}: ${encuesta.question}`)

            encuesta.verResultados();

        })
    }
}
//Usar "encuestas." para usar las diferentes funciones del codigo
const encuestas = new Encuestas()

encuestas.crearEncuesta('¿Cuál es tu estacion favorita?', ['Otoño', 'Invierno', 'Primavera', 'Verano']);
encuestas.crearEncuesta('¿Cuál es tu raza de perro favorita?', ['Chihuahua', 'Quiltro', 'Labrador', 'Salchicha']);
encuestas.crearEncuesta('¿Cuál de estos generos de peliculas te gusta más ?', ['Drama', 'Acción', 'Fantasía', 'Comedia']);
encuestas.crearEncuesta('¿Cuál disciplina de baile te gusta más?', ['Clásica', 'Ballroom', 'Danza contemporanea', 'Danza urbana']);
encuestas.crearEncuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
encuestas.crearEncuesta('¿Cuál es tu signo del zodiaco?', ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo','Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']);
encuestas.crearEncuesta('¿Cuál es tu comida favorita?', ['Casera Chilena', 'Peruana', 'China', 'Francesa', 'Italiana', 'Japonesa', 'Comida Rápida']);
encuestas.crearEncuesta('¿Fumas?', ['Si', 'No', 'fumar qué?']);

encuestas.votar(0, 1)
encuestas.votar(0, 2)


