# Componente tabla con React

Si bien el proyecto cuenta con un componente funcional y reutilizable, este es un ejercicio de React en el uso de Context API, reducers y manejo del estado.

Se obtiene la información de una REST API (json-server) y se almacena en un reducer para luego mostrarla en una tabla.

La tabla cuenta con funcionalidades de paginación y sort.


### Cómo instalar
Para correrlo descarga el proyecto y ejecuta

`npm i`

Finalmente ejecuta:

`npm run server` para correr el servidor (http://localhost:3000/users/)
`npm run dev` para ver el frontend



### Data
La información se provee desde json-server directamente con un array de objetos, por lo que si se quisiera usar en un proyecto real, se deberán hacer los cambios necesarios para inyectar la respuesta del servidor en el estado de la aplicación.


### Sort
La funcionalidad de orden de columnas hace una nueva llamada al servidor para que devuelva la información ordenada de manera ascendente o descendente por un nodo predeterminado que se le envía como parámetro en la petición.


### Paginación
De igual forma, al navegar por páginas, se realiza una nueva petición al servidor con el parámetro de la página requerida.

---

El componente de tabla presenta un buen punto de partida para desplegar información en una vista en producción, siempre que sea adaptado a las necesidades del proyecto, basado en la información que devuelve el servidor.