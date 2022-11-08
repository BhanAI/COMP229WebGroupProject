import { NgModule } from '@angular/core';
import { IncidentRepository} from './incident.repository';
import { StaticDataSource } from './static.datasource';

//import { Cart } from './cart.model'; 
//import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource'

@NgModule({
  imports: [HttpClientModule],
  providers: [IncidentRepository, StaticDataSource, 
  {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule {}
