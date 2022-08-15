import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight-text]'
})
export class HighlightTextDirective {

  constructor(private el: ElementRef) {
    console.log(this.el);
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'purple';
  }

}
