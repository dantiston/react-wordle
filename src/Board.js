// @flow strict

import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
  board: $ReadOnlyArray<$ReadOnlyArray<string>>,
};

const Board = (props: Props): React$Element<any> => (
  <Container className="board" fluid="md">
    {props.board.map((row, i) => (
      <Row className="row" key={`row-${i}`}>
        {row.map((value, j) => (
          <Col key={`cell-${row.length * i + j}`}>
            <div className="cell">
              {value.toUpperCase()}
            </div>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);

export default Board;
