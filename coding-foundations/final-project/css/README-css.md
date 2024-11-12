# Archivos del directorio [css](https://github.com/zuluta/basque-devcamp/tree/main/coding-foundations/final-project/css)

<p>Para dar estilo a la página web se ha hecho uso de CSS (Hojas de Estilo en Cascada).</p>
<p>Se muestra una lista de archivos creada para el proyecto:</p>

* [basic.css](#basic)
* [navbar.css](#navbar)
* [article.css](#article)
* [section.css](#section)
* [footer.css](#footer)
* [media.queries.css](#media-queries)

<br>
<hr>

<h2 id="basic">basic.css</h2>

#### <p>El código de este archivo da estilo a la estructura principal de la página web y se incorpora una breve descripción de cada línea de código.</p>

```css
* {             /* el (*) aplica estilo a todas las etiquetas de la página web. */
    margin: 0;  /* el valor (0) elimina márgenes que añade la página por defecto. */
    padding: 0; /* el valor (0) elimina el padding que añade la página por defecto. */
}
```


```css
body {
    font-family: "lato", sans-serif; /* se especifica el tipo de letra que se va utilizar. */
    display: grid;                   /* se define el tipo de bloque. */
    grid-template-columns: 1fr;      /* se asigna una columna al bloque. */
}
```

<br>
<br>
<br>
<hr>

<h2 id="navbar">navbar.css</h2>

<p>El arbol se ramifica dentro de la etiqueta <code>body</code> en <code>html</code>.</p>

#### Bloque HTML

```html
<body>
    <nav class="navbar">
        <div class="navbar-logo">
        <div class="navbar-content">
            <div class="navbar-left">
                ...
            <div class="navbar-right">
                ...
            </div>
        </div>
    </nav>
</body>
```
<br>

#### El código de este archivo da estilo a la barra de navegación superior y se incorpora una breve descripción de cada línea de código.</p>

```css
.navbar {
    display: grid;                    /* se define el tipo de bloque */
    grid-template-columns: 180px 1fr; /* se asignan 2 columnas al bloque */
    width: 100%;                      /* se asigna un ancho completo */
    height: auto;                     /* se asigna un alto automático */
    background-color: #000000;        /* se asigna un color de fondo */
}
```
<p>Construimos un bloque grid, el bloque se divide en 2 columnas, primera con un hancho de 180px y la segunda el 100% restante. Asignamos un alto automático para adaptar su contenido, por último de damos un color de fondo.</p>
<br>

```css
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
```
```css
.navbar > .navbar-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-content: space-between;
    padding-left: 20px;
    background-color: #000;
}
```
```css
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
```
```css
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

<br>
<br>
<br>
<hr>

<h2 id="article">article.css</h2>

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

#### Bloque HTML

```html
<body>
    <main>
        <article class="article-wrapper">
            <div class="article-left">
                ...
            <div class="article-right">
                ...
            </div>
        </div>
    </main>
</body>
```
<br>

#### <p>El código de este archivo da estilo al contenido del artículo y se incorpora una breve descripción de cada línea de código.</p>

```css
.article-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 0px;
    padding-bottom: 2px;
    background: linear-gradient(to right top, #191a1d, #424650, #08080a);
}
```
```css
.article-wrapper > .article-left {
    display: grid;
    align-content: start;
    justify-content: left;
    background: transparent;
    padding-top: 47px;
    padding-left: 44px;
    min-width: 500px;
}

.article-left > .article-left-header {
    color: #e8e8e9;
    font-size: 1.9em;
    font-weight: 350;
    line-height: 1.10em;
    letter-spacing: 0.16px;
}

.article-left > .article-left-header strong {
    color: #fff;
    font-weight: 550;
}

.article-left > .article-left-header img {
    height: 0.95em;
    background-color: transparent;
}

.article-left > .article-left-content {
    color: #aeaeae;
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.55em;
    letter-spacing: -0.05px;
    margin-top: 18px;
}

.article-left > .article-left-bottom {
    display: flex;
    margin-top: 32px;
    gap: 13px;
}

.article-left-bottom > .article-btn-signup {
    display: inline-block;
    text-decoration: none;
    border: none;
    padding: 13.5px 20px;
    border-radius: 3px;
    color: #000;
    font-size: 1.69em;
    font-weight: 500;
    cursor: pointer;
    background-color: #4bce79;
}

.article-left-bottom > .article-btn-signup:hover {
    opacity: 0.75;
}

.article-left-bottom > .article-btn-more {
    display: inline-block;
    text-decoration: none;
    border: none;
    padding: 13.5px 18px;
    border-radius: 3px;
    color: #fff;
    font-size: 1.69em;
    font-weight: 600;
    cursor: pointer;
    background-color: #111;
}

.article-left-bottom > .article-btn-more:hover {
    opacity: 0.75;
}
```
```css
.article-wrapper > .article-right {
    display: grid;
    align-content: start;
    justify-content: right;
    background: transparent;
    padding-top: 45px;
    min-width: 450px;
}

.article-right > .article-right-header {
    color: #fff;
    text-indent: 10px;
    font-size: 0.9em;
}

.article-right > .article-right-header strong {
    color: #fff;
    font-weight: 700;
}

.article-right > .article-right-header span {
    color: #58cbf6;
}

.article-right > .article-right-content img {
    width: 431px;
    padding-top: 6px;
}
```

<br>
<br>
<br>
<hr>

<h2 id="section">section.css</h2>

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

#### Bloque HTML

```html
<body>
    <main>
        <section class="section-bottom">
            ...
        </section>
    </main>
</body>
```
<br>

#### <p>El código de este archivo da estilo al contenido de la sección inferior y se incorpora una breve descripción de cada línea de código.</p>

```css
.section-bottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    background-color: #656565;
    padding: 0.8px;
}

.section-bottom > .section-bottom-btn {
    display: inline-block;
    text-decoration: none;
    border: none;
    margin: 0.8px;
    padding: 12px 15px;
    color: #fff;
    font-size: 0.95em;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    background-color: #36383f;
}

.section-bottom > .section-bottom-btn:hover {
    opacity: 0.75;
}

.section-bottom > .section-bottom-btn strong {
    font-size: 1.2em;
    font-weight: 900;
}
```

<br>
<br>
<br>
<hr>

<h2 id="footer">footer.css</h2>

<p>El arbol se ramifica dentro de la etiqueta <code>footer</code> en <code>html</code>.</p>

#### Bloque HTML

```html
<body>
    <footer>
        <div class="footer-wrapper">
            ...
        </div>
    </footer>
</body>
```
<br>

#### <p>El código de este archivo da estilo al contenido del pie de página y se incorpora una breve descripción de cada línea de código.</p>

```css
.footer-wrapper {
    height: 200px;
    background-color: #191a1d;
}
```

<br>
<br>
<br>
<hr>

<h2 id="media-queries">media-queries.css</h2>

<p>Esta característica hace que la página web sea “responsive”. Esto significa hacer que un sitio web sea accesible y adaptable a cualquier tipo de dispositivos. Por lo tanto, en la actualidad, cuando diseñamos una web, esta debe estar preparada para verse correctamente en diferentes resoluciones. </p>

#### Bloque CSS

```css
@media (max-width: 1020px) { /* se visualiza entre 801 y 1020 pixel (hancho de pantalla) */
    ...
}

@media (max-width: 800px) { /* se visualiza entre 0 y 800 pixel (hancho de pantalla) */
    ...
}
```
<br>

#### <p>El código de este archivo adapta el contenido a diferentes tipos de dispositivo y se incorpora una breve descripción de cada línea de código.</p>

```css
@media (max-width: 1020px) {

    /* grid area */
    .navbar {
        display: grid;
        grid-template-columns: 1fr;
        height: auto;
    }

    .navbar > .navbar-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .article-wrapper {
        display: grid;
        grid-template-columns: 1fr;
    }

    .article-wrapper > .article-left {
        padding-left: 44px;
        padding-right: 44px;
    }

    .article-wrapper > .article-right {
        justify-content: center;
    }

    .section-bottom {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
```
```css
@media (max-width: 800px) {

    .navbar > .navbar-logo {
        justify-content: center;
    }

    .navbar > .navbar-content {
        display: grid;
        grid-template-columns: 1fr;
        padding-left: 15px;
        padding-right: 10px;
    }

    .navbar-content > .navbar-right {
        display: grid;
        grid-template-columns: 1fr 50px 1fr 1fr;
        padding-top: 20px;
        width: 100%;
    }

    .article-wrapper > .article-left {
        padding: 30px 30px;
    }

    .article-wrapper > .article-right {
        justify-content: center;
    }

    .section-bottom {
        display: grid;
        grid-template-columns: 1fr;
    }
}
```