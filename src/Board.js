// @flow-strict

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const width = 5;
const height = 6;

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Board = () => (
  <Container className="board" fluid="md">
    {[...Array(height).keys()].map((i) => (
      <Row className="row" key={`row-${i}`}>
        {[...Array(width).keys()].map((j) => (
          <Col key={`cell-${width * i + j}`}>
            <div className="cell">
              {letters[(width * i + j) % letters.length]}
            </div>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);

export default Board;
