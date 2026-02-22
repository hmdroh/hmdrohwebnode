import React from "react";

import PuzzleGame from "./PuzzleGame/PuzzleGame";

export function PuzzleSection() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <PuzzleGame />
    </div>
  );
}

