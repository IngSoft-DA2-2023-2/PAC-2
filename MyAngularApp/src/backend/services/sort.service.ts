import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SortApiRepositoryService} from "./sort-api-repository.service";

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(private readonly _repository: SortApiRepositoryService) {}
  

  public getAll(): Observable<Array<string>> {
    return this._repository.getAll();
  }

  public sort(
      sorter: string,
      numbers: Array<number>
  ): Observable<Array<number>> {
    return this._repository.sort(sorter, numbers);
  }
}