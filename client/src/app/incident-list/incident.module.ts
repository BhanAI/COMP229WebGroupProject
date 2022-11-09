import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { IncidentListComponent } from '../incident-list/incident-list.component';
import { AddIncidentComponent } from './add-incident/add-incident.component';
/* import { CounterDirective } from './counter.directive'; */

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [IncidentListComponent, AddIncidentComponent],
  exports: [IncidentListComponent]
})
export class IncidentListModule {}
