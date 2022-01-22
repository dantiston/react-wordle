// @flow strict

import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Immutable from "immutable";

import Board from "./Board.js";
import Widget from "./Widget.js";

const App = (): React$Element<any> => {
  const [board, setBoard] = useState(
    Immutable.List([Immutable.List(["a", "r", "i", "s", "e"])])
  );
  const [guess, setGuess] = useState(Immutable.List(["c", "l", "o", "u", "t"]));
  return (
    <>
      <Board board={board} />
      <Widget guess={guess} setGuess={setGuess} />
    </>
  );
};

export default App;
