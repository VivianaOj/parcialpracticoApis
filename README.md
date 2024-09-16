**MISW4403 - Diseño y construcción de APIs Parcial práctico**

**Instrucciones**

1. Cree un nuevo proyecto de Nest.js
1. Abra el proyecto en el editor de su preferencia
1. Suba el proyecto a un repositorio de GitHub en su cuenta personal
1. Haga *commit* y *push* en su repositorio bifurcado periódicamente

**Punto 1. Persistencia (6%)**

Esta aplicación tiene el propósito de crear el sistema de un club social.

1. Cree la entidad *Socio* en el módulo correspondiente. Un socio tiene un nombre de usuario, un correo electrónico y una fecha de nacimiento.
1. Cree la entidad *Club* en el módulo correspondiente. Un club tiene un nombre, una fecha de fundación, una imagen y una descripción de no más de 100 caracteres.
1. Incluya la asociación entre *Socio* y *Club*; tenga en cuenta que un socio puede estar en varios clubs y que un club está conformado por varios socios.

**Punto 2. Lógica (43%)**

1. Defina la lógica de *Socio*, esta debe incluir los métodos *findAll*, *findOne*, *create, update* y *delete*. Dentro de los métodos *create* y *update*, realice una validación básica del correo electrónico, es decir que tenga el caracter ‘@’.
1. Defina la lógica de *Club*, esta debe incluir los métodos *findAll*, *findOne*, *create, update* y *delete*. Dentro de los métodos *create* y *update*, valide que la descripción no supere el máximo de caracteres permitidos.
1. Defina la lógica de la asociación, esta debe incluir 5 métodos con las siguientes acciones:
- *addMemberToClub*: Asociar un socio a un grupo.
- *findMembersFromClub*: Obtener los socios de un grupo.
- *findMemberFromClub*: Obtener un socio de un grupo.
- *updateMembersFromClub*: Actualizar los socios de un grupo.
- *deleteMemberFromClub*: Eliminar un socio de un grupo.
4. Implemente las pruebas para la lógica de *Socio*, para la lógica de *Club* y para la lógica de la asociación.

**Punto 3. API (24%)**

1. Cree la clase del controlador para *Socio*, agregue la ruta /members y defina los endpoints *findAll*, *findOne*, *create*, *update* y *delete* con sus respectivas anotaciones.
1. Cree la clase del controlador para *Club*, agregue la ruta /clubs y defina los endpoints *findAll*, *findOne*, *create*, *update* y *delete* con sus respectivas anotaciones.
1. Cree la clase del controlador para la asociación *Club-Socio*, agregue la ruta de modo que se acceda a los endpoints a través del club (ej. /clubs/1/members/4 para *findMemberFromClub*) e implemente los endpoints:
- *addMemberToClub*
- *findMembersFromClub*
- *findMemberFromClub*
- *updateMembersFromClub*
- *deleteMemberFromClub*

**Punto 4. Pruebas de Postman (27%)**

1\. Defina 3 colecciones donde implemente las siguientes pruebas de postman

para las entidades y para la asociación.



|**Método**|**Club**|**Socio**|**Asociación**|
| - | - | - | - |
|POST|Crear un club válido.|Crear un socio válido.|Agregar un socio a un club.|
|POST|Crear un club inválido.|Crear un socio no válido.|Asociar un socio que no existe a un club.|
|GET|Obtener todos los clubs.|Obtener todos los socios.|Obtener todos los socios de un club.|
|GET|Obtener un club por ID.|Obtener un socio por ID|Obtener un socio que pertenece a un club.|
|GET|Obtener un club por un ID que no existe.|Obtener un socio por un ID que no existe.|Obtener un socio que no es parte un club.|
|PUT|Actualizar un club.|Actualizar un socio.|Actualizar los socios que pertenecen a un club.|
|PUT|Actualizar un club con un ID que no existe.|Actualizar un socio con un ID que no existe.|Actualizar los socios de un club, con un socio inexistente.|
|DELETE|Eliminar un club por su ID.|Eliminar un socio por su ID.|Eliminar un socio que es parte de un club.|
|DELETE|Eliminar un club con un ID que no existe.|Eliminar un socio con un ID que no existe.|Eliminar un socio que no es parte de un club.|

**Entregable**

- Dentro del proyecto de Nest.js cree una carpeta denominada collections y exporte ahí las colecciones.
- Suba todos los cambios a su repositorio.
- Haga un release con el tag v1.0.0 y el nombre parcial-practico.
- Suba el archivo .zip del release como respuesta a la actividad de Coursera.
- Después de finalizado el plazo de entrega no realice ninguna modificación al repositorio. Cualquier cambio, por pequeño que sea, anula automáticamente el parcial.

