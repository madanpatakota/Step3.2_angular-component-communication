import {
  Component,
  EventEmitter,
  Output,
  output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-child',
  imports: [FormsModule],
  templateUrl: './output-child.html',
  styleUrl: './output-child.css'
})
export class OutputChild {

  /*
    These values are bound to the textareas
    using [(ngModel)].

    The child will send these messages
    to the parent when buttons are clicked.
  */
  traditionalMessageText =
    'Employee check-in sent using @Output() and EventEmitter.';

  modernMessageText =
    'Employee check-in sent using output().';

  /*
    ======================================
    Traditional @Output() + EventEmitter
    ======================================

    @Output() exposes this event to the parent.

    EventEmitter<string> means this event
    sends a string value.
  */
  @Output()
  traditionalEmployeeAction = new EventEmitter<string>();

  /*
    ==================
    Modern output()
    ==================

    output<string>() creates a modern
    custom output event.

    It returns OutputEmitterRef<string>.

    output() is NOT a Signal.
    It is used for child-to-parent events.
  */
  modernEmployeeAction = output<string>();

  /*
    This method runs when the user clicks
    the @Output() Send button.

    emit() sends the textarea message
    from the child to the parent.
  */
  sendTraditionalOutput() {
    this.traditionalEmployeeAction.emit(
      this.traditionalMessageText
    );
  }

  /*
    This method runs when the user clicks
    the output() Send button.

    emit() sends the textarea message
    from the child to the parent.
  */
  sendModernOutput() {
    this.modernEmployeeAction.emit(
      this.modernMessageText
    );
  }
}