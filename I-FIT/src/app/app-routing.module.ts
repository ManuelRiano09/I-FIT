import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './routines/search/search.component';
import { AddComponent } from './routines/add/add.component';
import { EditComponent } from './routines/edit/edit.component';
import {InitComponent} from './init/init.component';
import { TableComponent } from './table/table.component';
import { MachineInstructorComponent} from './components/machine-instructor/machine-instructor.component';
import { ApprenticeRegisterComponent } from './components/apprentice-register/apprentice-register.component';
import { RegisterComponent } from './components/register/register.component'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';



const routes: Routes = [
  {path: 'search' , component: SearchComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'init', component: InitComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: ApprenticeRegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'machines', component: MachineInstructorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAnalyticsModule,
  AngularFireAuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
