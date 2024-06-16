import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  buttonImage = 'assets/images/dayButton.png';
  isNightMode = false;
  toggleMode() {
    this.isNightMode = !this.isNightMode;
  }
}
