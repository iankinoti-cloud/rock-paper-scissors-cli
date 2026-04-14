# Rock, Paper, Scissors CLI

A fun terminal-based rock, paper, scissors game built with Node.js.

## Installation

```bash
npm install
```

## Usage

```bash
node bin/cli.js
```

Or make the script executable and run directly:

```bash
chmod +x bin/cli.js
./bin/cli.js
```

## Project Structure

```
.
├── bin/
│   └── cli.js          # CLI entry point
├── src/
│   ├── index.js        # Main game logic
│   └── game.js         # Game utilities
├── package.json
└── README.md
```

## Dependencies

- **@inquirer/prompts** - Interactive CLI prompts
- **chalk** - Terminal string styling
- **commander** - Command-line argument parser (for future expansion)

## How to Play

1. Run the game
2. Select rock, paper, or scissors
3. The computer makes its choice
4. See the result and choose to play again.
