import {Component, ContentChild, ElementRef, input, InputSignal} from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [disabled]="disabled()">
      <span class="icon">
        <ng-content select="[icon-start]"/>
      </span>

      <span class="label">
    <ng-content/>
  </span>
      
      <span class="icon">
        <ng-content select="[icon-end]"/>
      </span>
    </button>
  `,
  standalone: true,
})
export class ButtonComponent {
  readonly disabled: InputSignal<boolean> = input(false);

  @ContentChild('[icon-start]', { read: ElementRef }) leadingIcon?: ElementRef;
  @ContentChild('[icon-end]', { read: ElementRef }) trailingIcon?: ElementRef;
}
