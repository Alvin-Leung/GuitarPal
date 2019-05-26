import { Intent, ProgressBar, Card, Elevation, Icon } from "@blueprintjs/core";
import React from "react";
import { ICardProps, CardState } from "./Interfaces";
import { IconNames } from "@blueprintjs/icons";
import "./Card.css";

export interface IGoalCardProps extends ICardProps {
  progress: number;
}

export class GoalCard extends React.Component<IGoalCardProps, CardState> {
  public constructor(props: IGoalCardProps) {
    super(props);
    this.state = {
      isHoveringOverHeader: false
    };
  }

  public render(): React.ReactNode {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <h5>
          <a
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            href="#"
          >
            {this.props.title}{" "}
            {this.state.isHoveringOverHeader && (
              <Icon icon={IconNames.EDIT} intent={Intent.PRIMARY} />
            )}
          </a>
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

  private handleMouseHover = () => {
    this.setState({
      isHoveringOverHeader: !this.state.isHoveringOverHeader
    });
  }
}
