import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private storage: Storage
    ) {}
      
 GotoIntro() {
  console.log("go to intro");
  this.router.navigateByUrl('/intro');
  this.storage.set('mostreLaIntro', true)
}
}
