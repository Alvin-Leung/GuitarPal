import { Card, Elevation } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ICardProps } from "./Interfaces";

export interface IPracticeItemCardProps extends ICardProps {
  onTimeChange?: (newTime: Date) => void;
}

export class PracticeItemCard extends React.Component<IPracticeItemCardProps> {
  public static defaultProps: IPracticeItemCardProps = {
    title: "",
    description: "",
  };

  render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <Row>
          <Col xs={6}>
            <span>
              <h5>
                <a href="#">{this.props.title}</a>
              </h5>
            </span>
          </Col>
          <Col xs={6}>
            <span className="float-right">
              <TimePicker
                selectAllOnFocus={true}
                onChange={this.props.onTimeChange}
              />
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </Card>
    );
  }
}
