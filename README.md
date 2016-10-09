# ntf -- Plugin Jquery para implementar notificaciones

## Acerca de

**ntf** es un plugin jquery, creado con el objetivo de poder añadir notificaciones a nuestras páginas o aplicaciones web
de una forma rápida y sencilla.

**Entre sus propiedades más resaltantes:**

 - Con **ntf**, puedes mostrar las notificaciones con dos diferentes posiciones: **top** y **bottom**.
 - Tiene un diseño **responsive**. En caso de que tu aplicación no sea responsive, puede desactivarle esta opción
   con la propiedad **responsive** del plugin.
 - En su última versión, posee **tres colores**: **azul**, **verde** y **rojo**.

## Uso

Primero, debes incluir jquery en tu archivo html

```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js"></script>
```

Luego, incluye los archivos .js y .css respectivos del plugin

```
<script type="text/javascript" src="/js/ntf.js"></script>
<link type="text/css" rel="stylesheet" href="/css/ntf.css">
```

Por último, en cualquier parte del código javascript de tu proyecto, incluye algo como esto:

```
$.ntf ({ text: '¡Esto es una notificación!', color: 'blue' });
```

¡Y listo! Aplicando esos pasos, podrás tener estas notificaciones en tu proyecto.
