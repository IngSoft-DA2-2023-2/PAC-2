import { Component } from '@angular/core';
import { SortService } from '../../../backend/services/sort.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  constructor(private readonly _sortService: SortService) {}

  onClickUseSort() {}

  onChangeNumbers(numbers: Array<number>) {
    console.log(numbers);
  }
}
