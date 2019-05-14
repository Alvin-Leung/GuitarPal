import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";

export interface IGoalCardColumnProps {
  readonly bootstrapColumnWidth: number;
}

export class GoalCardColumn extends React.Component<IGoalCardColumnProps> {
  onAddNew = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("New goal card will be added");
    console.log(event);
  };

  render() {
    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
          <Row>
            <Col xs={6}>
              <span className="btn btn-sm">Goal Pool</span>
            </Col>
            <Col xs={6}>
              <span className="float-right align-bottom">
                <Button
                  intent={Intent.PRIMARY}
                  minimal={true}
                  icon="plus"
                  onClick={this.onAddNew}
                >
                  New
                </Button>
              </span>
            </Col>
          </Row>
        }
        cards={this.props.children}
      />
    );
  }
}
