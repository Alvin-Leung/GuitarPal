import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardColumn } from "./CardColumn";
import { ITotalTime } from "./TotalTimeBuilder";

export interface IPracticeCardColumnProps {
  readonly totalPracticeTime: ITotalTime;
  readonly bootstrapColumnWidth: number;
}

export class PracticeItemCardColumn extends React.Component<IPracticeCardColumnProps> {
  render() {
    const totalPracticeTimeText =
      this.props.totalPracticeTime.hours == 0
        ? `Total Time: ${this.props.totalPracticeTime.minutes} mins`
        : `Total Time: ${this.props.totalPracticeTime.hours} hours ${
            this.props.totalPracticeTime.minutes
          } mins`;

    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
          <Row>
            <Col xs={5}>
              <span className="btn btn-sm">
                <b>{React.Children.count(this.props.children)}</b>{" "}
                Practice Items
              </span>
            </Col>
            <Col xs={7}>
              <span className="float-right btn btn-sm">
                <em>{totalPracticeTimeText}</em>
              </span>
            </Col>
          </Row>
        }
        cards={this.props.children}
      />
    );
  }
}
