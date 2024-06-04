import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numbers-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
