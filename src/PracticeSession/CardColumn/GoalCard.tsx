import React from "react";
import {
  Button,
  ProgressBar,
  Intent,
  Elevation,
  Card
} from "@blueprintjs/core";

type Props = {
    title: string;
    description: string;
    progress: number;
}

export class GoalCard extends React.Component<Props> {
  render = () => {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        <h5>
          <a href="#">{this.props.title}</a>
        </h5>
        <p>{this.props.description}</p>
        <Button>Details</Button>
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
