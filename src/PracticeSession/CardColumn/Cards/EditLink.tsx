import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import "./Card.css";

export interface Props {
  readonly text: string;
}

interface State {
  readonly isHovering: boolean;
}

export class EditLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  public render() {
    return (
      <h5>
        <a
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          href="#"
        >
          {this.props.text}
          {this.state.isHovering && (
            <Icon icon={IconNames.EDIT} intent={Intent.PRIMARY} />
          )}
        </a>
      </h5>
    );
  }

  private handleMouseHover = () => {
    this.setState({
      isHovering: !this.state.isHovering
    });
  };
}
