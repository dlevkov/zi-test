/* eslint-disable @typescript-eslint/no-explicit-any */
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const genericStub = {} as any;
    const directive = new TooltipDirective(
      genericStub,
      genericStub,
      genericStub,
      genericStub,
      genericStub,
      genericStub
    );
    expect(directive).toBeTruthy();
  });
});
