import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';

import {PersonService} from "./person/person.service"

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
