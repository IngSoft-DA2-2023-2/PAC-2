import { Component, OnInit } from '@angular/core';
import DropdownOption from '../../../components/dropdown/models/DropdownOption';
import { SortService } from '../../../backend/services/sort.service';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styles: ``
})
export class AuthenticationPageComponent implements OnInit {
  sorters: Array<DropdownOption> = [];

  constructor(private sortService: SortService) {}

  onClick(): any {

  }

  ngOnInit(): void {
    this.sortService.getAll().subscribe(
      response => {
        console.log(response);
        response.map(r => this.sorters.push({ value: r, label: r }));
      },
      error => console.error(error)
    )
  }
}
