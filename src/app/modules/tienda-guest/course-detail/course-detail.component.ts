import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaGuestService } from '../service/tienda-guest.service';

declare function courseView():any;
declare function showMoreBtn():any;
declare function magnigyPopup():any;

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  slug:any = null;
  landing_course:any= null;
  courses_related_instructor:any=[];
  courses_related_category:any=[];
  campaing_discount_id:any;
  DISCOUNT:any = null;

  constructor(
    public activatedRoute:ActivatedRoute,
    public tiendaGuestService: TiendaGuestService
  ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp:any)=>{
      console.log(resp);
      this.slug = resp.slug;
    });
    this.activatedRoute.queryParams.subscribe((resp:any)=>{
      console.log(resp);
      this.campaing_discount_id = resp.campaing_discount;
    })
    this.tiendaGuestService.langinCourse(this.slug, this.campaing_discount_id).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.landing_course = resp.course;
        this.courses_related_instructor = resp.courses_related_instructor;
        this.courses_related_category = resp.courses_related_category;
        this.DISCOUNT = resp.DISCOUNT;
        if(this.DISCOUNT){
          this.landing_course.discount_g = resp.DISCOUNT;
        }
        setTimeout(()=>{
          magnigyPopup();
        }, 50)
      }
     
    )
    setTimeout(()=>{
      courseView();
      showMoreBtn();
    }, 50)
  }


  getNewTotal(course:any,discount_flash:any ){
    if(discount_flash.type_discount == 1){
      return course.price_usd - course.price_usd*(discount_flash.discount*0.01);
      
    }else{
      return course.price_usd - discount_flash.discount;

    }
  }

  getTotalPriceCourse(course:any){
    if(course.discount_g){
      return this.getNewTotal(course,course.discount_g);
    }
    return course.price_usd;
  }

}
