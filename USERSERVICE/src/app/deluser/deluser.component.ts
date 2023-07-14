import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-deluser',
  templateUrl: './deluser.component.html',
  styleUrls: ['./deluser.component.css']
})
export class DeluserComponent {
  username:string = '';
  status:string ='';
  constructor(private userservice:UserService){

  }

  delUser(){
    this.userservice.DelUser(this.username,this.status);
  }
}
