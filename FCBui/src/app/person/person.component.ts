import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  model = new Person();
  newEntrySuccess = false;
  newEntryFailed = false;

  constructor(private personService: PersonService) {
  }

  onSubmit(form: any) {
    console.log('onSubmit()');
    console.log(form);
    console.log(this.model);
    //form.resetForm();

  }
  
  addNew() {
    this.personService.addPerson(this.model)
      .subscribe();
    this.newEntrySuccess = true;

  }

}
