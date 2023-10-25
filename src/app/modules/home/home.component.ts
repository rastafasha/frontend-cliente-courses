import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
//activacion y uso de jquery, con la adaptacion del archivo main.js
declare var $:any;
declare function HOMEINIT([]):any;
declare function countdownT():any;
//activacion y uso de jquery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CATEGORIES:any = [];
  COURSES_HOME:any = [];

  group_courses_categories:any = [];
  discount_flash:any = [];
  discount_flash_courses:any = [];

  constructor(
    public homeService: HomeService
  ){
    //activacion y uso de jquery
    setTimeout(()=>{
      HOMEINIT($);
      // countdown();
    },50);
    //activacion y uso de jquery
  }
  ngOnInit(): void {
    this.homeService.home().subscribe((resp:any)=>{
      console.log(resp);
      this.CATEGORIES = resp.categories;
      this.COURSES_HOME = resp.courses_home.data;
      this.group_courses_categories = resp.group_courses_categories;
      this.discount_flash = resp.discount_flash;
      this.discount_flash_courses = resp.discount_flash_courses;
    })
    setTimeout(()=>{
      countdownT();
    },50);
  }

  getNewTotal(course:any,discount_flash:any ){
    if(discount_flash.type_discount == 1){
      return course.price_usd - course.price_usd*(discount_flash.discount*0.01);
      
    }else{
      return course.price_usd - discount_flash.discount;

    }
  }

}
