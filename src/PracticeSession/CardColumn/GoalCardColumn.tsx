import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";

export interface IGoalCardColumnProps {
  readonly bootstrapColumnWidth: number;
}

export class GoalCardColumn extends React.Component<IGoalCardColumnProps> {
  render() {
    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
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
        }
        cards={this.props.children}
      />
    );
  }
}
