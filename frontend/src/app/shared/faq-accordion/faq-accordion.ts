import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-accordion',
  imports: [],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAccordion implements OnInit {
  @Input({ required: true }) items!: FaqItem[];
  @Input() initiallyOpenIndex = 0;

  readonly openIndex = signal<number | null>(null);

  ngOnInit(): void {
    this.openIndex.set(this.initiallyOpenIndex);
  }

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
