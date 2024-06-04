# PAC-2

Para entregar su trabajo tienen que hacer un **Pull Request** con su **nombre, apellido y numero de estudiante**.

## Consigna

El codigo entregado cuenta con algunos errores de compilacion, de ejecucion y cuenta con comportamientos sin implementar, todo esto debera de ser resuelto e implementar lo restante.

No deberan de realizar pruebas de ningun tipo.

El codigo cuenta de dos partes, un front end y un back end. El objetivo es que cuando se renderice la aplicacion se debera de desplegar una pagina de "autenticacion" donde solo debe tener un boton que redireccione a la ruta `home`. Esta pagina de autenticacion debera de renderizarse cuando se este en la ruta `login`. Una vez navegado al usuario a la ruta `home`, cuando se renderice el template HTML, este debera de mostrar todos los `sorters` disponibles en ese momento, para ello pueden usar el componente `dropdown`. Una vez seleccionado el `sorter` a utilizar, se debera de mostrar el componente `numbers-input` para listar los numeros a utilizar y un boton para ordenar.

El resultado de la ordenacion se debera de mostrar abajo del boton como prefieran.

### Tareas

#### Arreglar errores de compilacion

#### Arreglar renderizacion de componente `authentication-page`

#### Arreglar rutas en `app-routing`

Se deberan de tener las siguientes rutas: `login`, `home`, `/` que redireccione a `login` y comodin.

#### Implementar boton de navegacion en `authentication-page`

#### Implementar uso de sorters en `home-page`
