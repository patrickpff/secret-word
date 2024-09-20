# Secret Word

Welcome to Secret Word game! This is a imple and fun game built using React where players guess the hidden word.

## About the Project

This game was developed as part of a course on <a href="https://www.udemy.com">Udemy</a> entitled <a href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/">React do Zero a Maestria (c/ hooks, router, API, Projetos)</a>. It is designed to help learners practice React fundamentals, including state management, component structure, and event handling.

## Features

- **Interactive Gameplay:** Players try to guess the hidden word by entering one letter at a time.
- **Dynamic Feedback:** Correctly guessed letters are reveled, while incorrect guesses are tracked
- **Responsive UI:** Enjoy the game on any device with a responsive user interface.

## How to Play

1. **Start the Game:** Click on the "Press here to start the game" button to begin.
1. **Atention to the tip:** A tip word will appear to help you solve the game.
1. **Guess a Letter:** Type a letter into the input box and press Enter or click the "Try" button.
1. **Revealing Letters:** Correct guesses reveal the letter in its correct position in the word. Incorrect guesses are aded to a list of incorrect attemps.
1. **Win or Lose:** If you guess all the letters correctly before using up all you attemps, you win and score a point! If not, you lose and your points are reseted.

## Setup and Installation

1. Clone the repository:

```bash
   git clone https://github.com/patrickpff/secret-word.git
```

2. Navigate to the project directory

```bash
   cd secret-word
```

3. Install dependencies

```bash
   npm install
```

4. Install dependencies

```bash
   npm run dev
```

The game will be accessible at `http://localhost:5173/` in your browser.

## Customization

- **Add New Words:** You can add new words to the game by modifying the `words.jsx` file located in the src/data directory.
- **Adjust Game Settings:** Modify the number of incorrect attempts allowed or other game settings in the `config.jsx` file located in the `src/config` directory.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **CSS:** For styling the components.
- **JavaScript:** For game logic and interactivity.
