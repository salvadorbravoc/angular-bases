import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decreaseBy()">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  increaseBy(): void {
    this.counter = this.counter + 1;
  }

  decreaseBy(): void {
    this.counter = this.counter - 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
