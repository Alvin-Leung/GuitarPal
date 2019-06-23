import { ICardProps } from "../PracticeSession/CardColumn/Cards/Interfaces";

var allPracticeItems: ICardProps[] = [
  {
    id: "65979da7-41df-4c73-a7f3-dbdaa5910ebe",
    title: "Learn Purple Haze",
    description: "Play along with song and nail solo"
  },
  {
    id: "0ebe0ad0-5fbd-494a-bc0a-09205e9d590e",
    title: "Increase picking speed",
    description: "Practice Paul Gilbert speed picking exericse"
  },
  {
    id: "184e0b44-aa5b-4789-9cda-9abc7acf5674",
    title: "Compose",
    description: "Compose that new song"
  }
];

export default class PracticeItemService {
    public async getLastPracticeSessionItems(): Promise<ICardProps[]> {
        // TODO: Replace this with API call for getting practice items from a user's last practice
        return allPracticeItems;
    }

    public async getPracticeItemsByParentId(parentId: string): Promise<ICardProps[]> {
        // TODO: Replace this with API call for getting practice items associated with goal item
        return allPracticeItems;
    }

    public async editPracticeItem(editedItem: ICardProps) {
        // TODO: Quick dirty logic until swap with API call
        allPracticeItems = allPracticeItems.map(practiceItem => editedItem.id == practiceItem.id ? editedItem : practiceItem);
    }

    public async deletePracticeItem(id: string) {
        // TODO: Quick dirty logic until swap with API call
        allPracticeItems = allPracticeItems.filter(practiceItem => practiceItem.id != id);
    }
}
