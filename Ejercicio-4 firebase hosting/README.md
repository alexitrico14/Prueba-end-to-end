# Ejercicio 4 - Firebase Hosting

## Descripción
Este ejercicio demuestra cómo desplegar una aplicación Vue en **Firebase Hosting**. La aplicación contiene un mensaje básico que dice: "Probando Hosting de Firebase".

## Cómo visualizarlo
1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Generar el build de producción:
   ```bash
   npm run build
   ```
3. Conectar el proyecto a Firebase Hosting:
   ```bash
   firebase login
   firebase init hosting
   ```
4. Publicar la aplicación:
   ```bash
   firebase deploy
   ```
5. Accede a la URL proporcionada por Firebase para visualizar la aplicación en producción.

## Contenido del ejercicio
- **`src/App.vue`**: Contiene el contenido principal de la aplicación.
- **`firebase.json`**: Configuración de Firebase Hosting.
- **`dist/`**: Carpeta generada automáticamente al ejecutar `npm run build`. **No se incluye en el repositorio**.

