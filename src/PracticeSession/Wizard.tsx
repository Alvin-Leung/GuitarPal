import React from "react";
import { CardColumn } from "./CardColumn/CardColumn";
import { Row, Col } from "react-bootstrap";
import { PracticeItemCard } from "./CardColumn/PracticeItemCard";
import { Button, Intent } from "@blueprintjs/core";

export class Wizard extends React.Component {
  private totalPracticeMinutes: number = 50;

  render() {
    return (
      <Row className="mt-3">
        <CardColumn />
        <Col xs={4}>
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

          <hr />

          <PracticeItemCard
            title="Learn Purple Haze"
            description="Play along with song and nail solo"
            timeIntervalInMinutes={30}
          />
          <PracticeItemCard
            title="Increase picking speed"
            description="Practice Paul Gilbert speed picking exericse"
            timeIntervalInMinutes={30}
          />
        </Col>
        <Col xs={4}>
          <Button intent={Intent.SUCCESS} icon="arrow-right">
            Start Practice
          </Button>
        </Col>
      </Row>
    );
  }
}
