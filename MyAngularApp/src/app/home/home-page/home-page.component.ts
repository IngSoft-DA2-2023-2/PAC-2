import { Component } from '@angular/core';
import { SortService } from 'src/backend/services/sort.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'home-page';

  constructor(private sortService: SortService) { }

  sortData(numbers: number[], sorter: string) {
    this.sortService.sort(sorter, numbers).subscribe(sortedNumbers => {
      console.log(sortedNumbers);
    });
  }
}