import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoalCard, IGoalCardProps } from "./CardColumn/GoalCard";
import { GoalCardColumn } from "./CardColumn/GoalCardColumn";
import { IPracticeItemCardProps, PracticeItemCard } from "./CardColumn/PracticeItemCard";
import { PracticeItemCardColumn } from "./CardColumn/PracticeItemCardColumn";

interface IPracticeItem extends IPracticeItemCardProps {
  key: string;
  practiceTime: Date;
}

interface IGoal extends IGoalCardProps {
  key: any;
}

interface State {
  readonly practiceItems: IPracticeItem[]
}

export class Wizard extends React.Component<any, State> {
  private goalCards: IGoal[] = [
    {
      key: "8b71a16a-9274-417e-8c47-65ac971f29b4",
      title: "Learn Dorian scale",
      description: "Master the dorian scale in 12 keys",
      progress: 0.75
    },
    {
      key: "74085497-c36a-43b5-8d5e-ecc1d3aeec28",
      title: "Improvise",
      description: "Improve improvisation chops over high-tempo funk track",
      progress: 0.1
    },
    {
      key: "38d9d028-97f7-4336-a01f-fe6837e53674",
      title: "Compose",
      description: "Finish composing ballad 'I Love My Guitar'",
      progress: 0
    }
  ];

  constructor(props: any) {
    super(props);

    this.state = {
      practiceItems: [
        {
          key: "65979da7-41df-4c73-a7f3-dbdaa5910ebe",
          title: "Learn Purple Haze",
          description: "Play along with song and nail solo",
          practiceTime: new Date(0)
        },
        {
          key: "0ebe0ad0-5fbd-494a-bc0a-09205e9d590e",
          title: "Increase picking speed",
          description: "Practice Paul Gilbert speed picking exericse",
          practiceTime: new Date(0)
        },
        {
          key: "184e0b44-aa5b-4789-9cda-9abc7acf5674",
          title: "Compose",
          description: "Compose that new song",
          practiceTime: new Date(0)
        }
      ]
    };
  }

  render() {
    return (
      <Row className="mt-3">
        <GoalCardColumn bootstrapColumnWidth={3}>
          {this.goalCards.map(props => (
            <GoalCard {...props} />
          ))}
        </GoalCardColumn>

        <PracticeItemCardColumn totalPracticeMinutes={51} bootstrapColumnWidth={4}>
          {this.state.practiceItems.map(props => (
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
