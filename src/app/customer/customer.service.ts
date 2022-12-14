import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Customer, CustomerComponent } from './customer.component';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:9092/hndbank/customers').pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));


  }

  addCustomer(customer: Customer): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:9092/hndbank/customers', customer, { headers: options }).pipe(
      catchError(this.handleError));
  }
  updateCustomer(id:number,data: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`http://localhost:9092/hndbank/customers/${id}`, data, { headers: options }).pipe(
      catchError(this.handleError));
  }
  deleteCustomer(id:number,data: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`http://localhost:9092/hndbank/customers/${id}`, data).pipe(
      catchError(this.handleError));
  }




}
