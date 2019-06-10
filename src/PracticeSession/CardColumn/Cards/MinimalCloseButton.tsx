import React from "react";
import { Icon, Colors } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import "./Card.css";

export interface Props {
  readonly onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface State {
  readonly isMouseOver: boolean;
}

export class MinimalCloseButton extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      isMouseOver: false
    };
  }

  public render() {
    return (
      <Icon
        icon={IconNames.CROSS}
        color={this.state.isMouseOver ? Colors.GRAY1 : Colors.GRAY5}
        iconSize={14}
        className="close-button"
        onClick={this.props.onClick}
        onMouseEnter={this.toggleMouseOver}
        onMouseLeave={this.toggleMouseOver}
      />
    );
  }

  private toggleMouseOver = () => {
    this.setState({
      isMouseOver: !this.state.isMouseOver
    });
  }
}
