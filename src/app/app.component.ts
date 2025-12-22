import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonComponent, RouterOutlet],
  standalone: true
})
export class AppComponent {
  private readonly router = inject(Router);

  goToButtonsBadges(): void {
    this.router.navigate(['/buttons-badges']);
  }
}
