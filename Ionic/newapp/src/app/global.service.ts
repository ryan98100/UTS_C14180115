import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private note = [{judul:"0",isi:"0",date:"0",fav:"0"}]
  constructor() { }
  addnote(judule,isie,datee){
    this.note.push({
      judul:judule,
      isi:isie,
      date:datee,
      fav:""
    })
  }

  getnote(){
    return this.note;
  }

  setfav(x){
    this.note[x].fav="1";
  }

}
