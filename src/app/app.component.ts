import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { CustomerService } from './service/customer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sample';
  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  fetchData(): void {
    this.data = new Observable(observer => {
      setTimeout(() => { observer.next(11); }, 1000),
      setTimeout(() => { observer.next(22); }, 2000),
      setTimeout(() => { observer.complete(); }, 3000);
    });
    this.data.subscribe((value) => this.myArray.push(value),
      error => this.errors = true,
      () => this.finished = true);
  }
  customer:any;
  // constructor(private customerservice:CustomerService){
  //   this.customerservice.cust().subscribe((data)=>{
  //     console.warn("data",data);
  //   })
  // }

}
