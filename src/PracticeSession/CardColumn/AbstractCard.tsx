import { Card, Elevation } from "@blueprintjs/core";
import React from "react";
import { ICardProps } from "./Interfaces";

export abstract class AbstractCard<
  T extends ICardProps
> extends React.Component<T> {
  abstract generateCardContent(): React.ReactNode;

  render() {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="mt-2">
        {this.generateCardContent()}
      </Card>
    );
  }
}
