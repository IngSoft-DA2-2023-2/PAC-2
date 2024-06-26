import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numbers-input',
  standalone: true,
  imports: [],
  templateUrl: './numbers-input.component.html',
  styles: ``,
})
export class NumbersInputComponent {
  value: string | null = null;
  numbers: Array<number> = [];

  @Output() numbersChange = new EventEmitter<Array<number>>();

  public onValueChange(event: any): void {
    const key = event.key;

    if (key !== 'Enter' && key !== ',') {
      return;
    }

    this.value = null;
    this.numbers.push(Number(event.target.value));
    this.numbersChange.emit(this.numbers);
  }
}
