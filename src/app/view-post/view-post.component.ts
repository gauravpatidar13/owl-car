import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
my_posts=[];
  constructor(private afs:AngularFireStorage,private af:AngularFirestore) {
    this.af.collection('/posts').valueChanges().subscribe(data=>{
      this.my_posts=data;
    })
let posts=[]    

    //this.my_posts=posts;
    //console.log(this.my_posts);
   }

  ngOnInit(): void {
  }

}
