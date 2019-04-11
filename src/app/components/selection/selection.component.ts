import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDrink } from 'src/app/models/ISelectionStore';
import { IAppStore } from 'src/app/models/IAppStore';
import { SelectionActions } from 'src/app/actions/selection.actions';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private readonly store: Store<IAppStore>, private readonly selectionActions: SelectionActions) { }

  allDrinks: IDrink[];

  ngOnInit() {
    this.store.select(s => s.selectionStore.allDrinks).subscribe(ad => this.allDrinks = ad);
  }

  onAddClick(drink: IDrink) {
    this.selectionActions.changeQuantity(drink, 1);
  }
  onSubtractClick(drink: IDrink) {
    this.selectionActions.changeQuantity(drink, -1);
  }
  onClearClick(drink: IDrink) {
    this.selectionActions.changeQuantity(drink, -drink.quantity);
  }
  onClearAllClick() {
    this.selectionActions.clearAll();
  }

}
