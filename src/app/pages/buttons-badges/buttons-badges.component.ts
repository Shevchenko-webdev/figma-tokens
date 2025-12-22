import { Component } from '@angular/core';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-buttons-badges',
  templateUrl: './buttons-badges.component.html',
  styleUrl: './buttons-badges.component.scss',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, IconComponent]
})
export class ButtonsBadgesComponent {}
