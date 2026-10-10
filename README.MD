# Pig Game

A simple two-player dice game built with HTML, CSS, and JavaScript. The classic Pig game is implemented as a browser-based web app with a polished UI, score tracking, and turn-based gameplay.

## Overview

Pig is a multiplayer dice game where players take turns rolling a die to build up points. The goal is to reach 100 points before the opponent. A single roll of 1 ends the current player's turn and resets their temporary score, adding tension and strategy to every move.

## Features

- Two-player turn-based gameplay
- Random dice roll simulation
- Score tracking for both players
- Current-turn score system
- Hold mechanic to lock in points
- Win detection at 100 points
- Reset button to start a new game
- Responsive and visually styled game board

## How to Play

1. Player 1 starts the game.
2. Click the "Roll dice" button to roll a number from 1 to 6.
3. If the result is:
   - 2 to 6: the number is added to the current score.
   - 1: the current score is lost and the turn passes to the other player.
4. Click "Hold" to add the current score to the total score and pass the turn.
5. The first player to reach 100 points wins the game.
6. Use "New game" to reset the board and start over.

## Project Structure

- `index.html` — game layout and UI elements
- `style.css` — styling for the board, buttons, and dice
- `script.js` — game logic and DOM interactions
- `images/` — dice face assets

## Run the Project

You can run the game by opening `index.html` directly in a browser.

For a local web server, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM manipulation)

## Notes

This project is a front-end browser game and does not require any build tools or dependencies.
