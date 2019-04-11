import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ReviewComponent } from './components/review/review.component';
import { FooterComponent } from './layout/footer/footer.component';
import { rootReducer } from './reducers/rootReducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SelectionActions } from './actions/selection.actions';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SelectionComponent,
    ReviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    SelectionActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
