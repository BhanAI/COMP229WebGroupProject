import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { IncidentListComponent } from './incident-list/incident-list.component';
import { AddIncidentComponent } from './incident-list/add-incident/add-incident.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'incident-list', component: IncidentListComponent, data: { title: 'Incidents List'}},
  {path: 'addIncident', component:  AddIncidentComponent, data: {title: 'Add Incident'}},
  {path: '', redirectTo:'/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
