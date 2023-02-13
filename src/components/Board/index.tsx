import { useState } from "react";
import { BoxBorard, Span } from "./styled";

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
  return (
    <BoxBorard>
      {gameData.map((value, index) => (
        <Span
          onClick={() => {
            handleClick(index);
          }}
        >
          {value === 1 && "x"}
          {value === 2 && "o"}
        </Span>
      ))}
    </BoxBorard>
  );
}
