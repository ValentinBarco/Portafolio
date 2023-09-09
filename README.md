<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio</title>
    <style>
        /* Estilos generales */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header, section, footer {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
        }

        h1, h2 {
            color: #333;
        }

        a {
            color: #007BFF;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Estilos para el header */
        header {
            text-align: center;
            border-bottom: 1px solid #eaeaea;
        }

        /* Estilos para las habilidades */
        #skills ul {
            list-style-type: none;
            padding: 0;
        }

        #skills li {
            background-color: #eaeaea;
            padding: 5px 10px;
            margin-bottom: 10px;
            border-radius: 3px;
        }

        /* Estilos para el footer */
        footer {
            text-align: center;
            border-top: 1px solid #eaeaea;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Descubre mis habilidades y proyectos.</p>
    </header>

    <section id="about-me">
        <h2>Sobre mí</h2>
        <p>
            [Aquí puedes escribir una breve descripción sobre ti, tu formación, experiencia, etc.]
        </p>
    </section>

    <section id="skills">
        <h2>Habilidades</h2>
        <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <!-- Puedes agregar más habilidades de la misma manera -->
        </ul>
    </section>

    <section id="projects">
        <h2>Proyectos</h2>
        <p>
            He trabajado en diversos proyectos que abarcan desde desarrollo web hasta análisis de datos. ¡Visita mi repositorio para verlos todos!
        </p>
        <a href="URL_de_tu_repositorio" target="_blank">Ver mis proyectos en GitHub</a>
    </section>

    <section id="contact">
        <h2>Contacto</h2>
        <p>
            ¿Interesado en trabajar conmigo o simplemente quieres decir hola? Envíame un mensaje a <a href="mailto:tuemail@email.com">tuemail@email.com</a>.
        </p>
    </section>

    <footer>
        <p>© [Tu Nombre]. Todos los derechos reservados.</p>
    </footer>

</body>

</html>

