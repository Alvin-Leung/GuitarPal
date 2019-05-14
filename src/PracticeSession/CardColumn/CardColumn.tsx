import React from "react";
import { Col } from "react-bootstrap";
import "./CardColumn.css";

export interface ICardColumnProps {
  readonly header: JSX.Element;
  readonly cards: React.ReactNode;
  readonly bootstrapColumnWidth: number;
}

export class CardColumn extends React.Component<ICardColumnProps> {
  render() {
    return (
      <Col xs={this.props.bootstrapColumnWidth}>
        {this.props.header}
        <hr />
        {this.props.cards}
      </Col>
    );
  }
}
