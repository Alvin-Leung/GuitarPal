import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoalCard, IGoalCardProps } from "./CardColumn/Cards/GoalCard";
import { GoalCardColumn } from "./CardColumn/GoalCardColumn";
import { PracticeItemCard } from "./CardColumn/Cards/PracticeItemCard";
import { PracticeItemCardColumn } from "./CardColumn/PracticeItemCardColumn";
import { ICardProps } from "./CardColumn/Cards/Interfaces";
import { TotalTimeBuilder, ITotalTime } from "./TotalTimeBuilder";

interface IPracticeTimeLookup {
  [practiceItemId: string]: Date
}

interface State {
  readonly practiceItems: ICardProps[],
  readonly practiceTimes: IPracticeTimeLookup
}

export class Wizard extends React.Component<any, State> {
  private goalCards: IGoalCardProps[] = [
    {
      id: "8b71a16a-9274-417e-8c47-65ac971f29b4",
      title: "Learn Dorian scale",
      description: "Master the dorian scale in 12 keys",
      progress: 0.75
    },
    {
      id: "74085497-c36a-43b5-8d5e-ecc1d3aeec28",
      title: "Improvise",
      description: "Improve improvisation chops over high-tempo funk track",
      progress: 0.1
    },
    {
      id: "38d9d028-97f7-4336-a01f-fe6837e53674",
      title: "Compose",
      description: "Finish composing ballad 'I Love My Guitar'",
      progress: 0
    }
  ];

  public constructor(props: any) {
    super(props);

    this.state = {
      practiceTimes: {},
      practiceItems: [
        {
          id: "65979da7-41df-4c73-a7f3-dbdaa5910ebe",
          title: "Learn Purple Haze",
          description: "Play along with song and nail solo"
        },
        {
          id: "0ebe0ad0-5fbd-494a-bc0a-09205e9d590e",
          title: "Increase picking speed",
          description: "Practice Paul Gilbert speed picking exericse"
        },
        {
          id: "184e0b44-aa5b-4789-9cda-9abc7acf5674",
          title: "Compose",
          description: "Compose that new song"
        }
      ]
    };
  }

  public render() {
    return (
      <Row className="mt-3">
        <GoalCardColumn bootstrapColumnWidth={3}>
          {this.goalCards.map(goal => (
            <GoalCard key={goal.id} {...goal} />
          ))}
        </GoalCardColumn>

        <PracticeItemCardColumn
          totalPracticeTime={this.getTotalPracticeTime()}
          bootstrapColumnWidth={4}
        >
          {this.state.practiceItems.map(practiceItem => (
            <PracticeItemCard key={practiceItem.id} practiceTime={this.state.practiceTimes[practiceItem.id]} onTimeChange={this.onPracticeTimeChange} {...practiceItem} />
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

  private getTotalPracticeTime(): ITotalTime {
    const totalTimeBuilder = new TotalTimeBuilder();

    this.state.practiceItems.forEach(practiceItem => {
      totalTimeBuilder.AddTime(this.state.practiceTimes[practiceItem.id]);
    });

    return totalTimeBuilder.Build();
  }

  private onPracticeTimeChange = (newTime: Date, id: string) => {
    let practiceTimes = {...this.state.practiceTimes};
    practiceTimes[id] = newTime;
    this.setState({
      practiceTimes: practiceTimes
    });
  }
}
