import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer!: Customer[];
  errorMessage!: string;
  constructor(private customerService: CustomerService) { }
  getCustomer() {
   this.customerService.getCustomer().subscribe({next:customer => this.customer = customer, error:error => this.errorMessage=error})
  }
  ngOnInit() {
    this.getCustomer();
  }

  addCustomer(data:any): void {

    this.customerService.addCustomer(data)
      .subscribe({next:(customer: any) => this.customer.push(customer)});
  }
  getCustFormValue(data: any){
    console.warn(data);
    // this.addCustomer(data);
    // this.updateCustomer(data);
    this.deleteCustomer(data);
    console.warn("cus",this.customer);
  }
  updateCustomer(data:any): void {

    this.customerService.updateCustomer(4,data)
      .subscribe({next:(customer: any) => this.customer = this.customer});
  }
  deleteCustomer(data:any): void {

    this.customerService.deleteCustomer(4,data)
      .subscribe({next:(customer: any) => this.customer = this.customer});
  }
  // deleteBook(bookId: string): void {
  //   let id=parseInt(bookId)
  //   this.bookService.deleteBook(id)
  //     .subscribe({next:(book: any) => this.books = book});
  // }



}
export class Customer{
  customerId!: number;
  emailId!: string;
  name!: string;
  dateOfBirth : string = "01/01/2000"
  customertype: string = "type1";

}
