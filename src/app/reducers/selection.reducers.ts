import { SelectionAction, SelectionActionType, ChangeQuantityAction } from '../actions/selection.actions';
import { ISelectionStore } from '../models/ISelectionStore';
import { modifyQuantity, allDrinks } from './selection.helpers';

function getAllDrinks() {
  return allDrinks.map(d => ({...d, quantity: 0}));
}

export const initialState: ISelectionStore = {
  allDrinks: getAllDrinks()
};

export function selectionReducer(state = initialState, action: SelectionAction) {
  switch (action.type) {

    case SelectionActionType.CHANGE_QUANTITY:
      const curAction = action as ChangeQuantityAction;
      const drink = curAction.payload.drink;
      const offset = curAction.payload.offset;
      return { ...state, allDrinks: modifyQuantity(state.allDrinks, drink, offset) };

    case SelectionActionType.CLEAR_ALL:
      return { ...state, allDrinks: getAllDrinks() };

    default:
      return state;

  }
}
