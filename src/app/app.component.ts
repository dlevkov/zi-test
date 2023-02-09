import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zi-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'zi-test';
  arr = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    text: `Index ${i}: This is an example of very very long test, that doesn't fits his container`,
  }));

  trackByFn(index: number, el: { id: number }) {
    return el.id;
  }
}
