import { FooterActionType, FooterAction, PressOkAction } from '../actions/footer.actions';

export const initialState = {
  route: 'selection'
};

export function footerReducer(state = initialState, action: FooterAction) {
  switch (action.type) {
    case FooterActionType.PRESS_OK:
      return { ...state, route: (action as PressOkAction).payload.nextRoute };

    default:
      return state;
  }
}