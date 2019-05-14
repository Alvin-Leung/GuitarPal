import { Intent, ProgressBar, Card, Elevation } from "@blueprintjs/core";
import React from "react";
import { ICardProps } from "./Interfaces";

export interface IGoalCardProps extends ICardProps {
  progress: number;
}

export class GoalCard extends React.Component<IGoalCardProps> {
  render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <h5>
          <a href="#">{this.props.title}</a>
        </h5>
        <p>{this.props.description}</p>
        <ProgressBar
          intent={Intent.SUCCESS}
          stripes={false}
          value={this.props.progress}
          className="mt-3"
        />
      </Card>
    );
  }
}
