import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuColumn } from '../nav-data';

@Component({
  selector: 'app-mega-menu',
  imports: [RouterLink],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MegaMenu {
  @Input({ required: true }) columns!: MegaMenuColumn[];
}
