import { Card, Elevation } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Card.css";
import { EditLink } from "./EditLink";
import { ICardProps } from "./Interfaces";
import { MinimalCloseButton } from "./MinimalCloseButton";

export interface IPracticeItemCardProps extends ICardProps {
  practiceTime: Date;
  onTimeChange: (newTime: Date, id: string) => void;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
}

interface State {
  showCloseButton: boolean;
}

export class PracticeItemCard extends React.Component<
  IPracticeItemCardProps,
  State
> {
  public static defaultProps: IPracticeItemCardProps = {
    id: "",
    title: "",
    description: "",
    practiceTime: new Date(0, 0, 0, 0, 0, 0, 0),
    onTimeChange: () => {},
    onEdit: () => {},
    onRemove: () => {}
  };

  public constructor(props: IPracticeItemCardProps) {
    super(props);
    this.state = {
      showCloseButton: false
    };
  }

  public render(): React.ReactNode {
    return (
      <div
        className="card-div"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.showCloseButton && (
          <MinimalCloseButton onClick={this.handleDelete} />
        )}
        <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
          <Row>
            <Col xs={6}>
              <EditLink
                text={this.props.title}
                onClick={this.handleLinkClick}
              />
            </Col>
            <Col xs={6}>
              <span className="float-right mr-1">
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
      </div>
    );
  }

  private handleMouseEnter = () => {
    this.setState({
      showCloseButton: true
    });
  };

  private handleMouseLeave = () => {
    this.setState({
      showCloseButton: false
    });
  };

  private handleTimeChange = (newTime: Date) => {
    this.props.onTimeChange(newTime, this.props.id);
  };

  private handleLinkClick = () => {
    this.props.onEdit(this.props.id);
  };

  private handleDelete = () => {
    this.props.onRemove(this.props.id);
  };
}
