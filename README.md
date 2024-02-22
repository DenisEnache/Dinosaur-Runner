# Dinosaur Runner Game


## Overview

Dinosaur Runner is an engaging web-based game inspired by the classic no-internet dinosaur game on Google Chrome. Players control a dinosaur that must jump over cactuses and avoid obstacles to survive as long as possible. It's built with HTML, CSS, and JavaScript, featuring a minimalist design and responsive controls.


## Features

**Simple Controls:** Use the spacebar to make the dinosaur jump over obstacles.

**Dynamic Obstacles:** Randomly generated cactuses that the dinosaur must avoid.

**Scoring System:** The score increases over time, reflecting the player's survival duration.

**Responsive Design:** Utilizes Bootstrap for a responsive layout that adapts to various devices and screen sizes.

**Restart Option:** Allows players to restart the game after a game over by pressing the Enter key.


## Development

Key functions include:

*startGame():* Initializes the game by displaying the dinosaur character, hiding the start button, and beginning the generation of obstacles and clouds, along with starting the game's timer.

*restart():* Resets the game state, allowing players to start a new game after a game over. It clears existing obstacles, resets the timer, and prepares the game environment for a new session.

*createCactuses() and createClouds():* These functions dynamically generate cactuses and clouds within the game area at random intervals and positions, adding to the game's challenge and aesthetic appeal.

*cronometer():* Manages the game's scoring system by keeping track of how long the player has survived and displaying the score in real-time.

*checkCollisions():* Continuously checks for collisions between the dinosaur and obstacles, ending the game if a collision is detected.

*gameLoop():* A recursive function that keeps the game's logic running by repeatedly checking for collisions and updating game elements.

*gameOver():* Displays the game over screen and offers the player an option to restart the game.

