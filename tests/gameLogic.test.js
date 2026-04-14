import { describe, it, expect, beforeEach } from "vitest";
import { determineWinner, updateStats, showStats, resetGame } from "../src/lib/gameLogic.js";

describe("Game Logic - determineWinner", () => {
  it("should return 'tie' when both players choose the same move", () => {
    expect(determineWinner("rock", "rock")).toBe("tie");
    expect(determineWinner("paper", "paper")).toBe("tie");
    expect(determineWinner("scissors", "scissors")).toBe("tie");
  });

  it("should return 'win' when user wins", () => {
    expect(determineWinner("rock", "scissors")).toBe("win");
    expect(determineWinner("paper", "rock")).toBe("win");
    expect(determineWinner("scissors", "paper")).toBe("win");
  });

  it("should return 'lose' when user loses", () => {
    expect(determineWinner("rock", "paper")).toBe("lose");
    expect(determineWinner("paper", "scissors")).toBe("lose");
    expect(determineWinner("scissors", "rock")).toBe("lose");
  });
});

describe("Game Logic - updateStats", () => {
  let gameState;

  beforeEach(() => {
    gameState = {
      stats: {
        wins: 0,
        losses: 0,
        ties: 0,
      },
      over: false,
    };
  });

  it("should increment wins when result is 'win'", () => {
    updateStats("win", gameState);
    expect(gameState.stats.wins).toBe(1);
    expect(gameState.stats.losses).toBe(0);
    expect(gameState.stats.ties).toBe(0);
  });

  it("should increment losses when result is 'lose'", () => {
    updateStats("lose", gameState);
    expect(gameState.stats.wins).toBe(0);
    expect(gameState.stats.losses).toBe(1);
    expect(gameState.stats.ties).toBe(0);
  });

  it("should increment ties when result is 'tie'", () => {
    updateStats("tie", gameState);
    expect(gameState.stats.wins).toBe(0);
    expect(gameState.stats.losses).toBe(0);
    expect(gameState.stats.ties).toBe(1);
  });

  it("should correctly track multiple game results", () => {
    updateStats("win", gameState);
    updateStats("win", gameState);
    updateStats("lose", gameState);
    updateStats("tie", gameState);

    expect(gameState.stats.wins).toBe(2);
    expect(gameState.stats.losses).toBe(1);
    expect(gameState.stats.ties).toBe(1);
  });
});

describe("Game Logic - resetGame", () => {
  it("should reset all stats to zero", () => {
    const gameState = {
      stats: {
        wins: 5,
        losses: 3,
        ties: 2,
      },
      over: false,
    };

    resetGame(gameState);

    expect(gameState.stats.wins).toBe(0);
    expect(gameState.stats.losses).toBe(0);
    expect(gameState.stats.ties).toBe(0);
  });

  it("should reset stats from any state", () => {
    const gameState = {
      stats: {
        wins: 100,
        losses: 50,
        ties: 25,
      },
      over: false,
    };

    resetGame(gameState);

    expect(gameState.stats.wins).toBe(0);
    expect(gameState.stats.losses).toBe(0);
    expect(gameState.stats.ties).toBe(0);
  });
});

describe("Game Logic - showStats", () => {
  it("should not throw when displaying stats", () => {
    const gameState = {
      stats: {
        wins: 5,
        losses: 3,
        ties: 2,
      },
      over: false,
    };

    expect(() => showStats(gameState)).not.toThrow();
  });

  it("should handle stats with zero values", () => {
    const gameState = {
      stats: {
        wins: 0,
        losses: 0,
        ties: 0,
      },
      over: false,
    };

    expect(() => showStats(gameState)).not.toThrow();
  });
});
