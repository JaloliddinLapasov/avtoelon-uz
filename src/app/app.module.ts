import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ListingsComponent } from './listings/listings.component';
import { HttpClientModule } from '@angular/common/http';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdCreateComponent } from './ad-create/ad-create.component';

    imports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        ReactiveFormsModule ,
        FormsModule,
        AppComponent,
        HeaderComponent,
        AboutComponent,
        CarsComponent,
        ContactComponent,
        FooterComponent,
        HomeComponent,
        AdDetailComponent,
        ListingsComponent,
        AdListComponent,
        AdCreateComponent
    ]
export class AppModule { }