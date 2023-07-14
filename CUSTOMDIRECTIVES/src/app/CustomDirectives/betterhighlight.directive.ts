import { Directive,OnInit ,HostListener,ElementRef,Renderer2,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private element:ElementRef, private renderer: Renderer2) { }
   
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';
  @Input() title: string = 'This is Title';
  
  @HostBinding('style.backgroundColor')
  background: string = this.defaultColor;

  ngOnInit(){
    this.background=this.defaultColor;
    this.renderer.addClass(this.element.nativeElement,'container');
  }

  @HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor;
    this.renderer.setStyle(this.element.nativeElement,'transition',0.5)
  }
  @HostListener('mouseleave') mouseleave(){
    this.background=this.defaultColor;
    this.renderer.setStyle(this.element.nativeElement,'transition',0.5)
  }
}
