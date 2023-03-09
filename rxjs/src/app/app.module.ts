import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PromiseComponent } from './component/promise/promise.component';
import { ObservableComponent } from './component/observable/observable.component';
import { ListComponent } from './component/observable/list/list.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { MapComponent } from './component/observable/map/map.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { TapComponent } from './component/observable/tap/tap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent,
    FilterComponent,
    TapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
