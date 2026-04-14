import { describe, it, expect } from "vitest";
import gameState from "../src/lib/state.js";

describe("Game State", () => {
  it("should have correct initial structure", () => {
    expect(gameState).toHaveProperty("stats");
    expect(gameState).toHaveProperty("over");
  });

  it("should have stats object with correct properties", () => {
    expect(gameState.stats).toHaveProperty("wins");
    expect(gameState.stats).toHaveProperty("losses");
    expect(gameState.stats).toHaveProperty("ties");
  });

  it("should initialize stats with zero values", () => {
    expect(gameState.stats.wins).toBe(0);
    expect(gameState.stats.losses).toBe(0);
    expect(gameState.stats.ties).toBe(0);
  });

  it("should have over property set to false", () => {
    expect(gameState.over).toBe(false);
  });

  it("should allow mutation of stats", () => {
    const originalWins = gameState.stats.wins;
    gameState.stats.wins += 1;
    expect(gameState.stats.wins).toBe(originalWins + 1);
    gameState.stats.wins = originalWins; // Reset for other tests
  });
});
