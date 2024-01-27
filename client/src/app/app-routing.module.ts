import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InformationComponent } from './pages/information/information.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticalDetailsComponent } from './pages/artical-details/artical-details.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "information/:id", component: InformationComponent },
  { path: "artical/:id", component: ArticalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
