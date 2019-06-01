import { Card, Elevation, Intent, ProgressBar } from "@blueprintjs/core";
import React from "react";
import "./Card.css";
import { EditLink } from "./EditLink";
import { ICardProps } from "./Interfaces";

export interface IGoalCardProps extends ICardProps {
  progress: number;
}

export class GoalCard extends React.Component<IGoalCardProps> {
  public render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <EditLink text={this.props.title} onClick={() => {}}/>
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
