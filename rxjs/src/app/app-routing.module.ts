import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './component/observable/filter/filter.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { ListComponent } from './component/observable/list/list.component';
import { MapComponent } from './component/observable/map/map.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
