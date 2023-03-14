import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data/data';

@Component({
  selector: 'app-singlepage',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglepageComponent {
   
constructor(private router:Router,private hero:HeroService){}
myData= this.hero.givedata()
single:any
ngOnInit(){

  let id = Number(localStorage.getItem('id'))
  this.single =data.filter(e=>e.id==id)
  console.log("name",this.single)
}
 

}