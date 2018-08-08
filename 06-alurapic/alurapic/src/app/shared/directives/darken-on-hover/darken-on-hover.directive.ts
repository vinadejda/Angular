import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';
import { filter } from '../../../../../node_modules/rxjs/operators';

@Directive({
    selector: '[ apDarkenOnHover ]'
})

export class DarkenOnHoverDirective{

    constructor(
        private el: ElementRef,
        private render:Renderer
    ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }
    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}