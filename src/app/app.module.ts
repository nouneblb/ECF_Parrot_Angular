import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/general/header/header.component';
import { FooterComponent } from './pages/general/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './pages/general/application/services-page/services-page.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { CarsComponent } from './pages/general/application/cars/cars.component';
import { OccasionsComponent } from './pages/general/occasions/occasions.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesPageComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotFoundComponent,
    CarsComponent,
    OccasionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
