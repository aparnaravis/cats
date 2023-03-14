import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsAndKittensComponent } from './pages/cats-and-kittens/cats-and-kittens.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'cats-and-kittens',component:CatsAndKittensComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single-page',component:SinglepageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
