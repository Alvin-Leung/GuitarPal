import { ICardProps } from "../PracticeSession/CardColumn/Cards/Interfaces";

export interface PracticeItemService {
    getLastPracticeSessionItems(): Promise<ICardProps[]>;
    getPracticeItemsByParentId(parentId: string): Promise<ICardProps[]>;
    editPracticeItem(editedItem: ICardProps): Promise<void>;
    deletePracticeItem(id: string): Promise<void>;
}