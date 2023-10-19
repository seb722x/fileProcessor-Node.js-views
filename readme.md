## File processor in Node.JS app

Table of Contents
1. Requirements
2. Installation
3. Usage
4. Application Structure
5. API

1. Requirements
    1.1 Node.js
        Make sure you have Node.js installed in the latest LTS version.

    1.2 Code Editor
        You may choose any code editor; Visual Studio Code (VS Code) is recommended.

    1.3 NoSQL Database
        As this application uses a NoSQL database, you do not need to install any database administrator separately. It's connected through a URI.

2. Installation
    2.1 Clone the Repository
        Clone the repository from GitHub: git clone https://github.com/seb722x/fileProcessor-Node.js-views

    2.2 Change Directory
        Navigate to the main folder of the repository.

    2.3 Install Dependencies
        npm install

    2.4 Configure Environment Variables
        You can set up your own customized environment variables. For testing purposes, the main .env file is included in this repository.

3. Usage
    3.1 Run the Application
        Start the application by running: npm start dev
    3.2 Access the Application
        Open your web browser and go to http://localhost:3001.

    3.3 Main View
        You will be directed to the main view of the application.

    3.4 Uploading a File
        Click on the "Buscar archivo" button to browse for a file and select it for upload.

    3.5 File Upload
        Click on the "Subir archivo" button to upload the selected file to the "uploads" folder.

    3.6 File Processing
        Click on the "Process file" button to trigger the file processing, which involves using the fs library and other libraries to generate responses related to the uploaded file.

4. Application Structure
    The application's file structure is organized as follows:

    - /src
      - /routes
        - file.route.js
      - /controllers
        - file.controller.js
      - /views
        - index.hbs
    - index.js
    - package.json
    - README.md

5. API Endpoints
    The application provides the following API endpoints:

    POST /upload: Uploads a file.
    POST /process: Processes the uploaded file.




Tabla de Contenidos
Requisitos
Instalación
Uso
Estructura de la Aplicación
API
Autor
1. Requisitos
1.1 Node.js
Asegúrate de tener Node.js instalado en la última versión LTS.

1.2 Editor de Código
Puedes elegir cualquier editor de código; se recomienda Visual Studio Code (VS Code).

1.3 Base de Datos NoSQL
Dado que esta aplicación utiliza una base de datos NoSQL, no necesitas instalar ningún administrador de bases de datos por separado. Está conectado a través de una URI.

2. Instalación
2.1 Clonar el Repositorio
Clona el repositorio desde GitHub: git clone https://github.com/seb722x/fileProcessor-Node.js-views


Aplicación de Procesamiento de Archivos en Node.js
Tabla de Contenidos
Requisitos
Instalación
Uso
Estructura de la Aplicación
API
Autor

1. Requisitos
    1.1 Node.js
        Asegúrate de tener Node.js instalado en la última versión LTS.

    1.2 Editor de Código
        Puedes elegir cualquier editor de código; se recomienda Visual Studio Code (VS Code).

    1.3 Base de Datos NoSQL
            Dado que esta aplicación utiliza una base de datos NoSQL, no necesitas instalar ningún administrador de bases de datos por separado. Está conectado a través de una URI.

2. Instalación
    2.1 Clonar el Repositorio
        Clona el repositorio desde GitHub:
            git clone https://github.com/seb722x/fileProcessor-Node.js-views
    2.2 Cambiar de Directorio
        Navega hasta la carpeta principal del repositorio.

    2.3 Instalar Dependencias
        Instala las dependencias del proyecto utilizando npm:
            npm install

    2.4 Configurar Variables de Entorno
        Puedes configurar tus propias variables de entorno personalizadas. Para fines de prueba, el archivo .env principal se incluye en este repositorio.

3. Uso
    3.1 Ejecutar la Aplicación
        Inicia la aplicación ejecutando:
            npm start dev

    3.2 Acceder a la Aplicación
        Abre tu navegador web y ve a http://localhost:3001.

    3.3 Vista Principal
        Serás redirigido a la vista principal de la aplicación.

    3.4 Subir un Archivo
        Haz clic en el botón "Buscar archivo" para buscar un archivo y seleccionarlo para cargar.

    3.5 Cargar el Archivo
        Haz clic en el botón "Subir archivo" para cargar el archivo seleccionado en la carpeta "uploads".

    3.6 Procesar el Archivo
        Haz clic en el botón "Procesar archivo" para iniciar el procesamiento del archivo, que implica el uso de la     biblioteca fs y otras bibliotecas para generar respuestas relacionadas con el archivo cargado.

4. Estructura de la Aplicación
La estructura de archivos de la aplicación está organizada de la siguiente manera:

markdown
Copy code
- /src
  - /routes
    - file.route.js
  - /controllers
    - file.controller.js
  - /views
    - index.hbs
- index.js
- package.json
- README.md

5. Endpoints de la API
La aplicación proporciona los siguientes puntos de acceso a la API:

POST /upload: Carga un archivo.
POST /process: Procesa el archivo cargado.