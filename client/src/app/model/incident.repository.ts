import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class IncidentRepository
{
  private incidents: Incident[] = [];
  private users: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getIncidents().subscribe(data => {
      this.incidents = data;
      this.users = data.map(b => b.user)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getIncidents(user: string | null): Incident[]
  {
    return this.incidents;
    //   .filter(b => user == null || user === b.user);
  }

//     getIncident(id: number): Incident
//   {
//     return this.incidents.find(b => b._id === id);
//   }

  getUsers(): string[]
  {
    return this.users;
  }
}
