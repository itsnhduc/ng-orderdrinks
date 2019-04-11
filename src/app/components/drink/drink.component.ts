import { Component, OnInit, Input } from '@angular/core';
import { IDrink } from 'src/app/models/ISelectionStore';
import { SelectionActions } from 'src/app/actions/selection.actions';
import { pulseOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  animations: [
    pulseOnEnterAnimation({ duration: 400, scale: 1.03 })
  ]
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
