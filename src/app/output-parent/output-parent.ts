import { Component } from '@angular/core';
import { OutputChild } from '../output-child/output-child';

@Component({
  selector: 'app-output-parent',
  imports: [OutputChild],
  templateUrl: './output-parent.html',
  styleUrl: './output-parent.css'
})
export class OutputParent {

  traditionalMessage = 'No message received using @Output().';

  modernMessage = 'No message received using output().';

  receiveTraditionalOutput(message: string) {
    this.traditionalMessage = message;
  }

  receiveModernOutput(message: string) {
    this.modernMessage = message;
  }

}