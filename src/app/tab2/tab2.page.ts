import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService, Photo } from '../foto.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface data{
  Judul:string,
  Isi:string,
  Tanggal:string,
  Score:string
  Img:string
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  isiData : Observable<data[]>;
  isiDataColl : AngularFirestoreCollection<data>;
  constructor(public fotoservis:FotoService,private afstorage:AngularFireStorage,afs: AngularFirestore) {
    this.isiDataColl = afs.collection('datanote');
    this.isiData = this.isiDataColl.valueChanges();
  }
}
