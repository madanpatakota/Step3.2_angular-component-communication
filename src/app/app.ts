import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  employeeName = signal('Madan');
  basicSalary = signal(30000);

  yearlySalary = computed(() => this.basicSalary() * 12);

  constructor() {
    effect(() => {
      console.log(
        `Employee: ${this.employeeName()} | Salary: ₹${this.basicSalary()}`
      );
    });
  }

  changeEmployeeName() {
    this.employeeName.set('Madan Reddy');
  }

  setSalary() {
    this.basicSalary.set(50000);
  }

  increaseSalary() {
    this.basicSalary.update(currentSalary => currentSalary + 5000);
  }
}