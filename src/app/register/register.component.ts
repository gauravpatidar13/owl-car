import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs:RegisterService) { }
  registerMe(user){
console.log(user)
this.rs.registerUser(user)
  }
  ngOnInit(): void {
  }

}
