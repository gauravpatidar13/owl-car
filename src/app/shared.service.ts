import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public image=new Subject<String>();
public img=this.image.asObservable();
 changeProfile(str){
   this.image.next(str)
 }
  constructor() { }
}
