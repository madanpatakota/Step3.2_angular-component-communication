import {
  Component,
  computed,
  Input,
  input
} from '@angular/core';

@Component({
  selector: 'app-input-child',
  imports: [],
  templateUrl: './input-child.html',
  styleUrl: './input-child.css'
})
export class InputChild {

  /*
    =================================
    Traditional @Input() Examples
    =================================
  */

  // Normal optional @Input()
  @Input() traditionalEmployeeName = '';

  // Required @Input()
  @Input({ required: true })
  traditionalEmployeeRole = '';

  /*
    Required @Input() with alias.

    Parent binding:
    [traditionalEmployeeLocation]="employeeLocation"

    Child property:
    traditionalLocation
  */
  @Input({
    required: true,
    alias: 'traditionalEmployeeLocation'
  })
  traditionalLocation = '';

  /*
    Required @Input() with alias and !

    ! tells TypeScript:
    Angular will assign this value later.
  */
  @Input({
    required: true,
    alias: 'traditionalEmployeeEmail'
  })
  traditionalEmail!: string;

  /*
    =============================
    Modern input() Examples
    =============================
  */

  /*
    Optional signal input with default value.

    Parent binding:
    [signalEmployeeName]="employeeName"

    Child reads:
    signalEmployeeName()
  */
  signalEmployeeName = input('Guest', {
    /*
      Transform runs before the child receives the value.

      "  Madan Reddy  "
      becomes
      "MADAN REDDY"
    */
    alias: 'signalEmployeeName',
    transform: (value: string) => value.trim().toUpperCase()
  });

  // Required signal input
  signalEmployeeRole = input.required<string>({
    alias: 'signalEmployeeRole'
  });

  // Required signal input with alias
  signalLocation = input.required<string>({
    alias: 'signalEmployeeLocation'
  });

  /*
    No ! is needed here.

    input.required() creates the input signal
    immediately, so TypeScript has no
    initialization error.
  */
  signalEmail = input.required<string>({
    alias: 'signalEmployeeEmail'
  });

  /*
    computed() automatically updates when
    signalEmployeeName() or signalEmployeeRole()
    changes.

    This is an important advantage of input().
  */
  signalEmployeeSummary = computed(() => {
    return `${this.signalEmployeeName()} - ${this.signalEmployeeRole()}`;
  });

}