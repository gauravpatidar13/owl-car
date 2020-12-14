import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  online_user;
  constructor(private afd:AngularFireDatabase,private router:Router) { }
  loginUser(user){
 this.afd.object("register/"+user.username).valueChanges().subscribe(data=>{
   this.online_user=data;
   if(this.online_user.phone==user.username&&this.online_user.password==user.password)
   this.router.navigate(['']);
 })
  }
}
