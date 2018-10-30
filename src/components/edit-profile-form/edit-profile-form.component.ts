import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent {

  text: string;

  constructor() {
    console.log('Hello EditProfileFormComponent Component');
    this.text = 'Hello World';
  }

}
