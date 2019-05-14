import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoalCard, IGoalCardProps } from "./CardColumn/GoalCard";
import { GoalCardColumn } from "./CardColumn/GoalCardColumn";
import {
  IPracticeItemCardProps,
  PracticeItemCard
} from "./CardColumn/PracticeItemCard";
import { PracticeItemCardColumn } from "./CardColumn/PracticeItemCardColumn";

export class Wizard extends React.Component {
  private goalCardProps: IGoalCardProps[] = [
    {
      title: "Learn Dorian scale",
      description: "Master the dorian scale in 12 keys",
      progress: 0.75
    },
    {
      title: "Improvise",
      description: "Improve improvisation chops over high-tempo funk track",
      progress: 0.1
    },
    {
      title: "Compose",
      description: "Finish composing ballad 'I Love My Guitar'",
      progress: 0
    }
  ];
  private practiceItemProps: IPracticeItemCardProps[] = [
    {
      title: "Learn Purple Haze",
      description: "Play along with song and nail solo",
      timeIntervalInMinutes: 30
    },
    {
      title: "Increase picking speed",
      description: "Practice Paul Gilbert speed picking exericse",
      timeIntervalInMinutes: 20
    }
  ];

  render() {
    return (
      <Row className="mt-3">
        <GoalCardColumn bootstrapColumnWidth={3}>
          {this.goalCardProps.map(props => (
            <GoalCard {...props} />
          ))}
        </GoalCardColumn>

        <PracticeItemCardColumn bootstrapColumnWidth={4}>
          {this.practiceItemProps.map(props => (
            <PracticeItemCard {...props} />
          ))}
        </PracticeItemCardColumn>

        <Col xs={4}>
          <Button intent={Intent.SUCCESS} icon="arrow-right">
            Start Practice
          </Button>
        </Col>
      </Row>
    );
  }
}
