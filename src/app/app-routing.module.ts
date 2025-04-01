import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ad-detail', component: AdDetailComponent },
    { path: 'listings', component: ListingsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }