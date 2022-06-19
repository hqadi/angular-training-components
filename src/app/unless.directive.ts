import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    private hasView = false;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set appUnless(condition: boolean) {
            if(!condition && !this.hasView) {
                // add element
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true
            } else if (condition && this.hasView) {
                // remove element
                this.viewContainer.clear();
                this.hasView = false;
            }
    }
}
