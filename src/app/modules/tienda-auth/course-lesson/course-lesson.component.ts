import { Component, OnInit } from '@angular/core';
import { TiendaAuthService } from '../service/tienda-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare function alertDanger([]):any;

@Component({
  selector: 'app-course-lesson',
  templateUrl: './course-lesson.component.html',
  styleUrls: ['./course-lesson.component.css']
})
export class CourseLessonComponent implements OnInit {

  slug:any = null;
  coursesSelected:any = null;
  classeSelected:any = null;

  constructor(
    public tiendaAuthService: TiendaAuthService,
    public activatedRoute:ActivatedRoute,
    public router:Router,
    public sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp:any)=>{
      console.log(resp);
      this.slug = resp.slug;
    })
    this.tiendaAuthService.showCourse(this.slug).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.message == 403){
        alertDanger(resp.message_text);
        this.router.navigateByUrl("/");
      }
      this.coursesSelected = resp.course;
      this.classeSelected = this.coursesSelected.malla[0].clases[0];

    })
  }

  urlVideo(classeSelected:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(classeSelected.vimeo)
  }

  openClase(clase:any){
    this.classeSelected = clase;
  }

}
