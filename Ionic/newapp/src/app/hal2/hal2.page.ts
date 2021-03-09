import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.page.html',
  styleUrls: ['./hal2.page.scss'],
})
export class Hal2Page implements OnInit {
  note
  constructor(public global:GlobalService) {
    this.note = this.global.getnote()
   }

  ngOnInit() {
  }
  favor(x){
    this.global.setfav(x);
    alert("Noice")
  }

}
