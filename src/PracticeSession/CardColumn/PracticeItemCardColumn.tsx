import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";

export interface IPracticeCardColumnProps {
  readonly totalPracticeMinutes: number;
  readonly bootstrapColumnWidth: number;
}

export class PracticeItemCardColumn extends React.Component<IPracticeCardColumnProps> {
  render() {
    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
          <Row>
            <Col xs={6}>
              <span className="btn btn-sm">
                <b>{React.Children.count(this.props.children)}</b> Practice Items
              </span>
            </Col>
            <Col xs={6}>
              <span className="float-right btn btn-sm">
                <em>Total Time: {this.props.totalPracticeMinutes} mins</em>
              </span>
            </Col>
          </Row>
        }

        cards={this.props.children}
      />
    );
  }
}
