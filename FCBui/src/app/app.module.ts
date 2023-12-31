import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent
  , PersonComponent
  ],
  imports: [
     BrowserModule
   , HttpClientModule
   , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
