import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { UserlistComponent } from './page/userlist/userlist.component';
import { ProfileComponent } from './page/profile/profile.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileCardComponent } from './component/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserlistComponent,
    ProfileComponent,
    NavbarComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
