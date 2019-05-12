import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Row, Col } from "react-bootstrap";

export class CardColumn extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={6} sm={3} className="mt-2">
          <Card className="mt-2" elevation={Elevation.TWO}>
            <h5>
              <a href="#">May 12th - Scales</a>
            </h5>
            <p>Today I practiced my scales</p>
            <Button>Summary</Button>
          </Card>
          <Card className="mt-2" elevation={Elevation.TWO}>
            <h5>
              <a href="#">May 10th - Improvising</a>
            </h5>
            <p>Practice over backing track in Am</p>
            <Button>Summary</Button>
          </Card>
          <Card className="mt-2" elevation={Elevation.TWO}>
            <h5>
              <a href="#">May 9th - Composition</a>
            </h5>
            <p>I made a song</p>
            <Button>Summary</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
