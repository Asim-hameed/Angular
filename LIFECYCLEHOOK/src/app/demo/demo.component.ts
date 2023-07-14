import {OnDestroy,AfterViewInit, AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() 
  value: string = 'proacademy';

  constructor(){
    console.log('Constructor Called');
    // console.log(this.value);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngonInit Called');
    // console.log(this.value);

  }
  ngDoCheck(): void {
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }  
  ngOnDestroy(): void {
    console.log('OnDestroy Called');
  }
}
