import React from "react";
import { Dialog, EditableText, Button, Intent } from "@blueprintjs/core";
import { Row, Col } from "react-bootstrap";
import "./EditPracticeItemDialog.css";
import { IconNames } from "@blueprintjs/icons";
import { ICardProps } from "./CardColumn/Cards/Interfaces";

export interface Props {
  readonly isOpen: boolean;
  readonly practiceCard: ICardProps;
  readonly onSave: (cardProps: ICardProps) => void;
  readonly onCloseOrCancel: () => void;
}

export class EditPracticeItemDialog extends React.Component<Props> {
  handleCloseOrCancel = () => {console.log('cancel')};

  handleSave = () => {console.log('save')};

  render() {
    return (
      <Dialog
        isCloseButtonShown={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        isOpen={this.props.isOpen}
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
              <EditableText
                selectAllOnFocus={true}
                placeholder="Add title..."
                value={this.props.practiceCard.title}
              />
            </h5>
          </Col>
        </Row>
        <Row className="description">
          <Col xs={12}>
            <EditableText
              multiline={true}
              minLines={15}
              maxLines={30}
              placeholder="Add description..."
              value={this.props.practiceCard.description}
            />
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
    );
  }
}
