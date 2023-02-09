import { Injectable } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  public isOverflow(el: HTMLElement): boolean {
    const curOverflow = el.style.overflow;
    if (!curOverflow || curOverflow === 'visible') el.style.overflow = 'hidden';
    const isOverflowing =
      el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    el.style.overflow = curOverflow;
    return isOverflowing;
  }
  public setTooltipComponentProperties(
    cmpRef: TooltipComponent,
    elemRef: HTMLElement
  ) {
    if (cmpRef !== null) {
      cmpRef.isActive = this.isOverflow(elemRef);
      cmpRef.content = elemRef.textContent;
      const { left, right, bottom } = elemRef.getBoundingClientRect();
      cmpRef.left = (right - left) / 2 + left;
      cmpRef.top = bottom;
    }
    return cmpRef;
  }
}
