import { Component } from '@angular/core';
import { OutputParent } from './output-parent/output-parent';

@Component({
  selector: 'app-root',
  imports: [OutputParent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}