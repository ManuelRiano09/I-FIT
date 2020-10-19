import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './routines/search/search.component';
import { AddComponent } from './routines/add/add.component';
import { EditComponent } from './routines/edit/edit.component';
import { FormsModule} from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule} from '@angular/common/http';
import { InitComponent } from './init/init.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginInstructorComponent } from './components/form-login-instructor/form-login-instructor.component';
import { FormLoginAprendizComponent } from './components/form-login-aprendiz/form-login-aprendiz.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    EditComponent,
    InitComponent,
    TableComponent,
    FooterComponent,
    LoginComponent,
    FormLoginInstructorComponent,
    FormLoginAprendizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
