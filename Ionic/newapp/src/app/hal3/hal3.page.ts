import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.page.html',
  styleUrls: ['./hal3.page.scss'],
})
export class Hal3Page implements OnInit {
  note;

  constructor(public global:GlobalService) {
    this.note = this.global.getnote()
   }

  ngOnInit() {
  }

}
