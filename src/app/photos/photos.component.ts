import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [BrowserModule, SlickCarouselModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  images = [
    'assets/images/brama.jpg',
    'assets/images/noc.jpg',
    'assets/images/ogrod.jpg',
    'assets/images/szereg.jpg',
    'assets/images/zgory.jpg',
    'assets/images/zielony.jpg',
    'assets/images/zachod.jpg',
  ];

  slideConfig = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  };
}
