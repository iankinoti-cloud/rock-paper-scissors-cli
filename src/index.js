const { select } = require("@inquirer/prompts");
const chalk = require("chalk");
const { choices, getComputerChoice, determineWinner } = require("./game");

async function playGame() {
  console.log(chalk.bold.cyan("\n🎮 Welcome to Rock, Paper, Scissors!\n"));

  try {
    const playerChoice = await select({
      message: "What is your choice?",
      choices: choices.map((choice) => ({
        name: choice.charAt(0).toUpperCase() + choice.slice(1),
        value: choice,
      })),
    });

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    console.log(chalk.gray(`\nYou chose: ${chalk.white.bold(playerChoice)}`));
    console.log(chalk.gray(`Computer chose: ${chalk.white.bold(computerChoice)}\n`));

    if (result === "win") {
      console.log(chalk.green.bold("🎉 You win!\n"));
    } else if (result === "lose") {
      console.log(chalk.red.bold("😞 You lose!\n"));
    } else {
      console.log(chalk.yellow.bold("🤝 It's a tie!\n"));
    }

    const { select: selectAgain } = require("@inquirer/prompts");
    const playAgain = await selectAgain({
      message: "Play again?",
      choices: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    });

    if (playAgain) {
      await playGame();
    } else {
      console.log(chalk.cyan("Thanks for playing! 👋\n"));
    }
  } catch (error) {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error(error);
    }
  }
}

module.exports = playGame;
