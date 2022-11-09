import { Component, OnInit } from '@angular/core';
import { Incident } from '../model/incident.model';
import { IncidentRepository } from './../model/incident.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  public selectedUser = null;
  public incidentsPerPage = 4;
  public selectedPage = 1;


  constructor(private repository: IncidentRepository,
    private router: Router) { }

  get incidents(): Incident[]
  {
    const pageIndex = (this.selectedPage - 1) * this.incidentsPerPage;
    return this.repository.getIncidents(this.selectedUser)
    .slice(pageIndex, pageIndex + this.incidentsPerPage);
  }

  get users(): string[]
  {
    return this.repository.getUsers();
  }

  addIncident(incident: Incident): void {
    
    this.router.navigateByUrl('/addIncident');
  }

  ngOnInit(): void {
  }

}
