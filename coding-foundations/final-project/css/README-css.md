# Directorio CSS

Para dar estilo a la página web se ha hecho uso de CSS (Hojas de Estilo en Cascada). <br>
Se muestra un listado de archivos creados para el proyecto:

* [basic.css](#basic)
* [navbar.css](#navbar)
* [footer.css](#footer)
* [media-queries.css](#media-queries)
* [navbar.css](#navbar)
* [section.css](#section)

<br>
<hr>

<h2 id="basic">basic.css</h2>

Este archivo contiene código básico que da estilo a la estructura web principal.

```css
/* basic - global reset */

* {
    margin: 0;
    padding: 0;
}

/* global fonts & grid column */

body {
    font-family: "lato", sans-serif;
    display: grid;
    grid-template-columns: 1fr;
}
```

### Descripción del código:

El <code>*</code> aplica estilo a todos los elementos de la página.

<code>margin: 0;</code> elimina márgenes que añade la página por defecto.
<br><br>
<code>padding: 0;</code> elimina el padding que añade la página por defecto.
<br><br><br>

<p>En la etiqueta <code>body</code> se definen:<p/>

* <p><code>font-family: "lato", sans-serif;</code> se especifica el <strong>tipo de letra</strong> que se va utilizar en la página.</p>

* <p><code>display: grid;</code> se define el tipo de bloque.</p>

* <p><code>grid-template-columns: 1fr;</code> se asignan 2 columnas al bloque.</p>

<br>
<hr>


<h2 id="navbar">navbar.css</h2>

Este archivo contiene el código que da estilo a la barra de navegación superior.<br>
El arbol <code>html</code> esta ramificado de la siguiente manera dentro del <code>body</code>.

<code>body</code>

    <div class="navbar">
        <div class="navbar-logo">
        <div class="navbar-content">
            <div class="navbar-left">
                ...
            <div class="navbar-right">
                ...

#### Descripción del código:

```css
.navbar {
    display: grid;                    /* se define el tipo de bloque     */
    grid-template-columns: 180px 1fr; /* se asignan 2 columnas al bloque */
    width: 100%;                      /* se asigna un ancho completo     */
    height: auto;                     /* se asigna un alto automático    */
    background-color: #000000;        /* se asigna un color de fondo     */
}

.navbar > .navbar-logo {
    display: grid;
    align-content: center;
    justify-content: left;
    padding-top: 10px;
    padding-left: 20px;
}

.navbar > .navbar-logo img {
    width: 140px;
}

.navbar > .navbar-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-content: space-between;
    padding-left: 20px;
    background-color: #000;
}

.navbar-content > .navbar-left {
    align-content: center;
}

.navbar-left > .nav-explore {
    text-transform: uppercase;
    font-size: 0.8em;
    color: #f0e086;
}

.navbar-left > .nav-explore strong {
    font-weight: 600;
}

.navbar-left > .nav-links {
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 10px;
}

.navbar-left > .nav-links > .nav-link a{
    color: #fff;
    text-decoration: none;
    font-size: 1.05em;
}

.navbar-left > .nav-links > .nav-link a:hover {
    opacity: 0.75;
}

.navbar-left > .nav-links > .nav-link strong {
    font-weight: 800;
}

.navbar-left > .nav-links > .nav-spark {
    margin-left: 20px;
}

.navbar-left > .nav-links > .nav-spark a {
    font-size: 0.95em;
    color: #999;
    text-decoration: none;
}

.navbar-left > .nav-links > .nav-spark a:hover {
    opacity: 0.75;
}

.navbar-left > .nav-links > .nav-spark strong {
    font-weight: 700;
}

.navbar-content > .navbar-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    text-align: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    gap: 10px;
}

.navbar-right > .navbar-btn-create {
    display: inline-block;
    padding: 13px 19.1px;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.95em;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    background-color: #36383f;
}

.navbar-right > .navbar-btn-create:hover {
    opacity: 0.75;
}

.navbar-right > .navbar-btn-create i {
    color: #46b76f;
    margin-left: 3px;
}

.navbar-right > .navbar-icon-search {
    margin-left: 9.9px;
    margin-right: 9.9px;
}

.navbar-right > .navbar-icon-search i {
    font-size: 1.74em;
    color: #999;
}

.navbar-right > .navbar-icon-search i:hover {
    opacity: 0.75;
}

.navbar-right > .navbar-btn-login {
    display: inline-block;
    padding: 13px 19px;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.95em;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    background-color: #36383f;
}

.navbar-right > .navbar-btn-login:hover {
    opacity: 0.75;
}

.navbar-right > .navbar-btn-signup {
    display: inline-block;
    padding: 13px 20px;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-size: 0.95em;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    background-color: #36383f;
}

.navbar-right > .navbar-btn-signup:hover {
    opacity: 0.75;
}
```
