import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CatsAndKittensComponent } from './pages/cats-and-kittens/cats-and-kittens.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';


import{ AngularFireAuthGuard , redirectUnauthorizedTo,redirectLoggedInTo, canActivate} from '@angular/fire/compat/auth-guard';
import { data } from 'src/assets/data/data';

const redirectUnauthorizedToLogin =() => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems =() => redirectLoggedInTo(['home']); 
const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
  path:'home',component:HomeComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:'cats-and-kittens',component:CatsAndKittensComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}
   
  },
  {
    path:'single-page',component:SinglepageComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}
   
  },
  {
    path:'contact',component:ContactComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}
   
  },
  {
    path:'adoption',component:AdoptionComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}
   
  },
 
  { path:'login',component:LoginComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLoggedInToItems}
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
