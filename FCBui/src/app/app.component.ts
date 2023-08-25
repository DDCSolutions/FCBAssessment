import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from './person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*public people?: WeatherForecast[];*/
  person = new Person();

  constructor(http: HttpClient) {
    //http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
    //  this.people = result;
    //}, error => console.error(error));
  }

  title = 'First Citizens Back Assessment';
}
