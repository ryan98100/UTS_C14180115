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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  urlimagtestorage : string;
  isiData : Observable<data[]>;
  isiDataColl : AngularFirestoreCollection<data>;
  constructor(public fotoservis:FotoService,private afstorage:AngularFireStorage,afs: AngularFirestore) {
    this.isiDataColl = afs.collection('datanote');
    this.isiData = this.isiDataColl.valueChanges();
  }
  score= ""
  judul=""
  isi=""
  tanggal : Date
  judulgambar : string;
  gambare : Photo;
  ngOnInit(){
  }
  Foto(){
    this.fotoservis.Foto();
  }

  upload(){
    const imgfilepath = `gambar/${this.gambare.filePath}`;
    this.afstorage.upload(imgfilepath, this.gambare.dataImage).then(()=> {
      alert("sukses")
    });

    var refImage = this.afstorage.storage.ref('gambar');
    refImage.listAll()
    .then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          this.urlimagtestorage = url,
          this.isiDataColl.doc(this.judul).set({
            Judul: this.judul,
            Isi: this.isi,
            Tanggal: this.tanggal.toString(),
            Score:this.score,
            Img:this.urlimagtestorage
          });
        })
      });
    }).catch((error) => {
      console.log(error);
    });

    

    
  }
  
  getgambar(gamba : Photo) {
    this.gambare = gamba;
    this.judulgambar = gamba.filePath;
    alert("sukses")
  }
}
