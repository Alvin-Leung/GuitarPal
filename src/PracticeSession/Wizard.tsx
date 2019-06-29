import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoalItemService, PracticeItemService } from "../Services/Interfaces";
import { ErrorToaster, SuccessToaster } from "../Toaster";
import { GoalCard, IGoalCardProps } from "./CardColumn/Cards/GoalCard";
import { ICardProps } from "./CardColumn/Cards/Interfaces";
import { GoalCardColumn } from "./CardColumn/GoalCardColumn";
import { PracticeItemCardColumn } from "./CardColumn/PracticeItemCardColumn";
import { EditPracticeItemDialog } from "./EditPracticeItemDialog";

interface IPracticeItemLookup {
  [practiceItemId: string]: ICardProps;
}

interface Props {
  readonly goalItemService: GoalItemService;
  readonly practiceItemService: PracticeItemService;
}

interface State {
  readonly goalItems: IGoalCardProps[];
  readonly practiceItems: IPracticeItemLookup;
  readonly isEditMode: boolean;
  readonly editItemId: string;
}

export class Wizard extends React.Component<Props, State> {
  public constructor(props: any) {
    super(props);

    this.state = {
      goalItems: [],
      practiceItems: {},
      isEditMode: false,
      editItemId: ""
    };
  }

  public async componentDidMount() {
    await this.UpdateStateWithGoals();
    await this.UpdateStateWithLastPracticeSessionItems();
  }

  public render() {
    return (
      <div>
        <Row className="mt-3">
          <GoalCardColumn bootstrapColumnWidth={3}>
            {this.state.goalItems.map(goal => (
              <GoalCard key={goal.id} {...goal} />
            ))}
          </GoalCardColumn>

          <PracticeItemCardColumn
            practiceItems={this.state.practiceItems}
            bootstrapColumnWidth={4}
            onEditPracticeItem={this.onEditPracticeItem}
            onRemovePracticeItem={this.onRemovePracticeItem}
          />

          <Col xs={4}>
            <Button intent={Intent.SUCCESS} icon="arrow-right">
              Start Practice
            </Button>
          </Col>
        </Row>
        {this.state.isEditMode && (
          <EditPracticeItemDialog
            isOpen={this.state.isEditMode}
            initialPracticeCard={
              this.state.practiceItems[this.state.editItemId]
            }
            onSave={this.onSavePracticeItem}
            onCloseOrCancel={this.onCloseOrCancel}
          />
        )}
      </div>
    );
  }

  private async UpdateStateWithGoals() {
    try {
      const allGoalItems = await this.props.goalItemService.getAllGoalItems();

      this.setState({
        goalItems: allGoalItems
      });
    } catch {
      ErrorToaster.show("Could not get goal items");
    }
  }

  private async UpdateStateWithLastPracticeSessionItems() {
    const practiceItemLookup: IPracticeItemLookup = {};
    try {
      // TODO: Show loading component in practice item column
      const lastPracticeSessionItems = await this.props.practiceItemService.getLastPracticeSessionItems();
      lastPracticeSessionItems.forEach(item => {
        practiceItemLookup[item.id] = item;
      });
      this.setState({
        practiceItems: practiceItemLookup
      });
    } catch {
      ErrorToaster.show("Could not get practice items");
    }
  }

  private onEditPracticeItem = (id: string) => {
    this.setState({
      isEditMode: true,
      editItemId: id
    });
  };

  private onSavePracticeItem = (editedItem: ICardProps) => {
    this.props.practiceItemService
      .editPracticeItem(editedItem)
      .then(() => {
        const updatedItems = { ...this.state.practiceItems };
        updatedItems[editedItem.id] = editedItem;

        this.setState({
          practiceItems: updatedItems
        });

        this.onCloseOrCancel();
        SuccessToaster.show("Changes saved successfully!");
      })
      .catch(() => {
        this.onCloseOrCancel();
        ErrorToaster.show("Failed to save changes");
      });
  };

  private onRemovePracticeItem = (id: string) => {
    const updatedItems = { ...this.state.practiceItems };
    delete updatedItems[id];

    this.setState({
      practiceItems: updatedItems,
    });
  };

  private onCloseOrCancel = () => {
    this.setState({
      isEditMode: false,
      editItemId: ""
    });
  };
}
