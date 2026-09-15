import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeader {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() viewAllLabel?: string;
  @Input() viewAllPath?: string;
}
