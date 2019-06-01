import React from "react";
import {
  Dialog,
  EditableText,
  Button,
  Intent,
  Icon,
  Classes
} from "@blueprintjs/core";
import { Row, Col } from "react-bootstrap";
import "./EditPracticeItemDialog.css";
import { IconNames } from "@blueprintjs/icons";

export class EditPracticeItemDialog extends React.Component {
  render() {
    return (
      <Dialog
        isOpen={true}
        isCloseButtonShown={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        className="dialog"
      >
        <Row>
          <Col xs={10}>
            <h1>Edit Practice Item</h1>
          </Col>
          <Col xs={2}>
            <Button icon={IconNames.CROSS} minimal={true} className="close-dialog" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h5>
              <EditableText
                selectAllOnFocus={true}
                placeholder="Add title..."
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
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="float-right">
              <Button intent={Intent.NONE}>Cancel</Button>
              <Button
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
