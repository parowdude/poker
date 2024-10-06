# 🎲 Poker Game (Five-Card Draw) 🃏

Welcome to **Poker Game**, a simplified console-based variant of Five-Card Draw poker, where players are dealt five cards, but no swapping is allowed.\
This application is built using **Node.js** for the back-end and **Vue.js** for a smooth interactive front-end.\

## Features

- ♠️ **Shuffle & Deal:** Simulate shuffling a standard deck of 52 cards.
- ♣️ **Dealing Hands:** Deal a hand of 5 cards to the player.
- ♦️ **Hand Evaluation:** Automatically evaluate the player's hand according to the official poker hand rankings.
- ♥ **Extendable Variants:** The application is designed to easily accommodate future poker variants like Badugi.

## Poker Hand Rankings (from highest to lowest)

1. **Straight Flush**
2. **Four of a Kind**
3. **Full House**
4. **Flush**
5. **Straight**
6. **Three of a Kind**
7. **Two Pair**
8. **One Pair**
9. **High Cards**

## 🛠️ Tech Stack

- **Node.js** (Backend logic v12.6.0)
- **Vue.js** (Frontend interface v2)
- **Express** (API server)
- **Axios** (HTTP requests)
- **Concurrently** (Run frontend & backend together)

## 🎮 Game Flow

1. **Shuffle the Deck**: The game shuffles the deck of 52 cards at the beginning of each round.
2. **Deal Cards**: Deal 5 cards to the player.
3. **Evaluate Hand**: The game evaluates the player's hand and displays the best possible poker hand.
4. **No Swapping**: Unlike traditional Five-Card Draw, this variant doesn't allow swapping cards.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Vue CLI](https://cli.vuejs.org/)

### Clone the Repository

```
git clone https://github.com/your-username/poker-game.git
cd poker-game ```
# Install Dependencies
npm install
cd frontend
npm install
```

## 🎲 Running the Game
The game comes with both a back-end API and a front-end Vue.js interface. You can run both simultaneously with Concurrently.

### Development Mode
To run both the backend and the frontend:

`npm run dev`\
Backend runs on http://localhost:3000.\
Frontend runs on http://localhost:8080.\
Open the browser and go to http://localhost:8080 to play the game.


