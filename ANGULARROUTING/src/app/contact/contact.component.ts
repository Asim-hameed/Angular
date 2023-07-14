import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstname: any;
  lastname: any;
  country: any;
  subject: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }
  canExit(){
    if(this.firstname || this.lastname ||this.country || this.subject){
      return confirm('You Have unSaved changes . Do you really want to discard these changes? ');
    }else{
      return true;
    }
  }

}