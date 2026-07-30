import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonItemComponent } from './person/person-list/person-item/person-item.component';

import { PersonService } from './person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
