import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { from } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
profile_image=undefined;
  constructor(private afs:AngularFireStorage,private ss:SharedService) {
    this.getUserImage();
 }
 getUserImage(){
  this.afs.ref('/profile_picture/').listAll().toPromise().then(suc=>{
    suc.items.forEach(itemRef=>{
    const observable=from(itemRef.getDownloadURL().then(function(data){
       return data;
        }))
        observable.subscribe(data=>{
          console.log(data)
          this.profile_image=data;
        })
      })
    })
 }
  ngOnInit(): void {
  }

}
