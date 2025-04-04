import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListingsComponent } from "./listings/listings.component";
import { AdDetailComponent } from "./ad-detail/ad-detail.component";
import { CarsComponent } from "./cars/cars.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CreateAdComponent } from "./create-ad/create-ad.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdCreateComponent } from "./ad-create/ad-create.component";

    export const routes: Routes = [
      { path: '', component: HomeComponent, title: 'Bosh sahifa' },
      { path: 'listings', component: ListingsComponent, title: 'E\'lonlar' }, // Barcha e'lonlar uchun
      { path: 'listings/:category', component: ListingsComponent, title: 'E\'lonlar' }, // Kategoriya bo'yicha filtr
      { path: 'cars', component: CarsComponent, title: 'Avtomobillar' }, // Add Cars route
      // { path: 'create-ad', component: CreateAdComponent, title: 'E\'lon Berish' },
      { path: 'ad-create', component: AdCreateComponent, title:'E\'lon Berish'},
      { path: 'about', component: AboutComponent, title: 'Biz Haqimizda' }, 
      { path: 'contact', component: ContactComponent, title: 'Aloqa' }, 
      { path: 'login', component: LoginComponent, title: 'Login'},
      { path: 'register', component: RegisterComponent, title: 'Register'},
      { path: 'ad/:id', component: AdDetailComponent, title: 'E\'lon Tafsiloti' }, // Placeholder route
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ];
