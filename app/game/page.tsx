"use client";

import { gameArray } from "@/components/data/data";
import type React from "react";
import { useState, useEffect } from "react";

type EmojiType = string | null;
type GameArrayType = EmojiType[][];

interface Tile {
  rowIndex: number;
  colIndex: number;
}

const GameBoard: React.FC = () => {
  const shuffleEmojis = (data: GameArrayType): GameArrayType => {
    const flattened = data
      .flat()
      .filter((emoji): emoji is string => emoji !== null);
    const shuffled = [...flattened].sort(() => Math.random() - 0.5);
    let index = 0;
    return data.map((row) =>
      row.map((emoji) => (emoji === null ? null : shuffled[index++]))
    );
  };

  const [emojiData, setEmojiData] = useState<GameArrayType>([]);
  const [visibleTiles, setVisibleTiles] = useState<Tile[]>([]);
  const [matchedTiles, setMatchedTiles] = useState<Tile[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0 && !gameOver && gameStarted && !isPaused) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, gameStarted, isPaused]);

  const handleClick = (rowIndex: number, colIndex: number): void => {
    if (isPaused) return;

    if (
      visibleTiles.length === 2 ||
      matchedTiles.some(
        ({ rowIndex: r, colIndex: c }) => r === rowIndex && c === colIndex
      ) ||
      gameOver ||
      emojiData[rowIndex][colIndex] === null
    ) {
      return;
    }

    const newVisibleTiles = [...visibleTiles, { rowIndex, colIndex }];
    setVisibleTiles(newVisibleTiles);

    if (newVisibleTiles.length === 2) {
      const [{ rowIndex: r1, colIndex: c1 }, { rowIndex: r2, colIndex: c2 }] =
        newVisibleTiles;
      if (emojiData[r1][c1] === emojiData[r2][c2]) {
        setMatchedTiles([
          ...matchedTiles,
          { rowIndex: r1, colIndex: c1 },
          { rowIndex: r2, colIndex: c2 },
        ]);
        setScore(score + 10);
      }

      setTimeout(() => {
        setVisibleTiles([]);
        if (emojiData[r1][c1] !== emojiData[r2][c2]) {
          setEmojiData(shuffleEmojis(emojiData));
        }
      }, 800);
    }
  };

  const startGame = (): void => {
    const shuffled = shuffleEmojis(gameArray);
    setEmojiData(shuffled);
    setScore(0);
    setTimeLeft(60);
    setMatchedTiles([]);
    setVisibleTiles([]);
    setGameOver(false);
    setGameStarted(true);
    setIsPaused(false);
  };

  const togglePause = (): void => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (emojiData.length === 0) {
      setEmojiData(gameArray);
    }
  }, [emojiData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Matching Game</h1>
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Play
        </button>
      ) : (
        <>
          <div className="flex justify-between w-full max-w-md mb-4">
            <div className="text-lg font-semibold">Score: {score}</div>
            <div className="text-lg font-semibold">Time Left: {timeLeft}s</div>
            <button
              onClick={togglePause}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
          </div>
          {gameOver ? (
            <div className="text-2xl font-bold text-red-600">Game Over!</div>
          ) : (
            <div className="grid grid-cols-3 gap-4 bg-white p-4 shadow-lg rounded-lg">
              {emojiData.map((row, rowIndex) =>
                row.map((emoji, colIndex) => {
                  const isMatched = matchedTiles.some(
                    ({ rowIndex: r, colIndex: c }) =>
                      r === rowIndex && c === colIndex
                  );
                  if (isMatched) {
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className="w-16 h-16"
                      ></div>
                    );
                  }

                  const isVisible =
                    visibleTiles.some(
                      ({ rowIndex: r, colIndex: c }) =>
                        r === rowIndex && c === colIndex
                    ) ||
                    isMatched ||
                    !gameStarted;

                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`w-16 h-16 flex items-center justify-center text-2xl border rounded-lg cursor-pointer ${
                        isVisible ? "bg-green-200" : "bg-gray-300"
                      }`}
                      onClick={
                        gameStarted && !isPaused
                          ? () => handleClick(rowIndex, colIndex)
                          : undefined
                      }
                    >
                      {isVisible ? emoji : "❓"}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameBoard;
