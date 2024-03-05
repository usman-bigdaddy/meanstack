import { Routes } from '@angular/router';
import { ViewResidentsComponent } from './view-residents/view-residents.component';
import { AddResidentComponent } from './add-resident/add-resident.component';
import { EditResidentComponent } from './edit-resident/edit-resident.component';
import { ViewInvitesComponent } from './view-invites/view-invites.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'view-residents', component: ViewResidentsComponent },
  { path: 'create', component: AddResidentComponent },
  { path: 'view-invites', component: ViewInvitesComponent },
  { path: 'residents/:id', component: EditResidentComponent },
];
