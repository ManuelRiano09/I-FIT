import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './routines/search/search.component';
import { AddComponent } from './routines/add/add.component';
import { EditComponent } from './routines/edit/edit.component';
import { InitComponent } from './init/init.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginInstructorComponent } from './components/form-login-instructor/form-login-instructor.component';
import { FormLoginAprendizComponent } from './components/form-login-aprendiz/form-login-aprendiz.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'init', component: InitComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginInst', component: FormLoginInstructorComponent},
  {path: 'loginApre', component: FormLoginAprendizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
