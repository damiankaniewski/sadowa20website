import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuActive: boolean = false;

  constructor(private scrollService: ScrollService) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.scrollService.scrollToElement(element);
      this.menuActive = false; // Zamknij menu po kliknięciu
    }
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
