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


import { NavComponent } from './components/nav/nav.component';
import { ApprenticeRegisterComponent } from './components/apprentice-register/apprentice-register.component';
import { RegisterComponent } from './components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    EditComponent,
    InitComponent,
    TableComponent,
    FooterComponent,
    NavComponent,
    ApprenticeRegisterComponent,
    RegisterComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
