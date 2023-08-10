# Carrusel Slider 

Este readme proporciona una guía básica sobre cómo utilizar el código HTML para implementar un slider (carrusel) en tu sitio web. El slider es una herramienta comúnmente utilizada para mostrar múltiples elementos de contenido, como imágenes o banners, de manera interactiva y visualmente atractiva. Aquí se describe la estructura básica del código HTML necesario para implementar el slider.

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

Si deseas usar solo la navegación y no la paginación, simplemente elimina la sección de paginación en el código y utiliza el archivo:

- navegation.mjs
- variables.mjs

E importa en el archivo main:
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

- Si deseas usar solo la paginación sin los botones de navegación, simplemente elimina la sección de botones de navegación en el código:

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

- Si deseas usar tanto la navegación como la paginación, puedes mantener el código sin modificaciones.
