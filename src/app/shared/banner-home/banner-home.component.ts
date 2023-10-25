import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';

//activacion y uso de jquery, con la adaptacion del archivo main.js
declare var $:any;
declare function HOMEINIT([]):any;
// declare function banner_home(): any;
//activacion y uso de jquery

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {
  discount_banner_courses:any = [];
  discount_banner:any = [];
  constructor(
    public homeService: HomeService
  ) {
    //activacion y uso de jquery
    setTimeout(()=>{
      HOMEINIT($);
    },50);
    //activacion y uso de jquery
   }

  ngOnInit(): void {
    this.homeService.home().subscribe((resp:any)=>{
      console.log(resp);
      this.discount_banner_courses = resp.discount_banner_courses;
      this.discount_banner = resp.discount_banner;
    })

    // setTimeout(()=>{
    //   banner_home
    // }, 50);
  }

  getNewTotal(course:any,discount_banner:any ){
    if(discount_banner.type_discount == 1){
      return course.price_usd - course.price_usd*(discount_banner.discount*0.01);
      
    }else{
      return course.price_usd - discount_banner.discount;

    }
  }

}
