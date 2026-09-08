import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChild } from '../input-child/input-child';

@Component({
  selector: 'app-input-parent',
  imports: [FormsModule, InputChild],
  templateUrl: './input-parent.html',
  styleUrl: './input-parent.css'
})
export class InputParent {

  employeeName = '  Madan Reddy  ';

  employeeRole = 'Angular Developer';

  employeeLocation = 'Bangalore';

  employeeEmail = 'madan@misard.com';

  isEmployeeActive = true;

}