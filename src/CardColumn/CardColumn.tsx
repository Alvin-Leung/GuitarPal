import React from "react";
import {
  Button,
  Card,
  Elevation,
  ProgressBar,
  Intent
} from "@blueprintjs/core";
import { Col, Row } from "react-bootstrap";
import "./CardColumn.css";

export class CardColumn extends React.Component {
  render() {
    return (
      <Col xs={3}>
        <Row>
          <Col xs={6}>
            <span className="btn btn-sm">
              <b>3</b> Goals
            </span>
          </Col>
          <Col xs={6}>
            <span className="float-right align-bottom">
              <Button intent={Intent.PRIMARY} minimal={true} icon="plus" />
            </span>
          </Col>
        </Row>

        <hr />

        <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
          <h5>
            <a href="#">Learn Dorian scale</a>
          </h5>
          <p>Master the dorian scale in 12 keys</p>
          <Button>Details</Button>
          <ProgressBar
            intent={Intent.SUCCESS}
            stripes={false}
            value={0.75}
            className="mt-3"
          />
        </Card>
        <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
          <h5>
            <a href="#">Improvise</a>
          </h5>
          <p>Improve improvisation chops over high-tempo funk track</p>
          <Button>Details</Button>
          <ProgressBar
            intent={Intent.SUCCESS}
            stripes={false}
            value={0.1}
            className="mt-3"
          />
        </Card>
        <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
          <h5>
            <a href="#">Compose new song</a>
          </h5>
          <p>Finish composing 'I Love My Guitar'</p>
          <Button>Details</Button>
          <ProgressBar
            intent={Intent.SUCCESS}
            stripes={false}
            value={0}
            className="mt-3"
          />
        </Card>
      </Col>
    );
  }
}
