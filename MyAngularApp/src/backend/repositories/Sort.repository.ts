import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SortApiRepositoryService {
  private readonly _endpoint = "sorters";
  private readonly _url = "http://localhost:5064";
  
  constructor(private readonly _http: HttpClient) {}

  public getAll(): Observable<Array<any>> {
    return this._http
      .get<Array<any>>(
        `${this._url}/${this._endpoint}`,
      )
      .pipe(catchError(this.handleError));
  }

  public sort(sorter: string, numbers: number[]): Observable<Array<number>> {
    return this._http.post<Array<number>>(
      `${this._url}/${this._endpoint}`,
      { Numbers: numbers, Sorter: sorter },
    )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
      return throwError(error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      return throwError(error);
    }
  }
}
