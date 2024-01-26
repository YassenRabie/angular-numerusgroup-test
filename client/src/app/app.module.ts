import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { InformationComponent } from './pages/information/information.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    SideMenuComponent,
    InformationComponent,
    DynamicTableComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
