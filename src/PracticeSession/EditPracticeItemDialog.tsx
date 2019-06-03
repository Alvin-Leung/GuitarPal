import React from "react";
import {
  Dialog,
  EditableText,
  Button,
  Intent,
  Alert,
  Icon,
  Classes
} from "@blueprintjs/core";
import { Row, Col } from "react-bootstrap";
import "./EditPracticeItemDialog.css";
import { IconNames } from "@blueprintjs/icons";
import { ICardProps } from "./CardColumn/Cards/Interfaces";
import { ErrorToaster } from "../Toaster";

export interface Props {
  readonly isOpen: boolean;
  readonly initialPracticeCard: ICardProps;
  readonly onSave: (practiceItem: ICardProps) => void;
  readonly onCloseOrCancel: () => void;
}

export interface State {
  practiceCard: ICardProps;
  openExitConfirmationDialog: boolean;
}

export class EditPracticeItemDialog extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      practiceCard: { id: "", title: "", description: "" },
      openExitConfirmationDialog: false
    };
  }

  public render() {
    return (
      <div>
        <Alert
          isOpen={this.state.openExitConfirmationDialog}
          cancelButtonText={"Cancel"}
          onConfirm={this.closeWithUnsavedEdits}
          onCancel={this.hideExitAlert}
          intent={Intent.PRIMARY}
          icon={IconNames.ERROR}
        >
          Exit with unsaved changes?
        </Alert>

        <Dialog
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          isOpen={this.props.isOpen}
          onOpening={this.handleDialogOpening}
          onClose={this.handleCloseOrCancel}
          className="dialog"
        >
          <div className="header">
            <Row>
              <Col xs={11}>
                <p className={Classes.TEXT_MUTED}>
                  <Icon
                    icon={IconNames.EDIT}
                    intent={Intent.PRIMARY}
                    iconSize={12}
                  />{" "}
                  Edit Practice Item
                </p>
              </Col>
              <Col xs={1}>
                <Button
                  onClick={this.handleCloseOrCancel}
                  icon={IconNames.CROSS}
                  minimal={true}
                  className="close-dialog"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h5>
                  <EditableText
                    selectAllOnFocus={true}
                    placeholder="Add title..."
                    value={this.state.practiceCard.title}
                    onChange={this.handleTitleChange}
                  />
                </h5>
              </Col>
            </Row>
          </div>
          <div className="dialog-body">
            <Row>
              <Col xs={12}>
                <p className={Classes.TEXT_MUTED}>Description:</p>
              </Col>
            </Row>
            <Row className="description">
              <Col xs={12}>
                <EditableText
                  multiline={true}
                  minLines={15}
                  maxLines={30}
                  placeholder="Add description..."
                  value={this.state.practiceCard.description}
                  onChange={this.handleDescriptionChange}
                />
              </Col>
            </Row>
          </div>
          <div className="dialog-footer">
            <Row>
              <Col xs={12}>
                <div className="float-right">
                  <Button
                    onClick={this.handleCloseOrCancel}
                    intent={Intent.NONE}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!this.areChangesPresent()}
                    onClick={this.handleSave}
                    intent={Intent.PRIMARY}
                    icon={IconNames.FLOPPY_DISK}
                    className="save-button"
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Dialog>
      </div>
    );
  }

  private handleDialogOpening = () => {
    this.setState({
      practiceCard: this.props.initialPracticeCard
    });
  };

  private handleCloseOrCancel = () => {
    if (this.areChangesPresent()) {
      this.showExitConfirmationDialog();
    } else {
      this.props.onCloseOrCancel();
    }
  };

  private handleSave = () => {
    if (this.areRequiredFieldsMissing()) {
      ErrorToaster.show("Please populate title before saving");
    } else {
      this.props.onSave(this.state.practiceCard);
    }
  };

  private handleTitleChange = (newTitle: string) => {
    this.setState({
      practiceCard: { ...this.state.practiceCard, ...{ title: newTitle } }
    });
  };

  private handleDescriptionChange = (newDescription: string) => {
    this.setState({
      practiceCard: {
        ...this.state.practiceCard,
        ...{ description: newDescription }
      }
    });
  };

  private closeWithUnsavedEdits = () => {
    this.hideExitAlert();
    this.props.onCloseOrCancel();
  };

  private showExitConfirmationDialog = () => {
    this.setState({
      openExitConfirmationDialog: true
    });
  };

  private hideExitAlert = () => {
    this.setState({
      openExitConfirmationDialog: false
    });
  };

  private areChangesPresent = (): boolean => {
    return (
      this.state.practiceCard.title !== this.props.initialPracticeCard.title ||
      this.state.practiceCard.description !==
        this.props.initialPracticeCard.description
    );
  };

  private areRequiredFieldsMissing = (): boolean => {
    return this.state.practiceCard.title === "";
  };
}
