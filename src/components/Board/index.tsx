import { useEffect, useState } from "react";
import { BoxBorard, Span } from "./styled";

const winningCombinations = [
  // horizontais
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export function Board() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);

  const handleClick = (clickIndex: number) => {
    console.log(clickIndex);

    if (gameData[clickIndex] !== 0) {
      return;
    }

    setGameData((prev) => {
      let newGameData = [...prev];
      newGameData[clickIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  };

  useEffect(() => {
    checkWinner();
  }, [gameData]);

  const checkWinner = () => {
    console.log("Winner");

    let winner = null;

    for (let values of winningCombinations) {
      if (
        gameData[values[0]] === 1 &&
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1
      ) {
        winner = "player 1";
      }

      if (
        gameData[values[0]] === 2 &&
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2
      ) {
        winner = "player 2";
      }
    }

    console.log({ winner });
  };

  return (
    <BoxBorard>
      {gameData.map((value, index) => (
        <Span
          onClick={() => {
            handleClick(index);
          }}
          key={index}
        >
          {value === 1 && "x"}
          {value === 2 && "o"}
        </Span>
      ))}
    </BoxBorard>
  );
}
