# Premium Tic Tac Toe

A polished, accessible Tic Tac Toe web app built with HTML, CSS, and vanilla JavaScript. It features a premium glassmorphism UI, animated win feedback, confetti celebration, keyboard support, and a responsive layout.

## Project Overview

This project delivers a production-ready two-player Tic Tac Toe experience with clear separation between game logic, UI rendering, sound, and animation management.

## Folder Structure

- index.html — app shell and game layout
- style.css — visual design, responsive styling, and animations
- script.js — game rules, score handling, UI updates, and effects
- project-spec.yaml — complete project specification
- README.md — usage and deployment instructions

## Installation

No build steps are required.

1. Clone or download this project.
2. Open the folder in a browser.
3. Launch index.html directly or serve the folder with a local static server.

## How to Run Locally

You can run it with any simple static server such as:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Game Rules

- Players alternate placing X and O on a 3x3 grid.
- The first player to place three in a row horizontally, vertically, or diagonally wins.
- If all cells are filled without a winner, the round ends in a draw.

## Deployment Instructions

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository settings.
3. Enable GitHub Pages using the main branch root folder.

### Netlify

1. Create a new site from the repository.
2. Set the publish directory to the project root.
3. Deploy.

### Vercel

1. Import the repository into Vercel.
2. Use the default static deployment settings.
3. Deploy.

## Customization

You can customize the visual style by editing the colors, spacing, and gradients in style.css. Gameplay behavior and UI text can be adjusted in script.js and index.html.
