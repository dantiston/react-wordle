// @flow strict

import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Immutable from "immutable";

type Props = {
  guess: $ReadOnlyArray<string>,
  setGuess: ($ReadOnlyArray<string>) => void,
};

const Widget = (props: Props): React$Element<any> => {
  const [hasError, setHasError] = useState(
    Immutable.List(Array(props.guess.length).fill(false))
  );
  return (
    <Container className="board" fluid="md">
      <Row className="row">
        {props.guess.map((value, i) => (
          <Col style={{ paddingRight: 0 }} key={`cell-${i}`}>
            <input
              className={"cell " + (hasError.get(i) ? " error" : "")}
              value={value.toUpperCase()}
              name={`char-${i}`}
              onKeyUp={(event) => {
                event.preventDefault()
                const nextSibling = document.querySelector(
                  `input[name=char-${i + 1}]`
                );
                if (nextSibling != null) {
                  nextSibling.focus();
                }
              }}
              onChange={(event) => {
                const newCharacter = event.target.value;
                if (newCharacter.length != 2) {
                  setHasError(hasError.set(i, true));
                } else {
                  setHasError(hasError.set(i, false));
                  let newGuess = [...props.guess];
                  newGuess[i] = newCharacter[newCharacter.length - 1];
                  props.setGuess(newGuess);
                }
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Widget;
