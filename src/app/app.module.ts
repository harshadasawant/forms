import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    BookComponent,
    CustomerComponent,
    AboutComponent,
    AboutcompanyComponent,
    AboutmeComponent,
    HomeComponent,
    LoginComponent,
    NopageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
