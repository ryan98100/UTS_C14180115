import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  varNew: string = "Page"
  judul:String
  date:Date
  isi:String
  temp:String
  constructor(public global: GlobalService) {}
  isifunc(){
    this.temp = this.date.toString();
    this.global.addnote(this.judul,this.isi,this.date);
    this.judul=""
    this.isi=""
    alert("Sukses")
  }
}
