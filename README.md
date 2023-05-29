# Angular User Management

Este proyecto es una aplicación simple de gestión de usuarios desarrollada con Angular. Los usuarios pueden añadir, editar y eliminar información de contacto, que se almacena localmente en el navegador.

## Características

- Formulario de usuario con validación de campos.
- Lista de usuarios con opciones para editar y eliminar.
- Almacenamiento local para mantener la información entre sesiones.
- Utiliza Angular Material para un diseño de UI elegante y responsive.
- Implementa Tailwind CSS para un diseño personalizado y responsive.

## Requisitos

1. Utiliza Angular para desarrollar la aplicación.
2. Utiliza Tailwind CSS para estilizar los componentes.
3. Utiliza Angular Material para los componentes de formulario.
4. El formulario debe contener los siguientes campos: nombre, fecha de nacimiento, correo
   electrónico y teléfono.
5. Debe haber un botón &quot;Agregar campo&quot; que permita al usuario agregar un nuevo conjunto
   de campos (correo electrónico y teléfono) dinámicamente.
6. Los campos de nombre, fecha de nacimiento, correo electrónico y teléfono deben ser
   obligatorios y deben validarse antes de enviar el formulario.
7. Al enviar el formulario, muestra los valores de los campos en una tabla.

## Objetivos extras:

1. Agrega validaciones adicionales, como validación de formato de correo electrónico.
2. Implementa la funcionalidad de eliminar campos dinámicamente.
3. Validar que no se duplique el registro nombre, fecha de nacimiento, correo electrónico.
4. Agregar el campo edad a la tabla y llenar el campo calculando la edad.
5. Crea un diseño atractivo a tus capacidades y gustos.

## Tecnologías utilizadas

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor local con `ng serve`.
4. Abre `http://localhost:4200` en tu navegador.

## Uso

1. En la pantalla principal, haz clic en "Agregar usuario" para abrir el formulario.
2. Rellena los campos con la información del usuario y haz clic en "Agregar".
3. En la lista de usuarios, puedes hacer clic en "Editar" para modificar la información de un usuario o en "Eliminar" para borrarlo.

## Contribuir

Si encuentras algún error o tienes alguna sugerencia, por favor, abre un issue en este repositorio.
