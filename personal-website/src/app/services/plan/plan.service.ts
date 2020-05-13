import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getPlan(priority: string, date: string): Observable<any> {
    let url = this.baseUrl + '/plan/';

    if (priority) {
      url = url + '?priority=' + priority;
    }
    if (date) {
      if (url[url.length - 1] !== '=') {
        url = url + '?date=' + date;
      } else {
        url = url + '&date=' + date;
      }
    }
    return this.http.get(url, { headers: this.httpHeaders })
      .pipe(catchError(this.catchError));
  }

  postPlan(requestBody: any): Observable<any> {
    const body = { content: requestBody.content, priority: requestBody.priority, date: requestBody.time };
    return this.http.post(this.baseUrl + '/plan/', body, { headers: this.httpHeaders }).pipe(catchError(this.catchError));
  }

  deletePlan(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/plan/' + id + '/', { headers: this.httpHeaders }).pipe(catchError(this.catchError));
  }

  catchError(err: HttpErrorResponse) {
    const errorMessage = 'Error occurs on Plan Http request ' + err.error.message;
    return throwError(errorMessage);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }


}
