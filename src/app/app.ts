import { Component } from '@angular/core';
import { InputParent } from './input-parent/input-parent';

@Component({
  selector: 'app-root',
  imports: [InputParent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}