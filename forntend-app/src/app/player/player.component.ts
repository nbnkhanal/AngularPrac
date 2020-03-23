import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://jsonplaceholder.typicode.com/users");
    resp.subscribe((data)=>console.log(data));
  }

}
