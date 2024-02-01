import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slides = [

  ]
  constructor() { }

  ngOnInit() {

  }
  
ionViewDidEnter() {
  console.log("Ya entre y vi la intro");
  // vamos a guardar en el storage que ya vio la intro
}
 
}
