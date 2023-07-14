import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUSTOMDIRECTIVES';
  active: boolean = true;
  display:boolean = false;
  occupation:string = 'asim';

  displaynotice(){
    this.display=true;
  }
  hidenotice(){
    this.display=false;
  }
}
