import {Component, computed, inject, input, InputSignal} from '@angular/core';
import {IconName} from "../../types/icon-name.type";
import {ICONS} from "../../assets/icons/icons.registry";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'ui-icon',
  standalone: true,
  template: `
    <span class="icon" [innerHTML]="safeSvg()"></span>
  `
})
export class IconComponent {
  private sanitizer = inject(DomSanitizer);

  readonly name: InputSignal<IconName> = input.required();

  protected readonly safeSvg = computed<SafeHtml>(() => {
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name()])
  });
}
