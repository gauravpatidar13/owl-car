import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  constructor() { }
ngAfterViewInit(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  })
}
  ngOnInit(): void {
    $('.menu-toggle').on('click',()=>{
      $('#navbarSupportedContent').toggleClass('collapse')
    })
   
  }

}
