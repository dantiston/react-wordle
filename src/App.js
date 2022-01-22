// @flow strict

import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./Board.js";

const App = (): React$Element<any> => {
  const [board, setBoard] = useState([["a", "r", "i", "s", "e"]]);
  return <Board board={board} />;
};

export default App;
