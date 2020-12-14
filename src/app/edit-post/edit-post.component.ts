import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
path;
  constructor(private afs:AngularFireStorage,private af:AngularFirestore) { }
  upload($event){
    this.path=$event.target.files[0];
  
      }
      uploadImage(content){
        console.log(this.path)
    this.afs.upload('/profile/'+this.path.name,this.path).then(a=>{
      a.ref.getDownloadURL().then(success=>{
        this.af.collection("posts").add({image:success,content:content})
      })
      
    })}
  ngOnInit(): void {
  }

}
