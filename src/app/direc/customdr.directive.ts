import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customdr]'
})
export class CustomdrDirective {

  constructor(private ele: ElementRef) { 
  }
  @HostListener('click') onCLick(){
    this.ele.nativeElement.style.color = 'red'
  }

}
