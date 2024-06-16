import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-profits',
  standalone: true,
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss'],
})
export class ProfitsComponent {
  imagePaths: string[] = [
    'assets/images/0002.png',
    'assets/images/0003.png',
    'assets/images/mainImage.png',
  ];
  activeIndex: number = 0;

  ngOnInit(): void {
    interval(4000).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagePaths.length;
    });
  }
}
