import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {
    @Input() appHighlight = '';
    @Input() defaultColor = 'cyan';

    constructor(private elementRef: ElementRef) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appHighlight) {
            this.highlightColor(this.appHighlight || this.defaultColor);
        }
    }

    ngOnInit(): void {
        // this.highlightColor(this.appHighlight);
        console.log(this.appHighlight);
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.highlightColor(this.appHighlight || this.defaultColor);
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.highlightColor('');
    // }

    highlightColor(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }
}
