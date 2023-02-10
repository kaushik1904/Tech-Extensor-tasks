import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmpListComponent } from './services/emp-list/emp-list.component';
import { EmpDetailComponent } from './services/emp-detail/emp-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    StructuralDirectivesComponent,
    ComponentInteractionComponent,
    PipesComponent,
    ServicesComponent,
    EmpListComponent,
    EmpDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
