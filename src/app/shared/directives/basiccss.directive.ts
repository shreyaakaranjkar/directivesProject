import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[basicCss]'
})
export class BasicCss implements OnInit{

    constructor(private eleRef : ElementRef,
                private renderer : Renderer2){}

    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        this.eleRef.nativeElement.style.color='red';
        this.eleRef.nativeElement.style.padding = '10px';

        //to sanitize the data renderer is used

        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blueviolet');
        this.renderer.addClass(this.eleRef.nativeElement,'alert')
    }
}