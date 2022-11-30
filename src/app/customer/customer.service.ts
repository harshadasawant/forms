import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Customer, CustomerComponent } from './customer.component';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private handleError(err: HttpErrorResponse): Observable<any> {
  //   let errMsg = '';
  //   if (err.error instanceof Error) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.log('An error occurred:', err.error.message);
  //     errMsg = err.error.message;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.log(`Backend returned code ${err.status}`);
  //     errMsg = err.error.status;
  //   }
  //   return throwError(()=>errMsg);
  // }

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:9092/hndbank/customers');
  }

}
