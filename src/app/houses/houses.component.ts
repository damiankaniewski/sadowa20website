import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule],
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  houses = [
    {
      parter: {
        numer: '1a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom1_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '1b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom1_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '2a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom2_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '2b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom2_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '3a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom3_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '3b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom3_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '4a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom4_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '4b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom4_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '5a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom5_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '5b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom5_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '6a',
        dostepnosc: false,
        metraz: 100,
        pokoje: 3,
        cena: 500000,
        pdf: 'dom6_parter.pdf',
        obrazek: 'parter.png',
      },
      pietro: {
        numer: '6b',
        dostepnosc: false,
        metraz: 120,
        pokoje: 4,
        cena: 600000,
        pdf: 'dom6_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '7a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 604010,
        pdf: 'dom7_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 38.41,
      },
      pietro: {
        numer: '7b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 877393,
        pdf: 'dom7_pietro.pdf',
        obrazek: 'pietro.png',
        ogrodek: 106.18,
      },
    },
    {
      parter: {
        numer: '8a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 560082,
        pdf: 'dom8_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 37.3,
      },
      pietro: {
        numer: '8b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 835109,
        pdf: 'dom8_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '9a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 527136,
        pdf: 'dom9_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 37.3,
      },
      pietro: {
        numer: '9b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 803396,
        pdf: 'dom9_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '10a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 521645,
        pdf: 'dom10_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 37.3,
      },
      pietro: {
        numer: '10b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 792825,
        pdf: 'dom10_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '11a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 532627,
        pdf: 'dom11_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 37.3,
      },
      pietro: {
        numer: '11b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 803396,
        pdf: 'dom11_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '12a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 560082,
        pdf: 'dom12_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 37.3,
      },
      pietro: {
        numer: '12b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 835109,
        pdf: 'dom12_pietro.pdf',
        obrazek: 'pietro.png',
      },
    },
    {
      parter: {
        numer: '13a',
        dostepnosc: true,
        metraz: 54.91,
        pokoje: 2,
        cena: 631465,
        pdf: 'dom13_parter.pdf',
        obrazek: 'parter.png',
        ogrodek: 38.33,
      },
      pietro: {
        numer: '13b',
        dostepnosc: true,
        metraz: 119.34,
        pokoje: 4,
        cena: 898535,
        pdf: 'dom13_pietro.pdf',
        obrazek: 'pietro.png',
        ogrodek: 125.53,
      },
    },
  ];
  selectedHouse: any = null;
  selectedFloor: boolean = true; // true - parter, false - pietro

  ngOnInit() {
    this.selectedFloor = true;
  }

  ngAfterViewInit() {
    this.selectHouse(this.houses[6].parter, 6);
  }
  selectHouse(selectedHouse: any, index: number) {
    this.selectedHouse = selectedHouse;

    const elementParter = document.getElementById('house-parter' + index);
    const elementPietro = document.getElementById('house-pietro' + index);
    const tableContainer = document.querySelector(
      '.table-container'
    ) as HTMLElement;

    if (elementParter && tableContainer) {
      const elementPosition =
        elementParter.getBoundingClientRect().top -
        tableContainer.getBoundingClientRect().top;
      tableContainer.scrollTo({
        top: elementPosition + tableContainer.scrollTop,
        behavior: 'smooth',
      });
    }

    if (elementPietro && tableContainer) {
      const elementPosition =
        elementPietro.getBoundingClientRect().top -
        tableContainer.getBoundingClientRect().top;
      tableContainer.scrollTo({
        top: elementPosition + tableContainer.scrollTop,
        behavior: 'smooth',
      });
    }
  }

  downloadPDF(pdfPath: string) {
    // Dodaj prostą logikę do pobierania pliku PDF z katalogu `assets`
    const link = document.createElement('a');
    link.href = 'assets/pdfs/' + pdfPath;
    link.download = pdfPath;
    link.click();
  }

  getImageURL(imagePath: string) {
    return 'assets/rzuty/' + imagePath;
  }

  parseInt(houseNumber: string): number {
    return parseInt(houseNumber);
  }

  getIEtapHouses(): any[] {
    return this.houses.slice(6, 13);
  }
}
