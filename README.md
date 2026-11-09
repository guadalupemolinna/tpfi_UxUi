# Portfolio UX/UI — Guadalupe Molina

Portfolio web personal (one-page) con un caso de estudio propio. Trabajo Final de Diseño UX/UI 2026 · Licenciatura en Sistemas de Información · Mg. Ernesto Ledesma.

## Enlaces

| Qué | Link |
|---|---|
| Sitio publicado | [guadalupemolinna.github.io/tpfi_UxUi](https://guadalupemolinna.github.io/tpfi_UxUi/) |
| Repositorio | [github.com/guadalupemolinna/tpfi_UxUi](https://github.com/guadalupemolinna/tpfi_UxUi) |
| Figma (solo vista) | [Portfolio UX/UI — Proceso de diseño](https://www.figma.com/design/lfyh4ryUHn6PuG2cCEBsWh/Portfolio-UX-UI-%E2%80%94-Proceso-de-dise%C3%B1o?node-id=1-5) |

## Concepto

Marca personal cálida, clara y accesible. La paleta (crema, arena, cacao, terracota, oliva y mostaza) y la dupla tipográfica (Cormorant Garamond para titulares, Jost para lectura e interfaz) son propias. La estructura de información sigue la del portfolio de referencia de la cátedra.

## Proceso de diseño (Figma)

El archivo de Figma reúne el proceso completo, organizado en tres páginas:

1. **UX Research + Lo-Fi:** usuario objetivo, benchmark, arquitectura de información y wireframes.
2. **Design System:** paleta, escala tipográfica, espaciado en múltiplos de 4 y 8, y componentes (botón, chip, tarjeta de proyecto, ítem de timeline, input).
3. **Hi-Fi + Prototipo + Tests:** versiones desktop (1280) y mobile (375), menú mobile, caso de estudio y plan de validación.

## Stack

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`).
- CSS3 sin frameworks: variables en `:root`, Flexbox, Grid y enfoque mobile-first. Está dividido por sección (`tokens`, `base`, `components`, `header`, `hero`, etc.).
- JavaScript vanilla (`js/menu.js`): menú hamburguesa accesible y link activo según la sección visible.
- Tipografías: Google Fonts con `display=swap`, dos familias.
- Despliegue: GitHub Pages con GitHub Actions.

## Estructura de información

| # | Sección | Ancla |
|---|---|---|
| 1 | Header / Navegación | — |
| 2 | Hero | `#inicio` |
| 3 | Métricas | `#metricas` |
| 4 | Skills | `#skills` |
| 5 | Proyectos | `#proyectos` |
| 6 | Experiencia | `#experiencia` |
| 7 | Sobre mí | `#sobre-mi` |
| 8 | Contacto | `#contacto` |
| 9 | Footer | — |

El proyecto **Cubrí Seguros** tiene su propio caso de estudio (`caso-cubri.html`), con el recorrido problema → proceso → solución → resultado.

## Decisiones de diseño y accesibilidad

- **Design tokens:** colores, tipografía, espaciado y radios viven en `css/tokens.css`; el resto de los estilos solo usa esas variables.
- **Responsive:** probado en 375 px, 768 px y 1280 px, sin scroll horizontal.
- **Contraste:** los pares de color se definieron para cumplir WCAG AA (4.5:1 en texto normal). El texto atenuado se usa solo sobre crema.
- **Teclado:** link "Saltar al contenido", foco visible en todos los elementos interactivos y menú mobile con `aria-expanded` y `aria-controls`; se cierra con Escape.
- **Movimiento:** `scroll-behavior: smooth` y `scroll-margin-top` para que el header fijo no tape los títulos. Se respeta `prefers-reduced-motion`.
- **Microinteracción:** las tarjetas de proyecto se elevan al pasar el cursor y la flecha se desplaza.
- **Imágenes:** formato AVIF, con `width` y `height`, y `loading="lazy"` debajo del pliegue.

## Estructura del proyecto

```
tpfi_UxUi/
├── index.html
├── caso-cubri.html
├── css/        tokens, base, components y un archivo por sección
├── js/         menu.js
├── assets/     favicon e imágenes
└── README.md
```

## Cómo correrlo en local

No requiere build. Abrí la carpeta en VS Code y levantá el sitio con la extensión Live Server, o desde una terminal:

```bash
npx serve
```

## Despliegue

1. En GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Cada `git push` a la rama `main` dispara el workflow y publica el sitio por HTTPS.
3. La URL pública es la del cuadro de Enlaces.

## Capturas y Lighthouse

**Reporte Lighthouse (mobile):**

<img width="627" height="218" alt="Reporte Lighthouse mobile" src="https://github.com/user-attachments/assets/63f1cc29-6526-43da-8b05-35f6ceef231a" />


## Créditos y fuentes

- Estructura de información basada en el portfolio de referencia de la cátedra. La paleta, la tipografía, la composición y los componentes son propios.
- Tipografías: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) y [Jost](https://fonts.google.com/specimen/Jost), de Google Fonts.
- **Imágenes:** La inspiracion inicial vino de (https://othrwrld.wixstudio.com/bentolio)

## Uso de IA

Se usó Claude (Anthropic) como asistente

**Qué se generó con IA**
- La conversión del diseño de Figma a HTML y CSS.
- Parte de la redacción de los textos del sitio.
- Revisiones de código con observaciones sobre contenido, accesibilidad y performance.

**Cómo se revisó**
- Revisé y modifiqué el código y los textos generados.
- Corrí Lighthouse sobre el sitio publicado y corregí los puntos que señaló.
- Ajusté los contenidos para que reflejen mi trabajo real.
