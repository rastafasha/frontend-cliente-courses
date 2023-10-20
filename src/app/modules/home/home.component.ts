import { Component, OnInit } from '@angular/core';
//activacion y uso de jquery, con la adaptacion del archivo main.js
declare var $:any;
declare function HOMEINIT([]):any;
//activacion y uso de jquery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){
    //activacion y uso de jquery
    setTimeout(()=>{
      HOMEINIT($);
    },50);
    //activacion y uso de jquery
  }
  ngOnInit(): void {
  }

}
