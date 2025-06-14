import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {

  user = {
    name: 'Sachin',
    email: 'Sachin@gmail.com',
    gender: 'male',
    sports: ['cricket'],
    address: {
      street: 'street-1',
      city: 'Bangalore',
      pincode: '123456',
    }
  }

  submitUserForm(userForm: NgForm) {
    console.log(userForm);
  }
}
