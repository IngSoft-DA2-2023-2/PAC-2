import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    sorters: string[] = [];
    selectedSorter: string = '';
    numbers: string = '';
    sortedNumbers: number[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<string[]>('/api/sorters').subscribe(data => {
            this.sorters = data;
        });
    }

    sortNumbers() {
        const numbersArray = this.numbers.split(',').map(Number);
        this.http.post<{ sortedNumbers: number[] }>(`/api/sort?sorter=${this.selectedSorter}`, { numbers: numbersArray })
            .subscribe(response => {
                this.sortedNumbers = response.sortedNumbers;
            });
    }
}
