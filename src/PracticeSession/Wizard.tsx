import { Button, Intent } from "@blueprintjs/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoalCard, IGoalCardProps } from "./CardColumn/Cards/GoalCard";
import { ICardProps } from "./CardColumn/Cards/Interfaces";
import { PracticeItemCard } from "./CardColumn/Cards/PracticeItemCard";
import { GoalCardColumn } from "./CardColumn/GoalCardColumn";
import { PracticeItemCardColumn } from "./CardColumn/PracticeItemCardColumn";
import { ITotalTime, TotalTimeBuilder } from "./TotalTimeBuilder";
import { EditPracticeItemDialog } from "./EditPracticeItemDialog";
import { SuccessToaster, ErrorToaster } from "../Toaster";
import { PracticeItemService } from "../Services/Interfaces";

interface IPracticeItemLookup {
  [practiceItemId: string]: ICardProps;
}

interface IPracticeTimeLookup {
  [practiceItemId: string]: Date;
}

interface Props {
  readonly practiceItemService: PracticeItemService;
}

interface State {
  readonly practiceItems: IPracticeItemLookup;
  readonly practiceTimes: IPracticeTimeLookup;
  readonly isEditMode: boolean;
  readonly editItemId?: string;
}

export class Wizard extends React.Component<Props, State> {
  private goalCards: IGoalCardProps[] = [
    {
      id: "8b71a16a-9274-417e-8c47-65ac971f29b4",
      title: "Learn Dorian scale",
      description: "Master the dorian scale in 12 keys",
      progress: 0.75
    },
    {
      id: "74085497-c36a-43b5-8d5e-ecc1d3aeec28",
      title: "Improvise",
      description: "Improve improvisation chops over high-tempo funk track",
      progress: 0.1
    },
    {
      id: "38d9d028-97f7-4336-a01f-fe6837e53674",
      title: "Compose",
      description: "Finish composing ballad 'I Love My Guitar'",
      progress: 0
    }
  ];

  public constructor(props: any) {
    super(props);

    this.state = {
      practiceTimes: {},
      practiceItems: {},
      isEditMode: false
    };
  }

  public async componentDidMount() {
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

  public render() {
    return (
      <div>
        <Row className="mt-3">
          <GoalCardColumn bootstrapColumnWidth={3}>
            {this.goalCards.map(goal => (
              <GoalCard key={goal.id} {...goal} />
            ))}
          </GoalCardColumn>

          <PracticeItemCardColumn
            totalPracticeTime={this.getTotalPracticeTime()}
            bootstrapColumnWidth={4}
          >
            {Object.keys(this.state.practiceItems).map(key => (
              <PracticeItemCard
                key={key}
                practiceTime={this.state.practiceTimes[key]}
                onTimeChange={this.onPracticeTimeChange}
                onEdit={this.onEditPracticeItem}
                onRemove={this.onRemovePracticeItem}
                {...this.state.practiceItems[key]}
              />
            ))}
          </PracticeItemCardColumn>

          <Col xs={4}>
            <Button intent={Intent.SUCCESS} icon="arrow-right">
              Start Practice
            </Button>
          </Col>
        </Row>
        {this.state.editItemId && (
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

  private getTotalPracticeTime(): ITotalTime {
    const totalTimeBuilder = new TotalTimeBuilder();

    Object.keys(this.state.practiceItems).forEach(key => {
      totalTimeBuilder.AddTime(this.state.practiceTimes[key]);
    });

    return totalTimeBuilder.Build();
  }

  private onPracticeTimeChange = (newTime: Date, id: string) => {
    let practiceTimes = { ...this.state.practiceTimes };
    practiceTimes[id] = newTime;
    this.setState({
      practiceTimes: practiceTimes
    });
  };

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
          isEditMode: false,
          practiceItems: updatedItems
        });

        SuccessToaster.show("Changes saved successfully!");
      })
      .catch(() => {
        this.setState({
          isEditMode: false,
        });

        ErrorToaster.show("Failed to save changes");
      });
  };

  private onRemovePracticeItem = (id: string) => {
    const updatedItems = { ...this.state.practiceItems };
    const updatedTimes = { ...this.state.practiceTimes };
    delete updatedItems[id];
    delete updatedTimes[id];

    this.setState({
      practiceItems: updatedItems,
      practiceTimes: updatedTimes
    });
  };

  private onCloseOrCancel = () => {
    this.setState({
      isEditMode: false
    });
  };
}
