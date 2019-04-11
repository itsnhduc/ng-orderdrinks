import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/models/IAppStore';
import { IDrink } from 'src/app/models/ISelectionStore';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private readonly store: Store<IAppStore>) { }

  allDrinks: IDrink[];

  ngOnInit() {
    this.store.select(s => s.selectionStore.allDrinks.filter(d => d.quantity !== 0)).subscribe(ad => this.allDrinks = ad);
  }

}
