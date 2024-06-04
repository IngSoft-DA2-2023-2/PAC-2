import { Component } from '@angular/core';
import { SortService } from '../../../backend/services/sort.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  data: Array<any> = [];
  sortedData: Array<any> = [];

  constructor(private sortService: SortService) {
    this.sortService.getAll().subscribe((data: any) => {
      this.data = data;
      this.sortService.sort('sorter', this.data).subscribe((sortedData: any) => {
        this.sortedData = sortedData;
      });
    });
  }
}

