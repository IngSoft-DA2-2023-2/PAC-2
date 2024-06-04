import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortApiRepositoryService {
  private readonly _baseUrl = 'http://localhost:5000/api/sort'; 

  constructor(private readonly _http: HttpClient) {}

  public getAll(): Observable<Array<string>> {
    return this._http.get<Array<string>>(`${this._baseUrl}/getAll`);
  }

  public sort(sorter: string, numbers: Array<number>): Observable<Array<number>> {
    return this._http.post<Array<number>>(`${this._baseUrl}/sort`, { sorter, numbers });
  }
}