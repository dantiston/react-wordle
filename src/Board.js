// @flow strict

import React from "react";

import Container from "react-bootstrap/Container";
import Immutable from "immutable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
  board: Immutable.List<Immutable.List<string>>,
};

const Board = (props: Props): React$Element<any> => (
  <Container className="board" fluid="md">
    {props.board.map((row, i) => (
      <Row className="row" key={`row-${i}`}>
        {row.map((value, j) => (
          <Col key={`cell-${row.size * i + j}`}>
            <div className="cell">{value.toUpperCase()}</div>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);

export default Board;
