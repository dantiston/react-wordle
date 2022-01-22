// @flow strict

import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Immutable from "immutable";

type Props = {
  guess: Immutable.List<string>,
  setGuess: (Immutable.List<string>) => void,
};

const Widget = (props: Props): React$Element<any> => {
  const [hasError, setHasError] = useState(
    Immutable.List(Array(props.guess.size).fill(false))
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
                event.preventDefault();
                if (props.guess.get(i) != "") {
                  const nextSibling = document.querySelector(
                    `input[name=char-${i + 1}]`
                  );
                  if (nextSibling != null) {
                    nextSibling.focus();
                  }
                }
              }}
              onChange={(event) => {
                const newCharacter = event.target.value;
                if (newCharacter.length == 0) {
                  setHasError(hasError.set(i, true));
                  props.setGuess(props.guess.set(i, ""));
                } else {
                  setHasError(hasError.set(i, false));
                  props.setGuess(
                    props.guess.set(i, newCharacter[newCharacter.length - 1])
                  );
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
