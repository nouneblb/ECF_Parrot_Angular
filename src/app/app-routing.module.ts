import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';

import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

import { ContactComponent } from './pages/general/contact/contact.component';
import { OccasionsComponent } from './pages/general/occasions/occasions.component';

import { ServicesPageComponent } from './pages/general/application/services-page/services-page.component';
import { CarsComponent } from './pages/general/application/cars/cars.component';

import { AppComponent } from './app.component';



const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'occasions', component: OccasionsComponent },
  
  { path: 'services', component: ServicesPageComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
