# Tunely

Tunely es un sitio web de descubrimiento musical donde puedes explorar perfiles de artistas, ver la portada de sus álbumes y escuchar vistas previas de audio, todo en un solo lugar.

## Propósito del sitio

Tunely nace para que descubrir y explorar música sea algo simple y agradable. Reúne en un mismo lugar la información de cada artista (una breve introducción), las portadas de álbumes seleccionados y fragmentos de audio, para que cualquier persona pueda conocer a un artista y escuchar un poco de su música sin tener que buscar en varias plataformas.

El sitio está pensado para:

- Personas que ya tienen un artista favorito y quieren buscarlo rápidamente.
- Personas que quieren descubrir artistas nuevos (con el botón **"Surprise me"**, que abre un perfil al azar).
- Visitantes que quieran recomendar artistas para futuras actualizaciones de la colección.

### Funcionalidades principales

- **Búsqueda de artistas** en la página de inicio, con resultados que se actualizan mientras escribes.
- **Botón "Surprise me"** que lleva a un perfil de artista aleatorio.
- **Página de artistas** con una tarjeta por cada artista de la colección (15 artistas).
- **Perfiles de artista** con descripción, álbumes, reproductor de audio y enlace a la canción en YouTube. Cada perfil tiene su propio tema de color.
- **Formulario de sugerencias** para recomendar un artista (nombre, género y motivo). Las sugerencias se guardan solo en el navegador del usuario mediante `localStorage`; no se envían a ningún servidor.
- **Páginas informativas:** "About Tunely" y "References" (recursos y enlaces usados en el proyecto).

## Tecnologías utilizadas

- **HTML5**: estructura de las 20 páginas del sitio, con etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`) y atributos de accesibilidad (`aria-label`, `aria-live`, `role`).
- **CSS3**: hoja de estilos única (`style.css`) con diseño responsivo (`@media`) y temas de color por artista.
- **JavaScript (vanilla)**: archivo `script.js` para la búsqueda de artistas, el botón aleatorio y el formulario de sugerencias con `localStorage`. No se usan librerías ni frameworks.
- **Elemento `<audio>` de HTML5**: reproducción de las vistas previas de audio.
- **Git y GitHub**: control de versiones y alojamiento del repositorio.

## Cómo instalar y ejecutar el sitio

Tunely es un sitio estático, así que **no requiere instalar dependencias ni un servidor**.

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge o Safari).
- (Opcional) Git, si quieres clonar el repositorio.
- (Opcional) Visual Studio Code con la extensión *Live Server*, para ver los cambios en tiempo real mientras editas.

### Pasos

1. Clona el repositorio (o descarga el ZIP desde GitHub y descomprímelo):

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. Entra a la carpeta del proyecto:

   ```bash
   cd nombre-del-repositorio
   ```

3. Abre el archivo `index.html` en tu navegador (doble clic sobre el archivo, o clic derecho > "Abrir con" > tu navegador).

   *Alternativa:* si usas VS Code con Live Server, haz clic derecho sobre `index.html` y elige **"Open with Live Server"**.

> **Importante:** mantén las carpetas `img/` y `audio/` junto a los archivos `.html`. Si se mueven o se renombran, las imágenes y los audios no se mostrarán.

## Estructura del proyecto

```
Music Project/
├── index.html            # Página de inicio (búsqueda y botón "Surprise me")
├── artist.html           # Lista de todos los artistas
├── about.html            # Información sobre Tunely
├── suggestions.html      # Formulario para sugerir artistas
├── reference.html        # Recursos y enlaces usados
├── arianagrande.html     # ┐
├── bad-bunny.html        # │
├── benson-boone.html     # │
├── bruno-mars.html       # │
├── clarent.html          # │
├── delarose.html         # │
├── jaywheeler.html       # │ Un perfil por artista
├── oliviarodrigo.html    # │ (15 en total)
├── omar-courtz.html      # │
├── rauwalejandro.html    # │
├── sabrinacarpenter.html # │
├── sza.html              # │
├── theweekend.html       # │
├── youngmiko.html        # │
├── zhamira.html          # ┘
├── style.css             # Estilos de todo el sitio
├── script.js             # Lógica: búsqueda, aleatorio y sugerencias
├── img/                  # Fotos de artistas, portadas de álbumes y logo
└── audio/                # Vistas previas de audio (.mp3)
```

## Información adicional

- **Autor:** *(escribe aquí tu nombre)*
- **Curso:** *(escribe aquí el nombre del curso)*
- **Datos de las sugerencias:** se almacenan únicamente en el `localStorage` del navegador. Si se borra el almacenamiento del navegador, las sugerencias se pierden.
- **Recursos usados:** W3Schools (tutoriales y ayuda), YouTube y YouTube Music (canciones y videos), Sceneform (conversión de audio a MP3) y Album Artwork Finder (portadas de álbumes). Los enlaces completos, incluidos los videos de cada canción, están en la página `reference.html`.
- **Derechos de autor:** las imágenes, portadas y fragmentos de audio pertenecen a sus respectivos artistas y sellos discográficos. Se usan únicamente con fines educativos, como parte de un proyecto de curso, y sin fines de lucro.
- **Mejoras futuras:** agregar más artistas a la colección, enviar las sugerencias a un servidor en lugar de guardarlas solo en el navegador y ampliar el diseño responsivo para más tamaños de pantalla.
