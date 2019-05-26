import { Card, Elevation, Icon, Intent } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ICardProps, CardState } from "./Interfaces";
import "./Card.css";
import { IconNames } from "@blueprintjs/icons";

export interface IPracticeItemCardProps extends ICardProps {
  practiceTime: Date;
  onTimeChange: (newTime: Date, id: string) => void;
}

export class PracticeItemCard extends React.Component<IPracticeItemCardProps, CardState> {
  public static defaultProps: IPracticeItemCardProps = {
    id: "",
    title: "",
    description: "",
    practiceTime: new Date(0, 0, 0, 0, 0, 0, 0),
    onTimeChange: () => {}
  };

  public constructor(props: IPracticeItemCardProps) {
    super(props);
    this.state = {
      isHoveringOverHeader: false
    };
  }

  public render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <Row>
          <Col xs={6}>
            <span>
              <h5>
                <a
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}
                  href="#"
                >
                  {this.props.title}{" "}
                  {this.state.isHoveringOverHeader && (
                    <Icon icon={IconNames.EDIT} intent={Intent.PRIMARY} />
                  )}
                </a>
              </h5>
            </span>
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
  }

  private handleMouseHover = () => {
    this.setState({
      isHoveringOverHeader: !this.state.isHoveringOverHeader
    });
  }
}
