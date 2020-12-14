import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
url;
path;
  constructor(private afs:AngularFireStorage,private ss:SharedService) { }
  upload($event){
this.path=$event.target.files[0];
  }
  uploadImage(){
this.afs.upload('/profile_picture/1',this.path).then(a=>{
  a.ref.getDownloadURL().then(success=>{
this.ss.changeProfile(success)
  })
})
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  ngOnInit(): void {
  }

}
