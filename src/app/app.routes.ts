import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { ContactComponent } from './contact/contact.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Bosh sahifa' },
  { path: 'car-list', component: CarListComponent, title: 'E\'lonlar' }, 
  { path: 'about', component: AboutComponent, title: 'Biz Haqimizda' },
  { path: 'contact', component: ContactComponent, title: 'Aloqa' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },

  { path: 'new', component: CarFormComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'create-car', component: CarFormComponent },
  { path: 'car-edit/:id', component: CarEditComponent },  
  { path: 'car-detail/:id', component: CarDetailComponent },
  { path: '**', redirectTo: 'car-list' },
  { path: '', redirectTo: 'car-list', pathMatch: 'full' },
];
