import { Component } from '@angular/core';
import DropdownOption from '../../../components/dropdown/models/DropdownOption';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  dropdownOptions: DropdownOption[] = [
    { value: 'importer1 :(', label: 'importer1 :(' },
    { value: 'importer2 :(', label: 'importer2 :(' },
    { value: 'importer3 :(', label: 'importer3 :(' }
  ];

  selectedOption: string | null = null;

  constructor() { }

  onDropdownValueChange(newValue: string | null) {
    this.selectedOption = newValue;
    console.log('Selected option:', newValue);
  }
}
