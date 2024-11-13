# Proyecto CodePen

<picture>
  <img src="https://github.com/zuluta/basque-devcamp/blob/3e41f4c3da1fa3a70a71cc5b46f5310bfee4a73c/coding-foundations/final-project/img/screenshot/finished-project.png" alt="Fin de proyecto">
</picture>

## <p>Para construir esta página web, se ha hecho uso de HTML y CSS.</p>

<p><strong>Primero</strong>, vamos a empezar visualizando el <strong>código html</strong> y analizando algunos bloques del código para entender como se ha estructurado la página web.</p>
<p><strong>Más adelante</strong>, analizaremos el <strong>código css</strong> en profundidad.</p>
<br>

## [index.html](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/index.html)

> [!NOTE]
> Se incorpora una rápida descripción de cada bloque de código. :point_down:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- encoding type -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- developer name -->
    <meta name="author" content="zuluta">
    <!-- page title -->
    <title>CodePen</title>
    <!-- favicon -->
    <link rel="icon" href="img/favicon/icon.png" type="image/x-icon">
    <!-- page font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap">
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" type="text/css">
    <!-- page style -->
    <link rel="stylesheet" href="css/basic.css" type="text/css">
    <link rel="stylesheet" href="css/navbar.css" type="text/css">
    <link rel="stylesheet" href="css/article.css" type="text/css">
    <link rel="stylesheet" href="css/section.css" type="text/css">
    <link rel="stylesheet" href="css/footer.css" type="text/css">
    <link rel="stylesheet" href="css/media-queries.css" type="text/css">
  </head>
  <body>
    <!-- header -->
    <header></header>

    <!-- navbar -->
    <nav class="navbar">

      <!-- navbar logo -->
      <div class="navbar-logo">
        <a href="#">
          <h1><img src="img/logo/codepen-white.png" alt="CodePen"></h1>
        </a>
      </div>
      
      <!-- navbar content -->
      <div class="navbar-content">

        <!-- navbar left -->
        <div class="navbar-left">
          <span class="nav-explore"><strong>Explore</strong></span>

          <!-- navbar links -->
          <div class="nav-links">
            <div class="nav-link">
              <a href="#"><strong>Pens</strong></a>
            </div>
            <div class="nav-link">
              <a href="#"><strong>Projects</strong></a>
            </div>
            <div class="nav-link">
              <a href="#"><strong>Posts</strong></a>
            </div>
            <div class="nav-link">
              <a href="#"><strong>Collections</strong></a>
            </div>
            <div class="nav-spark">
              <a href="#"><strong>Spark</strong>
                <i class="fa-solid fa-chevron-down fa-xs"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- navbar right - icon & buttons-->
        <div class="navbar-right">
          <a class="navbar-btn-create" href="#">Create
            <i class="fa-solid fa-chevron-down fa-lg"></i>
          </a>
          <div class="navbar-icon-search">
            <a href="#">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          <a class="navbar-btn-login" href="#">Log In</a>
          <a class="navbar-btn-signup" href="#">Sign Up</a>
        </div>
      </div>
    </nav>

    <!-- main -->
    <main>

      <!-- article -->
      <article class="article-wrapper">

        <!-- article left -->
        <div class="article-left">

          <!-- article left header -->
          <div class="article-left-header">
            <p>CodePen is a <strong>social development environment</strong> for front-end designers and developers.
              <img class="hand" src="img/home/hand.png" alt="hand">
            </p>
          </div>

          <!-- article left content -->
          <div class="article-left-content">
            <p>It's the best place to build and deploy a website, show off your work, build test cases, and find inspiration.</p>
          </div>

          <!-- article left bottom -->
          <div class="article-left-bottom">
            <a class="article-btn-signup" href="#">Sign Up for Free</a>
            <a class="article-btn-more" href="#">Learn More</a>
          </div>
        </div>

        <!-- article right -->
        <div class="article-right">

          <!-- article right header -->
          <div class="article-right-header">
            <p><strong>This is <span>CodePen Projects</span>!</strong></p>
          </div>

          <!-- article right content -->
          <div class="article-right-content">
            <img src="img/home/project.png" alt="project">
          </div>
        </div>
      </article>

      <!-- section bottom buttons -->
      <section class="section-bottom">
        <a class="section-bottom-btn" href="#">CodePen for <strong>TEAMS</strong></a>
        <a class="section-bottom-btn" href="#">CodePen for <strong>EDUCATION</strong></a>
        <a class="section-bottom-btn" href="#">CodePen for <strong>PRIVACY</strong></a>
        <a class="section-bottom-btn" href="#">CodePen for <strong>WRITING</strong></a>
      </section>
    </main>

    <!-- footer -->
    <footer class="footer-wrapper"></footer>
  </body>
</html>
```

<br>
<br>
<br>
<hr>

## <p>Para dar estilo a la página web, se ha hecho uso de CSS (Cascading Style Sheets).</p>

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

<p>El código de este archivo da estilo a la <strong>estructura principal</strong> de la página web.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

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

## [navbar.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/navbar.css)

<p>El arbol se ramifica dentro de la etiqueta <code>body</code> en <code>html</code>.</p>

<p>Bloque HTML :point_down:</p>

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
<p>El código de este archivo da estilo a la <strong>barra de navegación</strong> superior.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

```css
.navbar {                             /* hace referencia a la clase navbar. */
    display: grid;                    /* define el tipo de bloque a grid. */
    grid-template-columns: 180px 1fr; /* asigna 2 columnas al bloque grid, una específica en pixel y la otra el resto. */
    width: 100%;                      /* define un ancho completo. */
    height: auto;                     /* define un alto automático. */
    background-color: #000;           /* define un color de fondo. */
}
```

<p><code>.navbar</code> es un <strong>bloque grid</strong> con <strong>2 columnas</strong>, la primera columna ocupa un ancho de 180px y la segunda el 100% restante y le hemos definido un color de fondo negro.</p>
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

<p><code>.navbar-logo</code> es un <strong>bloque grid</strong> para introducir un <strong>logotipo</strong> en su interior.</p>
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

<p><code>.navbar-content</code> es un <strong>bloque grid</strong> con <strong>2 columnas</strong>.</p>
<br>

```css
.navbar-content > .navbar-left { /* hace referencia a la clase navbar-left. */
    align-content: center;       /* alinea el contenido verticalmente en el centro. */
}
```

<p><code>.navbar-left</code> éste bloque utilizaremos para <strong>agregar los elementos</strong> EXPLORE, links de navegación y Spark con chevron.</p>
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
<p>Ahora que hemos completado el <strong>bloque izquierdo</strong>, con los elementos <strong>EXPLORE</strong>, <strong>links de navegación</strong> y <strong>Spark con chevron</strong>, pasaremos a construir un nuevo bloque flex para el lado derecho.</p>
<br>

```css
.navbar-content > .navbar-right { /* hace referencia a la clase navbar-right. */
    display: flex;                /* define el tipo de bloque a flex, ocupa todo el espacio disponible. */
    flex-direction: row;          /* define la dirección de los elementos flexibles de izquierda a derecha. */
    align-items: center;          /* alinea el elemento verticalmente en el centro. */
    justify-content: right;       /* justifica el contenido horizontalmente a la derecha. */
    text-align: center;           /* justifica el texto horizontalmente al centro. */
    padding-top: 10px;            /* asigna una separación del lado superior. */
    padding-right: 10px;          /* asigna una separación del lado derecho. */
    padding-bottom: 10px;         /* asigna una separación del lado inferior. */
    gap: 10px;                    /* asigna un espacio entre elementos. */
}

.navbar-right > .navbar-btn-create { /* hace referencia a la clase navbar-btn-create. */
    display: inline-block;           /* alinea un bloque respetando altos, anchos y margenes verticales. */
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
    margin-left: 3px;                  /* asigna un margen del lado izquierdo. */
}

.navbar-right > .navbar-icon-search { /* hace referencia a la clase navbar-icon-search. */
    margin-left: 9.9px;               /* asigna un margen del lado izquierdo. */
    margin-right: 9.9px;              /* asigna un margen del lado derecho. */
}

.navbar-right > .navbar-icon-search i { /* hace referencia a la etiqueta i. */
    font-size: 1.74em;                  /* define un tamaño de fuente. */
    color: #999;                        /* define un color de fuente. */
}

.navbar-right > .navbar-icon-search i:hover { /* hace referencia al pasa el puntero sobre un elemento. */
    opacity: 0.75;                            /* define la transparencia de un elemento de (0) al (1). */
}

.navbar-right > .navbar-btn-login { /* hace referencia a la clase navbar-btn-login. */
    display: inline-block;          /* alinea un bloque respetando altos, anchos y margenes verticales. */
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
    display: inline-block;           /* alinea un bloque respetando altos, anchos y margenes verticales. */
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
<p><code>navbar-right</code> hace referencia a la <strong>mitad derecha</strong> de la barra de navegación superior. En ella hemos construido los siguientes elementos, un <strong>botón create con chevron</strong>, un <strong>icono lupa</strong>, un <strong>botón login</strong> y finalmente un <strong>botón signup</strong>.</p>

<br>
<br>
<br>
<hr>

<span id="article"></span>

## [article.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/article.css)

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

<p>Bloque HTML :point_down:</p>

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
<p>El código de este archivo da estilo al contenido del <strong>artículo</strong>.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

```css
.article-wrapper {                                                        /* hace referencia a la clase article-wrapper. */
    display: grid;                                                        /* define el tipo de bloque a grid. */
    grid-template-columns: repeat(2, 1fr);                                /* asigna 2 columnas iguales al bloque grid. */
    padding-top: 0px;                                                     /* asigna una separación del lado superior. */
    padding-bottom: 2px;                                                  /* asigna una separación del lado inferior. */
    background: linear-gradient(to right top, #191a1d, #424650, #08080a); /* define 3 colores de fondo en diagonal degradado. */
}
```
<p><code>article-wrapper</code> es un <strong>bloque grid principal</strong> que nos servira para alojar 2 bloques grid en su interior más adelante.</p>
<br>

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
    line-height: 1.10em;               /* define el espacio que hay entre líneas. */
    letter-spacing: 0.16px;            /* asigna un espacio específico entre caracteres. */
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
    line-height: 1.55em;                /* define el espacio que hay entre líneas. */
    letter-spacing: -0.05px;            /* asigna un espacio específico entre caracteres. */
    margin-top: 18px;                   /* asigna un margen del lado superior. */
}

.article-left > .article-left-bottom { /* hace referencia a la clase article-left-bottom. */
    display: flex;                     /* define el tipo de bloque a flex, ocupa todo el espacio disponible. */
    margin-top: 32px;                  /* asigna un margen del lado superior. */
    gap: 13px;                         /* asigna un espacio entre elementos. */
}

.article-left-bottom > .article-btn-signup { /* hace referencia a la clase article-btn-signup. */
    display: inline-block;                   /* alinea un bloque respetando altos, anchos y margenes verticales. */
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
    display: inline-block;                 /* alinea un bloque respetando altos, anchos y margenes verticales. */
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
<p><code>article-left</code> es un <strong>bloque grid</strong> que ocupa el <strong>lado izquierdo</strong> dentro del bloque (article-wrapper).</p>
<br>

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
<p><code>article-right</code> es un <strong>bloque grid</strong> que ocupa el <strong>lado derecho</strong> dentro del bloque (article-wrapper).</p>

<br>
<br>
<br>
<hr>

<span id="section"></span>

## [section.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/section.css)

<p>El arbol se ramifica dentro de la etiqueta <code>main</code> en <code>html</code>.</p>

<p>Bloque HTML :point_down:</p>

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
<p>El código de este archivo da estilo al contenido de la <strong>sección inferior</strong>.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

```css
.section-bottom {                          /* hace referencia a la clase section-bottom. */
    display: grid;                         /* define el tipo de bloque a grid. */
    grid-template-columns: repeat(4, 1fr); /* asigna 4 columnas iguales al bloque grid. */
    justify-content: space-between;        /* justifica el contenido uniformemente a ambos lados. */
    background-color: #656565;             /* define un color de fondo. */
    padding: 0.8px;                        /* asigna una separación a los 4 lados. */
}

.section-bottom > .section-bottom-btn { /* hace referencia a la clase section-bottom-btn. */
    display: inline-block;              /* alinea un bloque respetando altos, anchos y margenes verticales. */
    text-decoration: none;              /* define un estilo de línea para decorar el texto. */
    border: none;                       /* define un estilo al borde, ninguno. */
    margin: 0.8px;                      /* asigna un margen a los 4 lados. */
    padding: 12px 15px;                 /* asigna una separación a los 4 lados. */
    color: #fff;                        /* define un color de fuente. */
    font-size: 0.95em;                  /* define un tamaño de fuente. */
    text-align: center;                 /* justifica el texto horizontalmente al centro. */
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
<p><code>section-bottom</code> es un <strong>bloque grid</strong> con <strong>4 columnas</strong> y posicionado en la parte inferior del artículo para luego construir 4 botones en su interior.</p>

<br>
<br>
<br>
<hr>

<span id="footer"></span>

## [footer.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/footer.css)

<p>El arbol se ramifica dentro de la etiqueta <code>body</code> en <code>html</code>.</p>

<p>Bloque HTML :point_down:</p>

```html
<body>
    <footer class="footer-wrapper">
        ...
    </footer>
</body>
```
<br>
<p>El código de este archivo da estilo al contenido del <strong>pie de página</strong>.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

```css
.footer-wrapper {              /* hace referencia a la clase footer-wrapper. */
    height: 200px;             /* define un alto específico en pixel. */
    background-color: #191a1d; /* define un color de fondo. */
}
```
<p><code>footer-wrapper</code> es un <strong>bloque</strong> que ocupa el lado inferior de la página web.</p>

<br>
<br>
<br>
<hr>

<span id="media-queries"></span>

## [media-queries.css](https://github.com/zuluta/basque-devcamp/blob/main/coding-foundations/final-project/css/media-queries.css)

<p>Esta característica hace que la página web sea “responsive”. Esto significa hacer que un sitio web sea accesible y adaptable a cualquier tipo de dispositivos. Por lo tanto, en la actualidad, cuando diseñamos una web, esta debe estar preparada para verse correctamente en diferentes resoluciones. </p>

<p>Bloque CSS :point_down:</p>

```css
@media (max-width: 1020px) { /* se visualizara en pantallas inferiores a 1020 pixel de ancho. */
    ...
}

@media (max-width: 800px) { /* se visualizara en pantallas inferiores a 800 pixel de ancho. */
    ...
}
```

<br>
<p>El código de este archivo <strong>adapta el contenido</strong> de la página web apara poder <strong>visualizar</strong> en diferentes <strong>tipos de dispositivos</strong>.</p>

> [!NOTE]
> Se incorpora una breve descripción de cada línea de código.

```css
@media (max-width: 1020px) {        /* se visualizara en pantallas inferiores a 1020 pixel de ancho. */

    .navbar {                       /* hace referencia a la clase navbar. */
        display: grid;              /* define el tipo de bloque a grid. */
        grid-template-columns: 1fr; /* asigna una columna al bloque grid. */
        height: auto;               /* define un alto automático. */
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
@media (max-width: 800px) {      /* se visualizara en pantallas inferiores a 800 pixel de ancho. */

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

<br>
<br>
<hr>