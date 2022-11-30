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
   this.customerService.getCustomer().subscribe(customer => this.customer = customer)
  }
  ngOnInit() {
    this.getCustomer();
  }


}
export class Customer{
  customerId!: number;
  emailId!: string;
  name!: string;
  dateOfBirth! : string;
  customertype!: string

}