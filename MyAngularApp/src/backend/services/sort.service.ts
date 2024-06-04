import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SortApiRepositoryService } from '../repositories/sort-api-repository.service';
import SortRequestModel from './models/SortRequestModel';
import SortResponseModel from './models/SortResponseModel';
import GetSortersResponseModel from './models/GetSortersResponseModel';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(private readonly _repository: SortApiRepositoryService) {}

  public getAll(): Observable<GetSortersResponseModel> {
    return this._repository.getAll();
  }

  public sort(request: SortRequestModel): Observable<SortResponseModel> {
    return this._repository.sort(request);
  }
}
