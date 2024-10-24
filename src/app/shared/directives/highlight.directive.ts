import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight = '';

  constructor(private el: ElementRef) {
    //this.el.nativeElement.style.backgroundColor = 'white';
   }
   @HostListener('mouseenter')
   onMouseEnter(){
    //this.Highlight('pink');
    this.Highlight(this.appHighlight);
   }
   @HostListener('mouseleave')
   onMouseLeave(){
    this.Highlight('');
   }
   private Highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
