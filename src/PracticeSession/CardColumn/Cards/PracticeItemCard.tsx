import { Card, Elevation } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Card.css";
import { EditLink } from "./EditLink";
import { ICardProps } from "./Interfaces";

export interface IPracticeItemCardProps extends ICardProps {
  practiceTime: Date;
  onTimeChange: (newTime: Date, id: string) => void;
}

export class PracticeItemCard extends React.Component<IPracticeItemCardProps> {
  public static defaultProps: IPracticeItemCardProps = {
    id: "",
    title: "",
    description: "",
    practiceTime: new Date(0, 0, 0, 0, 0, 0, 0),
    onTimeChange: () => {}
  };

  public render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <Row>
          <Col xs={6}>
            <EditLink text={this.props.title} />
          </Col>
          <Col xs={6}>
            <span className="float-right">
              <TimePicker
                selectAllOnFocus={true}
                onChange={this.handleTimeChange}
                value={this.props.practiceTime}
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

  private handleTimeChange = (newTime: Date) => {
    this.props.onTimeChange(newTime, this.props.id);
  };
}
