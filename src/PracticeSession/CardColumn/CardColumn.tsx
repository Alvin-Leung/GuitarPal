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
import { GoalCard } from "./GoalCard";

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

        <GoalCard
          title="Learn Dorian scale"
          description="Master the dorian scale in 12 keys"
          progress={0.75}
        />
        <GoalCard
          title="Improvise"
          description="Improve improvisation chops over high-tempo funk track"
          progress={0.1}
        />
        <GoalCard
          title="Compose new song"
          description="Finish composing 'I Love My Guitar'"
          progress={0}
        />
      </Col>
    );
  }
}
