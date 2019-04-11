import { IFooterStore } from './IFooterStore';
import { ISelectionStore } from './ISelectionStore';

export interface IAppStore {
  readonly footerStore: IFooterStore;
  readonly selectionStore: ISelectionStore;
}