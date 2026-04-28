# First Padel Center

Sitio web profesional para **First Padel Center** — Villa Devoto, CABA.

Landing page interactiva con reservas integradas por WhatsApp, hero animado, listado de canchas, precios, ubicación y testimonios.

## Stack

- HTML + CSS puro
- React 18 (vía CDN) + Babel standalone (JSX en el browser, sin build step)
- Tipografías: Bebas Neue, Archivo, JetBrains Mono (Google Fonts)

## Estructura

```
first-padel-center/
├── index.html          ← entry point (carga React + Babel desde CDN)
├── styles.css          ← sistema de diseño completo
├── app.jsx             ← app React (nav, hero, canchas, reservas, etc.)
└── index-offline.html  ← versión standalone con todo inlineado (1.5MB, sin internet)
```

## Cómo correr localmente

Abrir `index.html` con cualquier servidor estático. Por ejemplo:

```bash
python3 -m http.server 8080
# o
npx serve .
```

> Importante: **no abrir como `file://`** — el navegador bloquea la carga de `app.jsx` por CORS. Tiene que servirse vía HTTP.

Si querés algo 100% portable sin servidor, usar `index-offline.html` — funciona ofuline con doble-click.

## Deploy

Listo para hostear en cualquier servicio estático: GitHub Pages, Netlify, Vercel, Cloudflare Pages.

### GitHub Pages

1. Settings → Pages → Source: `main` / root
2. URL: `https://ramadellatorre-ux.github.io/first-padel-center/`

## Datos del negocio

- **WhatsApp:** +54 11 2758-9272
- **Instagram:** [@firstpadelcenter](https://instagram.com/firstpadelcenter)
- **Dirección:** Av. Fco. Beiró 2720/2750, Villa Devoto, CABA
- **Canchas:** 4 indoor (Blindex) + 2 outdoor (césped sintético)

## Próximos pasos

- Conectar a sistema real de reservas (hoy todo va por WhatsApp)
- Reemplazar emojis de amenities por iconografía SVG personalizada
- Sumar fotos reales del club en hero y secciones de canchas

---

Desarrollado por [Ramiro Della Torre](https://instagram.com/ramirodellatorre) — desarrollo web con IA + automatizaciones n8n.
