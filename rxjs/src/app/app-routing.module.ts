import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './component/observable/observable.component';
import { PromiseComponent } from './component/promise/promise.component';

const routes: Routes = [
  { path: '', redirectTo: '/promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
