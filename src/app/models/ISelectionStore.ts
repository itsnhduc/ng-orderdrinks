export interface ISelectionStore {
  allDrinks: IDrink[];
}

export interface IDrink {
  name: string;
  type: string;
  quantity?: number;
}