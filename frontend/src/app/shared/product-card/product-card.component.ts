import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) title!: string;
  @Input() eyebrow?: string;
  @Input() description?: string;
  @Input() rating?: number;
  @Input() reviewCount?: number;
  @Input() startingPrice?: string;
  @Input() priceDetail?: string;
  @Input() ctaLabel?: string;
  @Input() path?: string;

  ratingRoundedDown(): number {
    return this.rating ? Math.round(this.rating) : 0;
  }
}
