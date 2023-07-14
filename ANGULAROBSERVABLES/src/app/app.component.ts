import { Component,OnInit,Injectable } from '@angular/core';
import {filter, from, map, Observable, of, interval} from 'rxjs';
import { DataService } from './data.service';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'ANGULAROBSERVABLES';
  constructor(private dataservice:DataService){

  }
  // myObservable = new Observable((observer)=>{
  //   console.log('Observable Starts'); 
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)

  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");   
  // });

//   myObservable = Observable.create((observer: {
//     complete: any; next: (arg0: string) => void; error: (arg0: Error) => void; 
// })=>{
//     setTimeout(()=>{observer.next("A")},1000)
//     setTimeout(()=>{observer.next("S")},2000)
//     setTimeout(()=>{observer.next("I")},3000)
//     // setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))},3000)
//     setTimeout(()=>{observer.next("M")},4000)
//     setTimeout(()=>{observer.next("A")},5000)
//     setTimeout(() => {
//       observer.complete()
//     }, 7000);
//   })

  // array1 = [1,2,3,6,8];
  // array2 = ['A','B','C','D'];

  // myObservable = of(this.array1,this.array2,'Hello');
  
  // myObservable = from(this.array1);
  // tranformedObs = this.myObservable.pipe(map((val)=>{
  //   return val * 5;
  // }),filter((val)=>{
  //   return val>=30
  // }))
  
  // filteredobs = this.tranformedObs.pipe(filter((val)=>{
  //   return val >=30
  // }))

  counterObservable = interval(1000);
  counterSub:any;
  ngOnInit(){
    // this.tranformedObs.subscribe((val: any) =>{
    //   console.log(val);
    // }, (error: { message: any; })=>{
    //   alert(error.message);
    // } ,()=>{
    //  alert('Obervable has completed emiiting all the values'); 
    // }
    // );

    // this.counterSub = this.counterObservable.subscribe((val)=>{
    //   console.log(val);
    // })
  }
  unSub(){
    this.counterSub.unsubscribe(); 
  }
  Sub(){
    this.counterSub=this.counterObservable.subscribe((val)=>{
      console.log(val);
    });
  }
}
