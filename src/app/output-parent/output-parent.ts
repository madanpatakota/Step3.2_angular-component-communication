import { Component } from '@angular/core';
import { OutputChild } from '../output-child/output-child';

@Component({
  selector: 'app-output-parent',
  imports: [OutputChild],
  templateUrl: './output-parent.html',
  styleUrl: './output-parent.css'
})
export class OutputParent {

  /*
    These variables belong to the parent.

    Initially, the parent has not received
    any message from the child.
  */
  traditionalMessage = 'No message received using @Output().';

  modernMessage = 'No message received using output().';

  /*
    This method runs when the child emits
    traditionalEmployeeAction.

    $event value from child comes into
    this message parameter.
  */
  receiveTraditionalOutput(message: string) {
    this.traditionalMessage = message;
  }

  /*
    This method runs when the child emits
    modernEmployeeAction.

    $event value from child comes into
    this message parameter.
  */
  receiveModernOutput(message: string) {
    this.modernMessage = message;
  }
}