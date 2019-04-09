import { Routes } from '@angular/router';

import { SelectionComponent } from './components/selection/selection.component';
import { ReviewComponent } from './components/review/review.component';

export const AppRoutes: Routes = [
  {
    path: 'review',
    component: ReviewComponent,
    data: { title: 'Review Selection' }
  },
  {
    path: 'selection',
    component: SelectionComponent,
    data: { title: 'Drink Selection' }
  },
  {
    path: '',
    redirectTo: '/selection',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/selection'
  }
];