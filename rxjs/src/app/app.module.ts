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
import { TakeComponent } from './component/observable/take/take.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './component/observable/debounce-time/debounce-time.component';
import { ReplayComponent } from './component/observable/replay/replay.component';
import { AsyncSubjectComponent } from './component/observable/async-subject/async-subject.component';
import { ConcatComponent } from './component/observable/concat/concat.component';

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
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    ReplayComponent,
    AsyncSubjectComponent,
    ConcatComponent
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
