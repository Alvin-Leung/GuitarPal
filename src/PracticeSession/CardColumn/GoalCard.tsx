import React from "react";
import { ProgressBar, Intent, Elevation, Card } from "@blueprintjs/core";
import { ICardProps } from "./Interfaces";
import { AbstractCard } from "./AbstractCard";

export interface IGoalCardProps extends ICardProps {
  progress: number;
}

export class GoalCard extends AbstractCard<IGoalCardProps> {
  generateCardContent(): React.ReactNode {
    return (
      <div>
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
      </div>
    );
  }
}
