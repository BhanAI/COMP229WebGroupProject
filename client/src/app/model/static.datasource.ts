import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private Incidents: Incident[] =
  [
    new Incident(1, '2022-10-05', 'High', 'User1', 'Short Description 1' , 'In progress'),
    new Incident(2, '2022-10-06', 'High', 'User2', 'Short Description 2' , 'In progress'),
    new Incident(3, '2022-10-07', 'High', 'User3', 'Short Description 3' , 'In progress'),
    new Incident(4, '2022-10-08', 'High', 'User4', 'Short Description 4' , 'In progress'),
    new Incident(5, '2022-10-09', 'High', 'User5', 'Short Description 5' , 'In progress'),
    new Incident(6, '2022-10-10', 'High', 'User6', 'Short Description 6' , 'In progress'),
    
  ];

  getIncidents(): Observable<Incident[]>
  {
    return from([this.Incidents]);
  }
}
