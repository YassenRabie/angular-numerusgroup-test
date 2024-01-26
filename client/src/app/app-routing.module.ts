import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableDataComponent } from './pages/table-data/table-data.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "table/:id", component: TableDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
