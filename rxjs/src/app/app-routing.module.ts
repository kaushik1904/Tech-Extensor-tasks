import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './component/observable/async-subject/async-subject.component';
import { DebounceTimeComponent } from './component/observable/debounce-time/debounce-time.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { ListComponent } from './component/observable/list/list.component';
import { MapComponent } from './component/observable/map/map.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ReplayComponent } from './component/observable/replay/replay.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { TakeComponent } from './component/observable/take/take.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { PromiseComponent } from './component/promise/promise.component';

const routes: Routes = [
  { path: '', redirectTo: '/promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'map', component: MapComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounceTime', component: DebounceTimeComponent },
      { path: 'replay', component: ReplayComponent },
      { path: 'asyncSubject', component: AsyncSubjectComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
