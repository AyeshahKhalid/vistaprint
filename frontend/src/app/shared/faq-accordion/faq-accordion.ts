import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';

export interface FaqItem {
  question: string;
  /** Omit when Figma has no authored answer for this question — renders the question with no answer content, matching the design. */
  answer?: string;
  /** Optional lead-in line shown above a table (e.g. "Here's a rundown of sizes by shape:"). */
  answerIntro?: string;
  /** Optional two-column table rendered below the intro/answer (e.g. shape -> size). */
  table?: { label: string; value: string }[];
  /** Optional closing line shown below the table. */
  answerOutro?: string;
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
