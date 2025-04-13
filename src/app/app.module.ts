import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { CarListComponent } from './cars/car-list/car-list.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { ContactComponent } from './contact/contact.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';

    imports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        ReactiveFormsModule ,
        FormsModule,
        CommonModule,   
        FormsModule,
        AppComponent,
        HeaderComponent,
        AboutComponent,
        CarEditComponent,
        FooterComponent,
        HomeComponent,
        FormsModule,
        BrowserAnimationsModule,
        LoginComponent,
        RegisterComponent,
        AuthService,
        FormsModule,
        AuthService,
        CarFormComponent,
        CarDetailComponent,
        CarListComponent,
        ContactComponent
    ]; providers: [
        ,
        { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
    ];
    bootstrap: [AppComponent];
export class AppModule { }
