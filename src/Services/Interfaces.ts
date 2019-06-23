import { ICardProps } from "../PracticeSession/CardColumn/Cards/Interfaces";
import { IGoalCardProps } from "../PracticeSession/CardColumn/Cards/GoalCard";

export interface GoalItemService {
    getAllGoalItems(): Promise<IGoalCardProps[]>;
}

export interface PracticeItemService {
    getLastPracticeSessionItems(): Promise<ICardProps[]>;
    getPracticeItemsByParentId(parentId: string): Promise<ICardProps[]>;
    editPracticeItem(editedItem: ICardProps): Promise<void>;
    deletePracticeItem(id: string): Promise<void>;
}