import React from "react";
import { Col, Row } from "react-bootstrap";
import { ITotalTime, TotalTimeBuilder } from "../TotalTimeBuilder";
import { CardColumn } from "./CardColumn";
import { ICardProps } from "./Cards/Interfaces";
import { PracticeItemCard } from "./Cards/PracticeItemCard";

interface IPracticeItemLookup {
  [practiceItemId: string]: ICardProps;
}

interface IPracticeTimeLookup {
  [practiceItemId: string]: Date;
}

interface State {
  readonly practiceTimes: IPracticeTimeLookup;
}

export interface IPracticeCardColumnProps {
  readonly practiceItems: IPracticeItemLookup;
  readonly bootstrapColumnWidth: number;
  readonly onEditPracticeItem: (id: string) => void;
  readonly onRemovePracticeItem: (id: string) => void;
}

export class PracticeItemCardColumn extends React.Component<
  IPracticeCardColumnProps,
  State
> {
  public constructor(props: any) {
    super(props);

    this.state = {
      practiceTimes: {}
    };
  }

  public render() {
    const totalPracticeTime = this.getTotalPracticeTime();

    const totalPracticeTimeText =
      totalPracticeTime.hours === 0
        ? `Total Time: ${totalPracticeTime.minutes} mins`
        : `Total Time: ${totalPracticeTime.hours} hours ${
            totalPracticeTime.minutes
          } mins`;

    return (
      <CardColumn
        bootstrapColumnWidth={this.props.bootstrapColumnWidth}
        header={
          <Row>
            <Col xs={5}>
              <span className="btn btn-sm">
                <b>{React.Children.count(this.props.children)}</b> Practice
                Items
              </span>
            </Col>
            <Col xs={7}>
              <span className="float-right btn btn-sm">
                <em>{totalPracticeTimeText}</em>
              </span>
            </Col>
          </Row>
        }
        cards={Object.keys(this.props.practiceItems).map(key => (
          <PracticeItemCard
            key={key}
            practiceTime={this.state.practiceTimes[key]}
            onTimeChange={this.onPracticeTimeChange}
            onEdit={this.props.onEditPracticeItem}
            onRemove={this.onRemovePracticeItem}
            {...this.props.practiceItems[key]}
          />
        ))}
      />
    );
  }

  private onRemovePracticeItem = (id: string) => {
    const updatedTimes = { ...this.state.practiceTimes };
    delete updatedTimes[id];

    this.setState({
      practiceTimes: updatedTimes
    });

    this.props.onRemovePracticeItem(id);
  };

  private onPracticeTimeChange = (newTime: Date, id: string) => {
    let practiceTimes = { ...this.state.practiceTimes };
    practiceTimes[id] = newTime;
    this.setState({
      practiceTimes: practiceTimes
    });
  };

  private getTotalPracticeTime(): ITotalTime {
    const totalTimeBuilder = new TotalTimeBuilder();

    Object.keys(this.props.practiceItems).forEach(key => {
      totalTimeBuilder.AddTime(this.state.practiceTimes[key]);
    });

    return totalTimeBuilder.Build();
  }
}
