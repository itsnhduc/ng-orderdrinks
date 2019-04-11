import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDrink } from 'src/app/models/ISelectionStore';
import { IAppStore } from 'src/app/models/IAppStore';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private readonly store: Store<IAppStore>) { }

  allDrinks: IDrink[];

  ngOnInit() {
    this.store.select(s => s.selectionStore.allDrinks).subscribe(ad => this.allDrinks = ad);
  }
}
