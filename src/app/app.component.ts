import { Component } from '@angular/core';
import {ButtonComponent} from "./ui/button/button.component";
import {BadgeComponent} from "./ui/badge/badge.component";
import {IconComponent} from "./ui/icon/icon.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    ButtonComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent
  ],
  standalone: true
})
export class AppComponent {
}
