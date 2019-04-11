import { Component, OnInit, Input } from '@angular/core';
import { IDrink } from 'src/app/models/ISelectionStore';
import { SelectionActions } from 'src/app/actions/selection.actions';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  @Input() interactive: boolean;
  @Input() drink: IDrink;

  constructor(private readonly selectionActions: SelectionActions) { }

  ngOnInit() {
  }

  onAddClick(drink: IDrink) {
    if (this.interactive) {
      this.selectionActions.changeQuantity(drink, 1);
    }
  }
  onSubtractClick(drink: IDrink) {
    if (this.interactive) {
      this.selectionActions.changeQuantity(drink, -1);
    }
  }

}
