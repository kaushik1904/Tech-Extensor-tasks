import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { LoginComponent } from './common/components/login/login.component';
import { RegisterComponent } from './common/components/register/register.component';
import { UserlistingComponent } from './common/components/userlisting/userlisting.component';
import { ActiveUserGuard } from './shared/active-user.guard';
import { AuthAdminGuard } from './shared/auth-admin.guard';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user',
    component: UserlistingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: RegisterComponent,
    canActivate: [AuthGuard, AuthAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
