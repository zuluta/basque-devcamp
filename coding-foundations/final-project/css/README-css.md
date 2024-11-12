# Carpeta CSS

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

<p>El código de este archivo da estilo a la estructura principal de la página web.</p>
<p>A continuación, se incorpora una breve descripción de cada linea de código.</p>
<br>

```css
* {
    margin: 0;
    padding: 0;
}
```
<p>El <code>*</code> aplica estilo a todos los elementos de la página web, se define lo siguiente:</p>

*  <p><code>margin: 0;</code> elimina márgenes que añade la página por defecto.</p>
*  <p><code>padding: 0;</code> elimina el padding que añade la página por defecto.</p>
<br>

```css
body {
    font-family: "lato", sans-serif;
    display: grid;
    grid-template-columns: 1fr;
}
```

<p>En la etiqueta <code>body</code> se define lo siguiente:<p/>

* <p><code>font-family: "lato", sans-serif;</code> se especifica el <strong>tipo de letra</strong> que se va ser utilizado en la página.</p>

* <p><code>display: grid;</code> se define el tipo de bloque.</p>

* <p><code>grid-template-columns: 1fr;</code> se asigna 1 columna al bloque.</p>

<br>
<br>
<br>
<hr>

<h2 id="navbar">navbar.css</h2>

<p>El código de este archivo da estilo a la <strong>barra de navegación</strong> superior.</p>
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

#### Descripción del código CSS

```css
.navbar {
    display: grid;                    /* se define el tipo de bloque     */
    grid-template-columns: 180px 1fr; /* se asignan 2 columnas al bloque */
    width: 100%;                      /* se asigna un ancho completo     */
    height: auto;                     /* se asigna un alto automático    */
    background-color: #000000;        /* se asigna un color de fondo     */
}
```
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

<p>El código de este archivo da estilo al contenido del <strong>artículo</strong>.</p>
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

#### Descripción del código CSS

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

<h2 id="article">section.css</h2>

<p>El código de este archivo da estilo al contenido de la <strong>sección</strong>.</p>
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

#### Descripción del código CSS

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

<h2 id="article">section.css</h2>

<p>El código de este archivo da estilo al contenido del <strong>pie de página</strong>.</p>
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

#### Descripción del código CSS

```css
.footer-wrapper {
    height: 200px;
    background-color: #191a1d;
}
```