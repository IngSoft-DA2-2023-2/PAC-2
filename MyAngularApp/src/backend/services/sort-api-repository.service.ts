// sort-api-repository.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortApiRepositoryService {
  constructor() { }

  getAll(): Observable<Array<string>> {
    
    return of([]);
  }

  sort(sorter: string, numbers: Array<number>): Observable<Array<number>> {
    
    return of(numbers);
  }
}