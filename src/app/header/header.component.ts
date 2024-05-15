import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.scrollService.scrollToElement(element);
    }
  }
}
