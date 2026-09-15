import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuColumn } from '../nav-data';

@Component({
  selector: 'app-mega-menu',
  imports: [RouterLink],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MegaMenuComponent {
  @Input({ required: true }) columns!: MegaMenuColumn[];
}
