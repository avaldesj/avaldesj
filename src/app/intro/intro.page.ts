import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slides = [

  ]
  constructor(
    private storage: Storage,
    private router: Router

  ) { }

  ngOnInit() {

  }
  
ionViewDidEnter() {
  console.log("Ya entre y vi la intro");
  // vamos a guardar en el storage que ya vio la intro
}
gohome(){
console.log(" Entre al home");
this.storage.set('mostreLaIntro', true);
this.router.navigateByUrl('/home');

} 

}
