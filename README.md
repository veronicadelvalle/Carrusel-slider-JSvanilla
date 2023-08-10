# Carrusel Slider 



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

-De lo contrario deje la estructura basica y los archivos tal cual. El css puede ser modificado a su gusto solo se implemento un diseño basico para que el slider funcione.

![html-5--v1](https://github.com/veronicadelvalle/carrusel-slider/assets/139937653/5044d51d-465a-4443-842d-aa97d2ae2289)



