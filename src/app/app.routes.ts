import { Routes } from '@angular/router';
import { ViewResidentsComponent } from './view-residents/view-residents.component';
import { AddResidentComponent } from './add-resident/add-resident.component';
import { EditResidentComponent } from './edit-resident/edit-resident.component';

export const routes: Routes = [
    { path: '', component:ViewResidentsComponent }, 
    { path: 'create', component:AddResidentComponent },
    { path: 'residents/:id', component:EditResidentComponent}
  ];
