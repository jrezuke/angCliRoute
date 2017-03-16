import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildComponent,
    PeopleComponent,
    PersonComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
