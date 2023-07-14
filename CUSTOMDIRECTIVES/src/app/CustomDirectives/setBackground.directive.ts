import { Directive, ElementRef,OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]'

})
export class setBakcgroundDirective implements OnInit{ 
    // private element: ElementRef ;

    constructor(private element: ElementRef){
        this.element=element;
    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = '#c8e6c9'        
    }
}