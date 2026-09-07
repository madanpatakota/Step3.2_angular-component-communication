import {
  Component,
  EventEmitter,
  Output,
  output
} from '@angular/core';

@Component({
  selector: 'app-output-child',
  imports: [],
  templateUrl: './output-child.html',
  styleUrl: './output-child.css'
})
export class OutputChild {

  /*
    ====================================
    Traditional @Output() + EventEmitter
    ====================================

    @Output() traditionalEmployeeAction =
      new EventEmitter<string>();

    Parent listens like this:

    (traditionalEmployeeAction)="
      receiveTraditionalOutput($event)
    "
  */
  @Output()
  traditionalEmployeeAction = new EventEmitter<string>();

  /*
    ==========================
    Modern output() Approach
    ==========================

    output<string>() returns OutputEmitterRef<string>.

    Parent listens in the same way:

    (modernEmployeeAction)="
      receiveModernOutput($event)
    "

    output() is not a Signal.
    It is Angular's modern API for custom events.
  */
  modernEmployeeAction = output<string>();

  /*
    Both APIs use emit() to send
    data from child to parent.
  */

  sendTraditionalOutput() {
    this.traditionalEmployeeAction.emit(
      'Employee check-in sent using @Output() and EventEmitter.'
    );
  }

  sendModernOutput() {
    this.modernEmployeeAction.emit(
      'Employee check-in sent using output().'
    );
  }

}