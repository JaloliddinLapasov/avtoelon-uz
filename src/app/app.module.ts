import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AppComponent,
        HeaderComponent,
        // AboutComponent,
        // CarsComponent,
        // ContactComponent,
        FooterComponent,
        HomeComponent,
        AdDetailComponent,
        ListingsComponent
    ],
    providers: [],
    // bootstrap: [AppComponent]
})
export class AppModule { }