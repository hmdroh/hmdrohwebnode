import React from "react";
import "./puzzle.css";

type TilePos = {
  "grid-column": string;
  "grid-row": string;
};

type PuzzlePositions = {
  puzzle1: TilePos;
  puzzle2: TilePos;
  puzzle3: TilePos;
  puzzle4: TilePos;
  puzzle5: TilePos;
  puzzle6: TilePos;
  puzzle7: TilePos;
  puzzle8: TilePos;
};

type Locations = Record<number, [boolean, boolean, boolean]>;

type State = {
  showPic: boolean;
  picTouch: boolean;
  resetPuzzle: PuzzlePositions;
  tempPuzzle: PuzzlePositions;
  showPuzzle: PuzzlePositions;
};

const INITIAL_POSITIONS: PuzzlePositions = {
  puzzle1: { "grid-column": "1/3", "grid-row": "1" },
  puzzle2: { "grid-column": "2/3", "grid-row": "1" },
  puzzle3: { "grid-column": "3/3", "grid-row": "1" },
  puzzle4: { "grid-column": "1/3", "grid-row": "2" },
  puzzle5: { "grid-column": "2/3", "grid-row": "2" },
  puzzle6: { "grid-column": "3/3", "grid-row": "2" },
  puzzle7: { "grid-column": "1/3", "grid-row": "3" },
  puzzle8: { "grid-column": "2/3", "grid-row": "3" }
};

export default class PuzzleGame extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      showPic: true,
      picTouch: true,
      resetPuzzle: { ...INITIAL_POSITIONS },
      tempPuzzle: { ...INITIAL_POSITIONS },
      showPuzzle: { ...INITIAL_POSITIONS }
    };

    this.isClickable = this.isClickable.bind(this);
    this.getLocations = this.getLocations.bind(this);
    this.randomize = this.randomize.bind(this);
    this.showGame = this.showGame.bind(this);
    this.saveStates = this.saveStates.bind(this);
    this.showOriginal = this.showOriginal.bind(this);
  }

  getLocations(callbacks: (locations: Locations) => void) {
    const ar: Locations = {
      1: [false, false, false],
      2: [false, false, false],
      3: [false, false, false]
    };

    for (let i = 1; i < 9; i++) {
      let gridCol = this.state.showPuzzle[`puzzle${i}` as keyof PuzzlePositions]["grid-column"];
      gridCol = gridCol.split("/")[0];
      const gridRow = this.state.showPuzzle[`puzzle${i}` as keyof PuzzlePositions]["grid-row"];
      ar[Number(gridRow)][Number(gridCol) - 1] = true;
    }
    callbacks(ar);
  }

  isClickable(obNum: number) {
    const gridColumnStr =
      this.state.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions]["grid-column"];
    const gridColumn = Number(gridColumnStr.split("/")[0]);
    const gridRow = Number(this.state.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions]["grid-row"]);

    this.getLocations((locationOb) => {
      if (locationOb[gridRow - 1]) {
        const top = locationOb[gridRow - 1];
        if (!top[gridColumn - 1]) {
          this.setState((prevState) => ({
            ...prevState,
            showPuzzle: {
              ...prevState.showPuzzle,
              [`puzzle${obNum}`]: {
                ...prevState.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions],
                "grid-row": String(gridRow - 1)
              }
            } as PuzzlePositions
          }));

          this.saveStates();
          return true;
        }
      }

      if (locationOb[gridRow + 1]) {
        const bottom = locationOb[gridRow + 1];
        if (!bottom[gridColumn - 1]) {
          this.setState((prevState) => ({
            ...prevState,
            showPuzzle: {
              ...prevState.showPuzzle,
              [`puzzle${obNum}`]: {
                ...prevState.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions],
                "grid-row": String(gridRow + 1)
              }
            } as PuzzlePositions
          }));

          this.saveStates();
          return true;
        }
      }

      if (gridColumn < 3) {
        if (!locationOb[gridRow][gridColumn]) {
          this.setState((prevState) => ({
            ...prevState,
            showPuzzle: {
              ...prevState.showPuzzle,
              [`puzzle${obNum}`]: {
                ...prevState.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions],
                "grid-column": String(Number(gridColumn + 1) + "/3")
              }
            } as PuzzlePositions
          }));
          this.saveStates();
          return true;
        }
      }

      if (gridColumn > 1) {
        if (!locationOb[gridRow][gridColumn - 2]) {
          this.setState((prevState) => ({
            ...prevState,
            showPuzzle: {
              ...prevState.showPuzzle,
              [`puzzle${obNum}`]: {
                ...prevState.showPuzzle[`puzzle${obNum}` as keyof PuzzlePositions],
                "grid-column": String(Number(gridColumn - 1) + "/3")
              }
            } as PuzzlePositions
          }));
          this.saveStates();
          return true;
        }
      }
      this.saveStates();
      return false;
    });
  }

  saveStates() {
    this.setState((prevState) => ({
      ...prevState,
      picTouch: false,
      showPic: true,
      tempPuzzle: {
        ...prevState.showPuzzle
      }
    }));
  }

  showGame() {
    this.setState((prevState) => ({
      ...prevState,
      showPic: true,
      showPuzzle: {
        ...prevState.tempPuzzle
      }
    }));
  }

  showOriginal() {
    this.setState((prevState) => ({
      ...prevState,
      showPic: false,
      tempPuzzle: {
        ...prevState.showPuzzle
      },
      showPuzzle: {
        ...prevState.resetPuzzle
      }
    }));
  }

  randomize() {
    for (let i = 1; i < 100; i++) {
      setTimeout(() => {
        this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
      }, 0);
      setTimeout(() => {
        this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
      }, 0);
      setTimeout(() => {
        this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
      }, 0);
    }
    this.setState((prevState) => ({
      ...prevState,
      picTouch: false,
      showPic: true
    }));
  }

  render() {
    const tileBg: React.CSSProperties = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/exampleimg.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "270px 270px"
    };

    return (
      <div className="PuzzleRealMain">
        <div className="PuzzleMainContainer">
          <ul className="PuzzleContainer">
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle1 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle1"
                style={tileBg}
                onClick={() => this.isClickable(1)}
              >
                1
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle2 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle2"
                style={tileBg}
                onClick={() => this.isClickable(2)}
              >
                2
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle3 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle3"
                style={tileBg}
                onClick={() => this.isClickable(3)}
              >
                3
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle4 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle4"
                style={tileBg}
                onClick={() => this.isClickable(4)}
              >
                4
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle5 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle5"
                style={tileBg}
                onClick={() => this.isClickable(5)}
              >
                5
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle6 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle6"
                style={tileBg}
                onClick={() => this.isClickable(6)}
              >
                6
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle7 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle7"
                style={tileBg}
                onClick={() => this.isClickable(7)}
              >
                7
              </button>
            </li>
            <li
              className="PuzzleCell"
              style={this.state.showPuzzle.puzzle8 as unknown as React.CSSProperties}
            >
              <button
                type="button"
                className="PuzzleTileBtn Puzzle Puzzle8"
                style={tileBg}
                onClick={() => this.isClickable(8)}
              >
                8
              </button>
            </li>
          </ul>
        </div>
        <button onClick={this.randomize}>Randomize</button>
        <button onClick={this.showGame} style={{ display: this.state.showPic ? "none" : "block" }}>
          Continue Game...
        </button>
        <button
          onClick={this.showOriginal}
          style={{
            display: this.state.showPic && !this.state.picTouch ? "block" : "none"
          }}
        >
          Show Ordered Picture
        </button>
        <div className="puzzleText">(Aug 2019): Puzzle Game Made in React.js</div>
      </div>
    );
  }
}

