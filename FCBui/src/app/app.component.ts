import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from './person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = new Person();

  constructor(http: HttpClient) {

  }

  title = 'First Citizens Back Assessment';
}
