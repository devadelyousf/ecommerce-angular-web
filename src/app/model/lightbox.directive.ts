import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightbox]',

})
export class LightboxDirective {
 

  constructor(public elementRef:ElementRef) { 
this.elementRef.nativeElement.style.border="1px solid gray"
  }
  getDetails(){
  console.log(this.elementRef.nativeElement);
  
  }

}
