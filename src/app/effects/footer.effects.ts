import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FooterActionType, PressOkAction } from '../actions/footer.actions';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class FooterEffects {

  constructor(private readonly actions$: Actions, private readonly router: Router) { }

  @Effect({ dispatch: false })
  navigateToPage$ = this.actions$.pipe(
    ofType(FooterActionType.PRESS_OK),
    tap(action => {
      const nextRoute = (action as PressOkAction).payload.nextRoute
      this.router.navigate([nextRoute])
    })
  )

}