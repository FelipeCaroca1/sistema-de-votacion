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

    verResultados() {
        console.log(`Resultados de la encuesta: ${this.question}`);
        this.options.forEach((opcion, index) => {
            console.log(`    ${opcion}: ${this.votes[index] ?? 0} votos`);
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
    //Función para mostrar las diferentes encuestas
    listarEncuestas() {
        this.encuestas.forEach((encuesta, index) => {
            console.log(`${index}: ${encuesta.question}`)

            encuesta.options.forEach((opcion, index_opcion) => {
                console.log(`    ${index_opcion}: ${opcion}`)
            })

        })
    }
}

const x = new Encuestas()

x.crearEncuesta('¿Cuál es tu estacion favorita?', ['Otoño', 'Invierno', 'Primavera', 'Verano']);
x.crearEncuesta('¿Cuál es tu raza de perro favorita?', ['Chihuahua', 'Quiltro', 'Labrador', 'Salchicha']);
x.crearEncuesta('¿Cuál de estos generos de peliculas te gusta más ?', ['Drama', 'Acción', 'Fantasía', 'Comedia']);
x.crearEncuesta('¿Cuál disciplina de baile te gusta más?', ['Clásica', 'Ballroom', 'Danza contemporanea', 'Danza urbana']);
x.crearEncuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
x.crearEncuesta('¿Cuál es tu signo del zodiaco?', ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo','Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']);
x.crearEncuesta('¿Cuál es tu comida favorita?', ['Casera Chilena', 'Peruana', 'China', 'Francesa', 'Italiana', 'Japonesa', 'Comida Rápida']);
x.crearEncuesta('¿Fumas?', ['Si', 'No', 'fumar qué?']);

x.votar(0, 1)
x.votar(0, 2)


