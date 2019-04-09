import { IAction } from './IActions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../stores/IAppStore';

export type FooterAction = IAction;

export enum FooterActionType {
  PRESS_OK = 'PRESS_OK'
}

export class PressOkAction implements FooterAction {
  readonly type = FooterActionType.PRESS_OK;
  constructor(public payload: { currentRoute: string, nextRoute: string }) { }
}

@Injectable()
export class FooterActions {
  constructor(private readonly store: Store<IAppStore>) { }
  
  pressOk(currentRoute: string, nextRoute: string) {
    this.store.dispatch(new PressOkAction({ currentRoute, nextRoute }));
  }
}