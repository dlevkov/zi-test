import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[ziOverflowTooltip]',
})
export class TooltipDirective implements OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private componentRef: ComponentRef<any> | null = null;
  private hasView = false;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer2,
    private srv: TooltipService
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.createComponent();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }
  ngOnDestroy(): void {
    this.destroy();
  }
  private isOverflow(el: HTMLElement): boolean {
    return this.srv.isOverflow(el);
  }
  private createComponent() {
    if (this.componentRef === null) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);

      this.renderer.appendChild(
        this.elementRef.nativeElement,
        this.componentRef.location.nativeElement
      );

      this.setTooltipComponentProperties(
        this.componentRef.instance,
        this.elementRef.nativeElement
      );
    }
  }

  private setTooltipComponentProperties(
    cmpRef: TooltipComponent,
    elemRef: HTMLElement
  ) {
    return this.srv.setTooltipComponentProperties(cmpRef, elemRef);
  }
  private destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
