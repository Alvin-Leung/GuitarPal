export interface ICardProps {
    id: string;
    title: string;
    description: string;
}

export interface CardState {
  readonly isHoveringOverHeader: boolean;
}