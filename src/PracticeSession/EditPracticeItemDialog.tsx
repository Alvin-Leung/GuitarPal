import React from "react";
import { Dialog, EditableText, Button, Intent, Alert } from "@blueprintjs/core";
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
  // TODO: Explictly declare access modifiers to methods
  handleDialogOpening = () => {
    this.setState({
      practiceCard: this.props.initialPracticeCard,
      openExitConfirmationDialog: false
    });
  };

  handleCloseOrCancel = () => {
    if (this.areChangesPresent()) {
      this.showExitConfirmationDialog();
    } else {
      this.props.onCloseOrCancel();
    }
  };

  handleSave = () => {
    if (this.areRequiredFieldsMissing()) {
      ErrorToaster.show("Please populate title before saving");
    } else {
      this.props.onSave(this.state.practiceCard);
    }
  };

  handleTitleChange = (newTitle: string) => {
    this.setState({
      practiceCard: { ...this.state.practiceCard, ...{ title: newTitle } }
    });
  };

  handleDescriptionChange = (newDescription: string) => {
    this.setState({
      practiceCard: {
        ...this.state.practiceCard,
        ...{ description: newDescription }
      }
    });
  };

  closeWithUnsavedEdits = () => {
    this.hideExitAlert();
    this.props.onCloseOrCancel();
  };

  showExitConfirmationDialog = () => {
    this.setState({
      openExitConfirmationDialog: true
    });
  };

  hideExitAlert = () => {
    this.setState({
      openExitConfirmationDialog: false
    });
  };

  areChangesPresent = (): boolean => {
    return (
      this.state.practiceCard.title !== this.props.initialPracticeCard.title ||
      this.state.practiceCard.description !==
        this.props.initialPracticeCard.description
    );
  };

  areRequiredFieldsMissing = (): boolean => {
    return (
      this.state.practiceCard.title === ""
    );
  };

  render() {
    return (
      <div>
        {this.state && (
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
        )}
        // TODO: Use provided properties for displaying title and close button
        <Dialog
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          isOpen={this.props.isOpen}
          onOpening={this.handleDialogOpening}
          onClose={this.handleCloseOrCancel}
          className="dialog"
        >
          <Row>
            <Col xs={10}>
              <h1>Edit Practice Item</h1>
            </Col>
            <Col xs={2}>
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
                {this.state && (
                  <EditableText
                    selectAllOnFocus={true}
                    placeholder="Add title..."
                    value={this.state.practiceCard.title}
                    onChange={this.handleTitleChange}
                  />
                )}
              </h5>
            </Col>
          </Row>
          <Row className="description">
            <Col xs={12}>
              {this.state && (
                <EditableText
                  multiline={true}
                  minLines={15}
                  maxLines={30}
                  placeholder="Add description..."
                  value={this.state.practiceCard.description}
                  onChange={this.handleDescriptionChange}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="float-right">
                <Button onClick={this.handleCloseOrCancel} intent={Intent.NONE}>
                  Cancel
                </Button>
                <Button
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
        </Dialog>
      </div>
    );
  }
}
