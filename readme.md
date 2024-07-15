## Sistema de votacion
Programa en JavaScript que permite crear encuestas con opciones, votar y ver los resultados.

## Modo de uso

### Programacion funcional

En la carpeta `/Pf` se encuentra el archivo index.js el cual proporciona el codigo a través de programación funcional.

Para usar el archivo y sus funciones, se debe abrir `index.html` en un navegador.

Luego en esa página abrir la consola, y el codigo proporcionará un ejemplo de encuestas y resultados.

También están disponibles las siguientes funciones:
-`crearEncuesta(pregunta, opciones)`: crea una encuesta y la almacena en un array.
-`votar(pregunta, opcion)`: Almacena un voto en la encuesta y opción seleccionada.
-`verResultados(pregunta)`: muestra los resultados para una pregunta.
-`listarEncuestas()`: Lista todas las encuestas, sus opciones y la cantidad de votos en cada una de ellas.

Ejemplo de uso
```
crearEncuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
votar(0,1); // Encuesta=0, opcion=1
verResultados(0);
 // Tanganinca=0, Tangananá=1
```


### Programacion orientada a objetos

En la carpeta `/Poo` se encuentra el archivo index.js el cual proporciona el codigo a través de programación orientada a objetos.

Para usar el archivo y sus funciones, se debe abrir `index.html` en un navegador.

Luego en esa página abrir la consola, y el codigo proporcionará un ejemplo de encuestas y resultados.

También están disponibles la clase `Encuesta`.
El constructor de la clase `Encuesta` recibe una pregunta y opciones, que se almacenan como atributos. También se inicializa el atributo `votos` en 0.
Además los objetos tipo `Encuesta` poseen los siguientes métodos:
-`votar(opcion)`: Almacena un voto en la encuesta y opción seleccionada.
-`verResultados()`: muestra los resultados para una encuesta.

```
const e = new Encuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
e.votar(0);
e.verResultados();
```

Se creó la clase `Encuestas` para manejar un mayor número de `Encuesta` y posee los siguientes métodos:

-`crearEncuesta(pregunta, opciones)`: crea un objeto tipo `Encuesta` y la almacena en un array de la clase.
-`votar(encuesta, opcion)`: Almacena un voto en la encuesta y opción seleccionada.
-`verResultados(encuesta)`: muestra los resultados para una encuesta.
-`listarEncuestas()`: Lista todas las encuestas, sus opciones y la cantidad de votos en cada una de ellas.

Ejemplo de uso
```
const encuestas = new Encuestas()
encuestas.crearEncuesta('¿Tanganinca o Tangananá?', ['Tangananica', 'Tangananá']);
encuestas.votar(0, 1);
encuestas.verResultados(0);
```

### comentario

`listarEncuestas()` sirve en ambos casos para listar las encuestas y saber el numero de encuesta y opcion para votar.

