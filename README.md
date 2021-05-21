# README.MD
Este proyecto permite visualizar el reporte de casos del **COVID-19 en Venezuela**.

## Contenido 
Este proyecto fue desarrollado en Reactjs, y tiene las siguientes características:
- Se interactúa con las APIs del sistema Patria de la República Bolivariana de Venezuela para recibir la data de los casos reportados por causa de esta pandemia. Los enlaces utilizados son: [Casos por día](https://covid19.patria.org.ve/api/v1/timeline) y [Consolidado de casos](https://covid19.patria.org.ve/api/v1/summary).
- Se utiliza la librería Victory para realizar una gráfica de torta de los casos clasificados por sexo y una gráfica de barras horizontales para los casos clasificados por edad. 

## Demo 
Si quieres ver la demo de este proyecto desplegada, puedes visitarla [aquí](https://araujoleonel.github.io/covid-numbers)

## Cómo clonar 
Si deseas hacer una copia de este proyecto en tu equipo, escribe el siguiente comando desde tu consola
**git clone https://github.com/araujoleonel/covid-numbers.git**

## Instalación 
Para instalar y ejecutar este proyecto de forma local, sigue estas instrucciones:
1. Debes tener instalado Nodejs.
2. Entra a la carpeta con el proyecto.
**cd covid-numbers**
3. Instala las dependencias necesarias.
**npm install**
4. Y finalmente, ejecuta el proyecto.
**npm start**
5. Desde tu navegador entra a **http://localhost:3000** 
