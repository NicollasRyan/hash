import { useEffect, useState } from "react";
import { BoxBorard, Span } from "./styled";

const winningCombinations = [
  // horizontais
  { indexes: [0, 1, 2], orientation: "horizontal" },
  { indexes: [3, 4, 5], orientation: "horizontal" },
  { indexes: [6, 7, 8], orientation: "horizontal" },

  // verticals
  { indexes: [0, 3, 6], orientation: "vertical" },
  { indexes: [1, 4, 7], orientation: "vertical" },
  { indexes: [2, 5, 8], orientation: "vertical" },

  //diagonals
  { indexes: [0, 4, 8], orientation: "diagonal-1" },
  { indexes: [2, 4, 6], orientation: "diagonal-2" },
];

export function Board() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (clickIndex) => {
    console.log(clickIndex);

    if (gameData[clickIndex] !== 0) {
      return;
    }

    if (winningCombo) {
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
    checkGameEnd();
  }, [gameData]);

  useEffect(() => {
    if (winningCombo) {
      // alert("Jogo teve um vencedor");
    }
  }, [winningCombo]);

  const checkGameEnd = () => {
    if (gameData.every((item) => item !== 0)) {
      alert("IH, deu velha");
    }
  };

  const checkWinner = () => {
    console.log("Winner");

    let winner = null;

    for (let combination of winningCombinations) {
      const { indexes } = combination;
      if (
        gameData[indexes[0]] === 1 &&
        gameData[indexes[1]] === 1 &&
        gameData[indexes[2]] === 1
      ) {
        winner = "player 1";
      }

      if (
        gameData[indexes[0]] === 2 &&
        gameData[indexes[1]] === 2 &&
        gameData[indexes[2]] === 2
      ) {
        winner = "player 2";
      }

      if (winner) {
        setWinningCombo(combination);
        break;
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
          className={
            winningCombo?.indexes.includes(index)
              ? winningCombo.orientation
              : undefined
          }
        >
          {value === 1 && "x"}
          {value === 2 && "o"}
        </Span>
      ))}
    </BoxBorard>
  );
}
