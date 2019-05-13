import { TimePicker } from "@blueprintjs/datetime";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AbstractCard } from "./AbstractCard";
import { ICardProps } from "./Interfaces";

export interface IPracticeItemCardProps extends ICardProps {
  timeIntervalInMinutes: number;
}

export class PracticeItemCard extends AbstractCard<IPracticeItemCardProps> {
  generateCardContent(): React.ReactNode {
    return (
      <div>
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
              <TimePicker selectAllOnFocus={true} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
