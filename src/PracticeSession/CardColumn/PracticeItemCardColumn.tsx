import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";

export interface IPracticeCardColumnProps {
  readonly bootstrapColumnWidth: number;
}

export class PracticeItemCardColumn extends React.Component<IPracticeCardColumnProps> {
  private totalPracticeMinutes: number = 50;

  render() {
    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
          <Row>
            <Col xs={6}>
              <span className="btn btn-sm">
                <b>2</b> Practice Items
              </span>
            </Col>
            <Col xs={6}>
              <span className="float-right btn btn-sm">
                <em>Total Time: {this.totalPracticeMinutes} mins</em>
              </span>
            </Col>
          </Row>
        }
        cards={this.props.children}
      />
    );
  }
}
