import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Judul: string; Isi:string;Tanggal:string;Score:string;Img:string
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.Judul=routeParams.get('Judul');
    this.Isi=routeParams.get("Isi");
    this.Tanggal=routeParams.get("Tanggal");
    this.Score=routeParams.get("Score");
    this.Img=routeParams.get("Img");
  }
}
