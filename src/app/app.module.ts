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
import { FooterActions } from './actions/footer.actions';
import { EffectsModule } from '@ngrx/effects';
import { FooterEffects } from './effects/footer.effects';

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
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([FooterEffects])
  ],
  providers: [
    FooterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
