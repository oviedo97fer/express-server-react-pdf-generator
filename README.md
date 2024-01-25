# Proyecto PDF Generator

Este proyecto es un generador de PDFs utilizando Node.js.

## Instalación

1. Clona este repositorio en tu directorio local.
2. Asegúrate de tener Node.js instalado en tu máquina.
3. Abre una terminal en el directorio del proyecto.

## Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```
yarn
```

## Ejecutar el proyecto

Para ejecutar el servicio hay que levantar el servidor con el siguiente comando:

```
yarn compile
```

Este escuchará en el puerto 8087

## Cómo funciona

El servicio levanta un servidor express con un solo endpoint:
[POST] /create

Se puede probar usando este curl en POSTMAN

```
curl --location --request POST 'http://localhost:8087/create'
```

Este post crea un archivo PDF en la carpeta /pdf-generated utilizando un template.

Para escalar esta idea se puede enviar parámetros en el body de la request POST, recibirlos en el endpoint y utilizarlos en los templates.


_@fernando.n.oviedo | 2024_
