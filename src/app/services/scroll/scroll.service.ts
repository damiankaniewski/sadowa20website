import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
