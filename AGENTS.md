# Base44 Dev Environment

## Project

Pure static HTML/CSS/JS Tic Tac Toe game. No build step, no backend, no database, no external services.

## Running

```bash
docker compose -f docker-compose.base44.yml up -d
```

The app is served by nginx on host port 3000, bind-mounted from the repo root. No live-reload dev server exists for this project; call `reload_preview` after edits so the user sees changes.

## Files

- `index.html` — app shell
- `style.css` — styling
- `script.js` — game logic (vanilla JS, no dependencies)

## Verification

- `curl -s http://localhost:3000/` returns the HTML page.
- The game board renders and is playable (click cells, X/O alternate, win/draw detection).
