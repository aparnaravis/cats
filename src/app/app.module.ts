
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
 import { CatsAndKittensComponent } from './pages/cats-and-kittens/cats-and-kittens.component';
 import { ContactComponent } from './pages/contact/contact.component';
 
 import { LoginComponent } from './pages/login/login.component';

import { CourosalComponent } from './units/courosal/courosal.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';




import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'


import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AdoptionComponent } from './pages/adoption/adoption.component';

@NgModule({
  
  declarations: [
    AppComponent,

    FooterComponent,
     NavbarComponent,
     AppComponent,
    HomeComponent,
     CatsAndKittensComponent,
    ContactComponent,
     LoginComponent,

     FooterComponent,
     NavbarComponent,
     SinglepageComponent,
     CourosalComponent,
     AdoptionComponent,
     
      

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()) 
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
