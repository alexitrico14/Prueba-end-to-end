# Ejercicio 3: Comunicación entre Componentes

## Descripción
Este ejercicio implementa la comunicación entre un componente **Parent** y un componente **Child** utilizando eventos personalizados. La funcionalidad incluye:

- El **Child** tiene un campo de texto y un botón.
- Al escribir texto en el campo y presionar el botón, el texto se envía al **Parent**.
- El **Parent** recibe el texto y lo muestra en pantalla.

## Cómo visualizarlo
1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Contenido del ejercicio
- **`src/components/Parent.vue`**: Componente que recibe el texto del hijo y lo muestra en pantalla.
- **`src/components/Child.vue`**: Componente que envía texto al padre mediante un evento personalizado.
- **`tests/unit/ParentChild.spec.js`**: Pruebas unitarias que validan la comunicación entre componentes.

