import { Input,Directive,TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>,private viewContainer: ViewContainerRef) {

   }

  @Input() set appIf(condition:boolean){
  if(condition){
      this.viewContainer.createEmbeddedView(this.template)
  }
  else{
    this.viewContainer.clear();
  }
  }
}
