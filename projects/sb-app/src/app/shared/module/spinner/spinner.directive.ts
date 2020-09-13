import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

}
