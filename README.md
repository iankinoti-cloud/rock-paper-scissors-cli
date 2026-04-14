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
│   └── index.js        # CLI entry point
├── src/
│   └── lib/
│       ├── gameLogic.js    # Game logic and utilities
│       └── state.js        # Game state management
├── tests/
│   ├── gameLogic.test.js   # Game logic tests
│   └── state.test.js       # State management tests
├── package.json
└── README.md
```

## Dependencies

- **@inquirer/prompts** - Interactive CLI prompts
- **chalk** - Terminal string styling
- **commander** - Command-line argument parser

## How to Play

1. Run the game
2. Select rock, paper, or scissors
3. The computer makes its choice
4. See the result and choose to play again!

## Development

```bash
# Run tests
npm test

# Run linting
npm run lint

# Run with coverage
npm run test:coverage
```
