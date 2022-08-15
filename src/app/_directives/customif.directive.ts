import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customif]'
})
export class CustomifDirective {
  
  @Input() customif: boolean = false;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    debugger;
    if (this.customif) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      this.vcr.clear();
    }
  }

}
