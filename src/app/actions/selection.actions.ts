import { IAction } from './IActions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../models/IAppStore';
import { IDrink } from '../models/ISelectionStore';

export type SelectionAction = IAction;

export enum SelectionActionType {
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
  CLEAR_ALL = 'CLEAR_ALL'
}

export class ChangeQuantityAction implements SelectionAction {
  readonly type = SelectionActionType.CHANGE_QUANTITY;
  constructor(public payload: { drink: IDrink, offset: number }) { }
}

@Injectable()
export class SelectionActions {
  constructor(private readonly store: Store<IAppStore>) { }

  changeQuantity(drink: IDrink, offset: number) {
    this.store.dispatch(new ChangeQuantityAction({ drink, offset }));
  }
}