import { Button, Intent, Icon } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";
import { IconNames } from "@blueprintjs/icons";
import "./CardColumn.css";

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
              <span className="float-right">
                <Button
                  intent={Intent.PRIMARY}
                  minimal={true}
                  onClick={this.onAddNew}
                >
                  <Icon icon={IconNames.PLUS} className="mr-sm-1" />New
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
