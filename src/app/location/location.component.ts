import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  icon: string;
  title: string;
  content: string;
  backgroundClass: string;
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  categories: Category[] = [
    {
      icon: 'fa-cart-shopping',
      title: 'Zakupy',
      content:
        'Liczne sklepy spożywcze i usługowe w pobliżu zapewniają łatwy dostęp do codziennych potrzeb, oferując szeroki wybór produktów i usług.',
      backgroundClass: 'background-zakupy',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Edukacja',
      content:
        'Bliskość szkół i przedszkoli sprawia, że Krzyszkowice są idealne dla rodzin z dziećmi, zapewniając wysoką jakość edukacji.',
      backgroundClass: 'background-edukacja',
    },
    {
      icon: 'fa-bus',
      title: 'Transport publiczny',
      content:
        'Doskonałe połączenia komunikacyjne z Krakowem skracają czas dojazdu do centrum miasta, ułatwiając codzienne podróże.',
      backgroundClass: 'background-transport',
    },
    {
      icon: 'fa-futbol',
      title: 'Rozrywka',
      content:
        'Bogata oferta kulturalno-sportowa, basen, siłownia, sauna, korty tenisowe, aktywny trybo życia oraz rozwijanie pasji sportowych.',
      backgroundClass: 'background-rozrywka',
    },
    {
      icon: 'fa-cart-shopping',
      title: 'Usługi',
      content:
        'Różnorodne usługi w okolicy, takie jak piekarnia, paczkomat. Gwarancja wygody i komfortu życia mieszkańców Krzyszkowic.',
      backgroundClass: 'background-uslugi',
    },
    {
      icon: 'fa-seedling',
      title: 'Rekreacja',
      content:
        'Duże tereny zielone i wspólna strefa wypoczynku z altanką, idealne miejsce na relaks z rodziną i przyjaciółmi.',
      backgroundClass: 'background-rekreacja',
    },
  ];
}
