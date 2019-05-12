import React from "react";
import { CardColumn } from "./CardColumn/CardColumn";
import { Row } from "react-bootstrap";

export class Wizard extends React.Component {
  render() {
    return (
      <Row className="mt-3">
        <CardColumn />
      </Row>
    );
  }
}
