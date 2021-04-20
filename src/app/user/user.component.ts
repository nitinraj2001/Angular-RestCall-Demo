import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: any;

  constructor( private httpClient: HttpClient) { }
  
  

  ngOnInit(): void {

    let response=this.httpClient.get("https://jsonplaceholder.typicode.com/users");
    response.subscribe((data)=>this.users=data);
  }

}
