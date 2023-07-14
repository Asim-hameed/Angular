import { Directive,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor( private element :ElementRef,private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','Red');
    this.renderer.addClass(this.element.nativeElement,'container');
    this.renderer.setAttribute(this.element.nativeElement,'title','This is example Div');
  }
}
