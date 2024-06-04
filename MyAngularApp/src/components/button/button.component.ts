import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: [],
})
export class ButtonComponent {
  @Input() title: string = 'Button';
  @Input() btnClass: string = 'green'; 
  @Input() disabled: boolean = false;
  @Input() onClick!: () => void;
  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}

