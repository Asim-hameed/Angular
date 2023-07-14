import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private dataservice: DataService){

  }

  enteredText !:string;

  OnBtnClick(){
    // console.log(this.enteredText);
    this.dataservice.raiseDataEmitterEvent(this.enteredText);
  }
}
