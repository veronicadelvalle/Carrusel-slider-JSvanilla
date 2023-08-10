# Carrusel Slider 

![Muestra de slider](./public/tommy!.png)

Este proyecto presenta un slider interactivo que permite mostrar contenido de manera atractiva y dinámica en tu sitio web. El slider ha sido desarrollado utilizando tecnologías clave como HTML, CSS y JavaScript modularizado.

### Descripción

El slider es una herramienta esencial para exhibir contenido visual de manera interactiva. Con este proyecto, puedes crear un slider personalizable y adaptable para resaltar tu contenido de manera efectiva.

## Estructura Básica del Slider

El siguiente código HTML muestra la estructura básica del slider:

```html
<div class="container">
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider"></div>
      <div class="slider"></div>
      <div class="slider"></div>
    </div>

    <!-- Botones de Navegación -->
    <div class="btn-prev"></div>
    <div class="btn-next"></div>

    <!-- Paginación -->
    <div class="pagination"></div>
  </div>
</div>
```

## Navegación

### Instrucciones:

Si deseas usar solo la navegación y no la paginación, simplemente elimina la sección de paginación en el código y utiliza los archivo:

- navegation.mjs
- variables.mjs

en el archivo main.mjs importa la ruta donde se encuentra el archivo de la navegación.

```js
  import './src/js/navigation.mjs';
```

```html
<div class="container">
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider"></div>
      <div class="slider"></div>
      <div class="slider"></div>
    </div>

    <!-- Botones de Navegación -->
    <div class="btn-prev"></div>
    <div class="btn-next"></div>
  </div>
</div>
```

## Paginación

### Instrucciones:

- Si deseas usar solo la paginación sin los botones de navegación, simplemente elimina la sección de botones de navegación en el código y utiliza los archivo:

- pagination.mjs
- variables.mjs

en el archivo main.mjs importa la ruta donde se encuentra el archivo de la navegación.

```js
  import './src/js/pagination.mjs';
```

```html
<div class="container">
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider"></div>
      <div class="slider"></div>
      <div class="slider"></div>
    </div>

    <!-- Paginación -->
    <div class="pagination"></div>
  </div>
</div>
```

- De lo contrario deje la estructura basica y los archivos tal cual. El css puede ser modificado a su gusto solo se implemento un diseño basico para que el slider funcione.


## Tecnologías Utilizadas

El slider ha sido construido utilizando las siguientes tecnologías:

![html-5--v1](https://github.com/veronicadelvalle/carrusel-slider/assets/139937653/4d1c653a-1d4b-4f07-9479-d4e03fbffd86) ![css3](https://github.com/veronicadelvalle/carrusel-slider/assets/139937653/687eab3e-adf9-4916-a6e3-916a73059d9b) ![javascript--v1](https://github.com/veronicadelvalle/carrusel-slider/assets/139937653/b64e9b85-0c13-4383-ac7e-ad89c0acd799)




