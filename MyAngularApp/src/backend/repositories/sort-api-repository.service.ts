import { Injectable } from '@angular/core';
import ApiRepository from './api-repository';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import SortRequestModel from '../services/models/SortRequestModel';
import { Observable } from 'rxjs';
import SortResponseModel from '../services/models/SortResponseModel';
import GetSortersResponseModel from '../services/models/GetSortersResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SortApiRepositoryService extends ApiRepository {

  constructor(http: HttpClient) {
    super(environment.MyWebApi, 'sorters', http);
  }

  public sort(request: SortRequestModel): Observable<SortResponseModel>{
    return this.post<SortResponseModel>(request);
  }

  public getAll(): Observable<GetSortersResponseModel>{
    return this.get<GetSortersResponseModel>();
  }
}
