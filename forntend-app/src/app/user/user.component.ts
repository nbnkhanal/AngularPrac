import { Component, OnInit } from '@angular/core';
//import class
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // initializing user object
user: User={
  "id":7,
  "name": "Ronaldo",
  "email": "gmail@ronaldo.com",
  "mobile": 900100700
}  

  constructor() { }

  ngOnInit(): void {
  }

}
