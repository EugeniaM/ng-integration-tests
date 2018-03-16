import {Directive, Input, ElementRef, OnChanges, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {
  @HostBinding('style.backgroundColor') customBgColor = '';
  defaultColor =  'yellow';
  @Input('highlight') bgColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.customBgColor = this.bgColor || this.defaultColor;
  }
}
