import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data/data';

@Component({
  selector: 'app-cats-and-kittens',
  templateUrl: './cats-and-kittens.component.html',
  styleUrls: ['./cats-and-kittens.component.css']
})
export class CatsAndKittensComponent {
 
    constructor(private router:Router){}
    myData=data
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/single-page']);
    }
   
}

