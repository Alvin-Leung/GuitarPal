import { IGoalCardProps } from "../PracticeSession/CardColumn/Cards/GoalCard";
import { GoalItemService } from "./Interfaces";

var allGoalItems: IGoalCardProps[] = [
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

export class FakeGoalItemService implements GoalItemService {
  public async getAllGoalItems(): Promise<IGoalCardProps[]> {
    return allGoalItems;
  }
}
