import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';
const DEFAULT_LABEL_ON_CLOSE = 'הרחבה';
const DEFAULT_LABEL_ON_OPEN = 'צימצום';

@Directive({
  selector: '[expandContent]',
})
export class ExpandContentDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}
  @Input('expandContent') containerId: string;
  @Input('label') labelOnClose: string;
  @Input('labelOnOpen') labelOnOpen: string;

  @HostListener('click')
  onClick() {
    const e = this.elRef.nativeElement;
    e.classList.toggle('open');
    this.elRef.nativeElement.innerHTML =
      (e.classList.contains('open') && this.labelOnOpen) || this.labelOnClose;
    const contentRef = document.querySelector(`[id=${this.containerId}]`);
    contentRef.classList.toggle('in');
  }

  ngAfterViewInit() {
    if (this.labelOnClose && !this.labelOnOpen)
      this.labelOnOpen = this.labelOnClose;
    else if (!this.labelOnClose && this.labelOnOpen)
      this.labelOnClose = DEFAULT_LABEL_ON_CLOSE;
    else if (!this.labelOnClose && !this.labelOnOpen) {
      this.labelOnOpen = DEFAULT_LABEL_ON_OPEN;
      this.labelOnClose = DEFAULT_LABEL_ON_CLOSE;
    }
    this.elRef.nativeElement.classList.add('expand-content-btn');
    this.elRef.nativeElement.innerHTML = this.labelOnClose;
    const containers = document.querySelectorAll('[container]');
    containers.forEach((container) => {
      container.classList.add('expand-content-container');
    });
  }
}
