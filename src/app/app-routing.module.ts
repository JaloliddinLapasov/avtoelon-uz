import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';

const routes: Routes = [
    { path: 'car-list', component: CarListComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'create-car', component: CarFormComponent },
    { path: 'car-edit/:id', component: CarEditComponent },  // edit mode
    { path: 'car-detail/:id', component: CarDetailComponent },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: 'car-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }




