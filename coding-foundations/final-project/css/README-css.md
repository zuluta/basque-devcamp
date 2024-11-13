# Fin de proyecto (examen)

<picture>
  <img alt="Proyecto final" src="https://github.com/zuluta/basque-devcamp/blob/3e41f4c3da1fa3a70a71cc5b46f5310bfee4a73c/coding-foundations/final-project/img/screenshot/finished-project.png">
</picture>

<p>Para dar estilo a la página web se ha hecho uso de CSS (Hojas de Estilo en Cascada).</p>

> [!NOTE]
> Se muestra una lista de [archivos](https://github.com/zuluta/basque-devcamp/tree/main/coding-foundations/final-project/css) creada para el proyecto:
> * [basic.css](#basic)
> * [navbar.css](#navbar)
> * [article.css](#article)
> * [section.css](#section)
> * [footer.css](#footer)
> * [media.queries.css](#media-queries)

<br>
<br>
<hr>

<span id="basic"></span>

## [basic.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/basic.css)

<p>El código de este archivo da estilo a la estructura principal de la página web.

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.</p>

```css
* {             /* el (*) aplica estilo a todos los elementos de la página web. */
    margin: 0;  /* el valor (0) elimina márgenes que añade la página por defecto. */
    padding: 0; /* el valor (0) elimina separaciónes que añade la página por defecto. */
}
```


```css
body {                               /* hace referencia a la etiqueta body. */
    font-family: "lato", sans-serif; /* define el tipo de letra que se va utilizar. */
    display: grid;                   /* define el tipo de bloque a grid. */
    grid-template-columns: 1fr;      /* asigna una columna al bloque grid. */
}
```

<br>
<br>
<br>
<hr>

<span id="navbar"></span>

# [navbar.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/navbar.css)

<p>El arbol se ramifica dentro de la etiqueta <code>body</code> en <code>html</code>.</p>

### Bloque HTML

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

### El código de este archivo da estilo a la barra de navegación superior y se incorpora una breve descripción de cada línea de código.</p>

```css
.navbar {                             /* hace referencia a la clase navbar. */
    display: grid;                    /* define el tipo de bloque a grid. */
    grid-template-columns: 180px 1fr; /* asigna 2 columnas al bloque grid, una específica en pixel y la otra el resto. */
    width: 100%;                      /* define un ancho completo. */
    height: auto;                     /* define un alto automático. */
    background-color: #000;           /* define un color de fondo. */
}
```
<p><code>.navbar</code> construimos un bloque grid, el bloque se divide en 2 columnas, primera con un hancho de 180px y la segunda el 100% restante. Asignamos un alto automático para adaptar su contenido, por último de damos un color de fondo deseado.</p>
<br>

```css
.navbar > .navbar-logo {   /* hace referencia a la clase navbar-logo. */
    display: grid;         /* define el tipo de bloque a grid. */
    align-content: center; /* alinea el contenido verticalmente en el centro. */
    justify-content: left; /* justifica el contenido a la izquierda horizontalmente. */
    padding-top: 10px;     /* asigna una separación del lado superior. */
    padding-left: 20px;    /* asigna una separación del lado izquierdo. */
}

.navbar > .navbar-logo img { /* hace referencia a la etiqueta img. */
    width: 140px;            /* define un ancho específico en pixel. */
}
```
<p><code>.navbar-logo</code> construimos un bloque grid para introducir un logotipo en su interior, centrada en vertical y alineada a la izquierda.</p>
<br>

```css
.navbar > .navbar-content {                /* hace referencia a la clase navbar-content. */
    display: grid;                         /* define el tipo de bloque a grid. */
    grid-template-columns: repeat(2, 1fr); /* asigna 2 columnas iguales al bloque grid. */
    align-content: center;                 /* alinea el contenido verticalmente en el centro. */
    justify-content: space-between;        /* justifica el contenido uniformemente a ambos lados. */
    padding-left: 20px;                    /* asigna una separación del lado izquierdo. */
    background-color: transparent;         /* define un fondo transparente. */
}
```
<p><code>.navbar-content</code> construimos un bloque grid con 2 columnas iguales, centramos su contenido verticalmente y justificamos su contenido uniformemente a ambos lados. Le damos una separación del lado izquierdo y definimos un fondo transparente.</p>
<br>

```css
.navbar-content > .navbar-left { /* hace referencia a la clase navbar-left. */
    align-content: center;       /* alinea el contenido verticalmente en el centro. */
}
```
<p><code>.navbar-left</code> construimos un bloque que ocupara la primera columna del bloque grid anterior. Lo definimos para que centre el contenido interno verticalmente y este bloque utilizaremos para agregar EXPLORE, links de navegación y Spark con chevron.</p>
<br>

```css
.navbar-left > .nav-explore {  /* hace referencia a la clase nav-explore. */
    text-transform: uppercase; /* transforma todo el texto a mayúsculas. */
    font-size: 0.8em;          /* define un tamaño de fuente. */
    color: #f0e086;            /* define un color de fuente. */
}

.navbar-left > .nav-explore strong { /* hace referencia a la etiqueta strong. */
    font-weight: 600;                /* define un grosor de fuente. */
}

.navbar-left > .nav-links { /* hace referencia a la clase nav-links. */
    display: flex;          /* define el tipo de bloque a flex, ocupa todo el espacio disponible. */
    flex-direction: row;    /* define la dirección de los elementos flexibles de izquierda a derecha. */
    align-items: end;       /* alinea el elemento verticalmente en el lado inferior. */
    gap: 10px;              /* asigna un espacio entre elementos. */
}

.navbar-left > .nav-links > .nav-link a { /* hace referencia a la etiqueta a. */
    color: #fff;                          /* define un color de fuente. */
    text-decoration: none;                /* define un estilo de línea para decorar el texto. */
    font-size: 1.05em;                    /* define un tamaño de fuente. */
}

.navbar-left > .nav-links > .nav-link a:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                              /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-left > .nav-links > .nav-link strong { /* hace referencia a la etiqueta strong. */
    font-weight: 800;                          /* define un grosor de fuente. */
}

.navbar-left > .nav-links > .nav-spark { /* hace referencia a la clase nav-spark. */
    margin-left: 20px;                   /* asigna un margen del lado izquierdo. */
}

.navbar-left > .nav-links > .nav-spark a { /* hace referencia a la etiqueta a. */
    font-size: 0.95em;                     /* define un tamaño de fuente. */
    color: #999;                           /* define un color de fuente. */
    text-decoration: none;                 /* define un estilo de línea para decorar el texto. */
}

.navbar-left > .nav-links > .nav-spark a:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                               /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-left > .nav-links > .nav-spark strong { /* hace referencia a la etiqueta strong. */
    font-weight: 700;                           /* define un grosor de fuente. */
}
```
```css
.navbar-content > .navbar-right { /* hace referencia a la clase navbar-right. */
    display: flex;                /* define el tipo de bloque a flex, ocupa todo el espacio disponible. */
    flex-direction: row;
    align-items: center;          /* alinea el elemento verticalmente en el centro. */
    justify-content: right;       /* justifica el contenido horizontalmente a la derecha. */
    text-align: center;
    padding-top: 10px;            /* asigna una separación del lado superior. */
    padding-right: 10px;          /* asigna una separación del lado derecho. */
    padding-bottom: 10px;         /* asigna una separación del lado inferior. */
    gap: 10px;
}

.navbar-right > .navbar-btn-create { /* hace referencia a la clase navbar-btn-create. */
    display: inline-block;           /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    padding: 13px 19.1px;            /* asigna una separación a los 4 lados. */
    border: none;                    /* define un estilo al borde, ninguno. */
    border-radius: 3px;              /* asigna un redondeo específico a 4 esquinas del borde. */
    text-decoration: none;           /* define un estilo de línea para decorar el texto. */
    font-size: 0.95em;               /* define un tamaño de fuente. */
    color: #fff;                     /* define un color de fuente. */
    font-weight: 600;                /* define un grosor de fuente. */
    cursor: pointer;                 /* El cursor es un puntero, indica un enlace. */
    background-color: #36383f;       /* define un color de fondo. */
}

.navbar-right > .navbar-btn-create:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                         /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-right > .navbar-btn-create i { /* hace referencia a la etiqueta i. */
    color: #46b76f;                    /* define un color de fuente. */
    margin-left: 3px;
}

.navbar-right > .navbar-icon-search { /* hace referencia a la clase navbar-icon-search. */
    margin-left: 9.9px;
    margin-right: 9.9px;
}

.navbar-right > .navbar-icon-search i { /* hace referencia a la etiqueta i. */
    font-size: 1.74em;                  /* define un tamaño de fuente. */
    color: #999;                        /* define un color de fuente. */
}

.navbar-right > .navbar-icon-search i:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                            /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-right > .navbar-btn-login { /* hace referencia a la clase navbar-btn-login. */
    display: inline-block;          /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    padding: 13px 19px;             /* asigna una separación a los 4 lados. */
    border: none;                   /* define un estilo al borde, ninguno. */
    border-radius: 3px;             /* asigna un redondeo específico a 4 esquinas del borde. */
    text-decoration: none;          /* define un estilo de línea para decorar el texto. */
    font-size: 0.95em;              /* define un tamaño de fuente. */
    color: #fff;                    /* define un color de fuente. */
    font-weight: 600;               /* define un grosor de fuente. */
    cursor: pointer;                /* El cursor es un puntero, indica un enlace. */
    background-color: #36383f;      /* define un color de fondo. */
}

.navbar-right > .navbar-btn-login:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                        /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-right > .navbar-btn-signup { /* hace referencia a la clase navbar-btn-signup. */
    display: inline-block;           /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    padding: 13px 20px;              /* asigna una separación a los 4 lados. */
    border: none;                    /* define un estilo al borde, ninguno. */
    border-radius: 3px;              /* asigna un redondeo específico a 4 esquinas del borde. */
    text-decoration: none;           /* define un estilo de línea para decorar el texto. */
    font-size: 0.95em;               /* define un tamaño de fuente. */
    color: #fff;                     /* define un color de fuente. */
    font-weight: 600;                /* define un grosor de fuente. */
    cursor: pointer;                 /* El cursor es un puntero, indica un enlace. */
    background-color: #36383f;       /* define un color de fondo. */
}

.navbar-right > .navbar-btn-signup:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                         /* define la transparencia de un elemento de (0) al (1). */
}
```

<br>
<br>
<br>
<hr>

<span id="article"></span>

# [article.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/article.css)

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

### Bloque HTML

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

### <p>El código de este archivo da estilo al contenido del artículo y se incorpora una breve descripción de cada línea de código.</p>

```css
.article-wrapper {                                                        /* hace referencia a la clase article-wrapper. */
    display: grid;                                                        /* define el tipo de bloque a grid. */
    grid-template-columns: repeat(2, 1fr);                                /* asigna 2 columnas iguales al bloque grid. */
    padding-top: 0px;                                                     /* asigna una separación del lado superior. */
    padding-bottom: 2px;                                                  /* asigna una separación del lado inferior. */
    background: linear-gradient(to right top, #191a1d, #424650, #08080a); /* define 3 colores de fondo en diagonal degradado. */
}
```
```css
.article-wrapper > .article-left { /* hace referencia a la clase article-left. */
    display: grid;                 /* define el tipo de bloque a grid. */
    align-content: start;          /* alinea el contenido verticalmente en el lado superior. */
    justify-content: left;         /* justifica el contenido horizontalmente a la izquierda. */
    background: transparent;       /* define un fondo transparente. */
    padding-top: 47px;             /* asigna una separación del lado superior. */
    padding-left: 44px;            /* asigna una separación del lado izquierdo. */
    min-width: 500px;              /* define un ancho mínimo del elemento en pixel. */
}

.article-left > .article-left-header { /* hace referencia a la clase article-left-header. */
    color: #e8e8e9;                    /* define un color de fuente. */
    font-size: 1.9em;                  /* define un tamaño de fuente. */
    font-weight: 350;                  /* define un grosor de fuente. */
    line-height: 1.10em;
    letter-spacing: 0.16px;
}

.article-left > .article-left-header strong { /* hace referencia a la etiqueta strong. */
    color: #fff;                              /* define un color de fuente. */
    font-weight: 550;                         /* define un grosor de fuente. */
}

.article-left > .article-left-header img { /* hace referencia a la etiqueta img. */
    height: 0.95em;                        /* define un alto específico. */
    background-color: transparent;         /* define un fondo transparente. */
}

.article-left > .article-left-content { /* hace referencia a la clase article-left-content. */
    color: #aeaeae;                     /* define un color de fuente. */
    font-size: 1.5em;                   /* define un tamaño de fuente. */
    font-weight: 400;                   /* define un grosor de fuente. */
    line-height: 1.55em;
    letter-spacing: -0.05px;
    margin-top: 18px;
}

.article-left > .article-left-bottom { /* hace referencia a la clase article-left-bottom. */
    display: flex;                     /* define el tipo de bloque a flex, ocupa todo el espacio disponible. */
    margin-top: 32px;
    gap: 13px;
}

.article-left-bottom > .article-btn-signup { /* hace referencia a la clase article-btn-signup. */
    display: inline-block;                   /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    text-decoration: none;                   /* define un estilo de línea para decorar el texto. */
    border: none;                            /* define un estilo al borde, ninguno. */
    padding: 13.5px 20px;                    /* asigna una separación a los 4 lados. */
    border-radius: 3px;                      /* asigna un redondeo específico a 4 esquinas del borde. */
    color: #000;                             /* define un color de fuente. */
    font-size: 1.69em;                       /* define un tamaño de fuente. */
    font-weight: 500;                        /* define un grosor de fuente. */
    cursor: pointer;                         /* El cursor es un puntero, indica un enlace. */
    background-color: #4bce79;               /* define un color de fondo. */
}

.article-left-bottom > .article-btn-signup:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                                 /* define la transparencia de un elemento de (0) al (1). */
}

.article-left-bottom > .article-btn-more { /* hace referencia a la clase article-btn-more. */
    display: inline-block;                 /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    text-decoration: none;                 /* define un estilo de línea para decorar el texto. */
    border: none;                          /* define un estilo al borde, ninguno. */
    padding: 13.5px 18px;                  /* asigna una separación a los 4 lados. */
    border-radius: 3px;                    /* asigna un redondeo específico a 4 esquinas del borde. */
    color: #fff;                           /* define un color de fuente. */
    font-size: 1.69em;                     /* define un tamaño de fuente. */
    font-weight: 600;                      /* define un grosor de fuente. */
    cursor: pointer;                       /* El cursor es un puntero, indica un enlace. */
    background-color: #111;                /* define un color de fondo. */
}

.article-left-bottom > .article-btn-more:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                               /* define la transparencia de un elemento de (0) al (1). */
}
```
```css
.article-wrapper > .article-right { /* hace referencia a la clase article-right. */
    display: grid;                  /* define el tipo de bloque a grid. */
    align-content: start;           /* alinea el contenido verticalmente en el lado superior. */
    justify-content: right;         /* justifica el contenido horizontalmente a la derecha. */
    background: transparent;        /* define un fondo transparente. */
    padding-top: 45px;              /* asigna una separación del lado superior. */
    min-width: 450px;               /* define un ancho mínimo del elemento en pixel. */
}

.article-right > .article-right-header { /* hace referencia a la clase article-right-header. */
    color: #fff;                         /* define un color de fuente. */
    text-indent: 10px;                   /* asigna una indentación especifica a la primera línea de texto. */
    font-size: 0.9em;                    /* define un tamaño de fuente. */
}

.article-right > .article-right-header strong { /* hace referencia a la etiqueta strong. */
    color: #fff;                                /* define un color de fuente. */
    font-weight: 700;                           /* define un grosor de fuente. */
}

.article-right > .article-right-header span { /* hace referencia a la etiqueta span. */
    color: #58cbf6;                           /* define un color de fuente. */
}

.article-right > .article-right-content img { /* hace referencia a la etiqueta img. */
    width: 431px;                             /* define un ancho específico en pixel. */
    padding-top: 6px;                         /* asigna una separación del lado superior. */
}
```

<br>
<br>
<br>
<hr>

<span id="section"></span>

# [section.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/section.css)

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

### Bloque HTML

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

### <p>El código de este archivo da estilo al contenido de la sección inferior y se incorpora una breve descripción de cada línea de código.</p>

```css
.section-bottom {                          /* hace referencia a la clase section-bottom. */
    display: grid;                         /* define el tipo de bloque a grid. */
    grid-template-columns: repeat(4, 1fr); /* asigna 4 columnas iguales al bloque grid. */
    justify-content: space-between;        /* justifica el contenido uniformemente a ambos lados. */
    background-color: #656565;             /* define un color de fondo. */
    padding: 0.8px;                        /* asigna una separación a los 4 lados. */
}

.section-bottom > .section-bottom-btn { /* hace referencia a la clase section-bottom-btn. */
    display: inline-block;              /* mezcla inline y block, alinea el bloque respetando altos, anchos y margenes verticales. */
    text-decoration: none;              /* define un estilo de línea para decorar el texto. */
    border: none;                       /* define un estilo al borde, ninguno. */
    margin: 0.8px;
    padding: 12px 15px;                 /* asigna una separación a los 4 lados. */
    color: #fff;                        /* define un color de fuente. */
    font-size: 0.95em;                  /* define un tamaño de fuente. */
    text-align: center;
    font-weight: 700;                   /* define un grosor de fuente. */
    cursor: pointer;                    /* El cursor es un puntero, indica un enlace. */
    background-color: #36383f;          /* define un color de fondo. */
}

.section-bottom > .section-bottom-btn:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                            /* define la transparencia de un elemento de (0) al (1). */
}

.section-bottom > .section-bottom-btn strong { /* hace referencia a la etiqueta strong. */
    font-size: 1.2em;                          /* define un tamaño de fuente. */
    font-weight: 900;                          /* define un grosor de fuente. */
}
```

<br>
<br>
<br>
<hr>

<span id="footer"></span>

# [footer.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/footer.css)

<p>El arbol se ramifica dentro de la etiqueta <code>body</code> en <code>html</code>.</p>

### Bloque HTML

```html
<body>
    <footer class="footer-wrapper">
        ...
    </footer>
</body>
```
<br>

### <p>El código de este archivo da estilo al contenido del pie de página y se incorpora una breve descripción de cada línea de código.</p>

```css
.footer-wrapper {              /* hace referencia a la clase footer-wrapper. */
    height: 200px;             /* define un alto específico en pixel. */
    background-color: #191a1d; /* define un fondo transparente. */
}
```

<br>
<br>
<br>
<hr>

<span id="media-queries"></span>

# [media-queries.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/media-queries.css)

<p>Esta característica hace que la página web sea “responsive”. Esto significa hacer que un sitio web sea accesible y adaptable a cualquier tipo de dispositivos. Por lo tanto, en la actualidad, cuando diseñamos una web, esta debe estar preparada para verse correctamente en diferentes resoluciones. </p>

### Bloque CSS

```css
@media (max-width: 1020px) { /* se visualiza entre 801 y 1020 pixel (hancho de pantalla) */
    ...
}

@media (max-width: 800px) { /* se visualiza entre 0 y 800 pixel (hancho de pantalla) */
    ...
}
```
<br>

### <p>El código de este archivo adapta el contenido a diferentes tipos de dispositivo y se incorpora una breve descripción de cada línea de código.</p>

```css
@media (max-width: 1020px) {

    /* grid area */
    .navbar {                       /* hace referencia a la clase navbar. */
        display: grid;              /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr; /* asigna una columna al bloque grid. */
        height: auto;
    }

    .navbar > .navbar-content {                /* hace referencia a la clase navbar-content. */
        display: grid;                         /* define el tipo de bloque a grid. */
        grid-template-columns: repeat(2, 1fr); /* asigna 2 columnas iguales al bloque grid. */
    }

    .article-wrapper {              /* hace referencia a la clase article-wrapper. */
        display: grid;              /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr; /* asigna una columna al bloque grid. */
    }

    .article-wrapper > .article-left { /* hace referencia a la clase article-left. */
        padding-left: 44px;            /* asigna una separación del lado izquierdo. */
        padding-right: 44px;           /* asigna una separación del lado derecho. */
    }

    .article-wrapper > .article-right { /* hace referencia a la clase article-right. */
        justify-content: center;        /* justifica el contenido horizontalmente al centro. */
    }

    .section-bottom {                          /* hace referencia a la clase section-bottom. */
        display: grid;                         /* define el tipo de bloque a grid. */
        grid-template-columns: repeat(2, 1fr); /* asigna 2 columnas iguales al bloque grid. */
    }
}
```
```css
@media (max-width: 800px) {

    .navbar > .navbar-logo {     /* hace referencia a la clase navbar-logo. */
        justify-content: center; /* justifica el contenido horizontalmente al centro. */
    }

    .navbar > .navbar-content {     /* hace referencia a la clase navbar-content. */
        display: grid;              /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr; /* asigna una columna al bloque grid. */
        padding-left: 15px;         /* asigna una separación del lado izquierdo. */
        padding-right: 10px;        /* asigna una separación del lado derecho. */
    }

    .navbar-content > .navbar-right {            /* hace referencia a la clase navbar-right. */
        display: grid;                           /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr 50px 1fr 1fr; /* asigna 4 columnas al bloque grid, 3 iguales y una específica en pixel. */
        padding-top: 20px;                       /* asigna una separación del lado superior. */
        width: 100%;                             /* define un ancho completo. */
    }

    .article-wrapper > .article-left { /* hace referencia a la clase article-left. */
        padding: 30px 30px;            /* asigna una separación a los 4 lados. */
    }

    .article-wrapper > .article-right { /* hace referencia a la clase article-right. */
        justify-content: center;        /* justifica el contenido horizontalmente al centro. */
    }

    .section-bottom {               /* hace referencia a la clase section-bottom. */
        display: grid;              /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr; /* asigna una columna al bloque grid. */
    }
}
```