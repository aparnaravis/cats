import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatsAndKittensComponent } from './pages/cats-and-kittens/cats-and-kittens.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';
import { CourosalComponent } from './units/courosal/courosal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsAndKittensComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent,
    SinglepageComponent,
    CourosalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
