import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private afd:AngularFireDatabase) { }
  registerUser(user){
this.afd.object("register/"+user.phone).set(user)
  }
}
