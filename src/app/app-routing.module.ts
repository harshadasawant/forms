import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {HomeComponent} from './home/home.component'
import { NopageComponent } from './nopage/nopage.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path : 'about',
    children:[
      {path:'company',component:AboutcompanyComponent},
      {path:'me',component:AboutmeComponent},

    ]
   },
  {
    component: HomeComponent,
    path : ''
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: UserComponent,
    path:'user/:id'
  },
  {
    component: NopageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
