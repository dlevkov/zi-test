import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zi-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  content: string | null = '';
  isActive = true;
  left = 0;
  top = 0;
}
