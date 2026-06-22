import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule],
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  private readonly secondBuildingStart = 14;

  constructor(private http: HttpClient) {}
  houses: any[] = [];
  selectedHouse: any = null;
  selectedFloor: boolean = true;

  ngOnInit() {
    this.selectedFloor = true;
    this.getData();
  }

  getData() {
    const url =
      'https://ilpk6hbe0e.execute-api.eu-north-1.amazonaws.com/dev/get-items';
    this.http.get<{ body: any[] }>(url).subscribe(
      (response) => {
        this.houses = response.body
          .map((house) => this.applyBuilding(house))
          .sort((a, b) => {
            if (a.building !== b.building) {
              return a.building - b.building;
            }

            const numA = parseInt(a.numer, 10);
            const numB = parseInt(b.numer, 10);

            if (numA !== numB) {
              return numA - numB;
            }

            const letterA = a.numer.replace(/^\d+/, '');
            const letterB = b.numer.replace(/^\d+/, '');

            return letterA.localeCompare(letterB);
          });
        this.selectHouse(this.houses[0], 0);
      },
      (error) => {
        console.error('Error in fetching houses from DynamoDB!', error);
      }
    );
  }

  toggleTooltip(house: any) {
    house.showTooltip = !house.showTooltip;
  }

  selectHouse(selectedHouse: any, index: number) {
    this.selectedHouse = selectedHouse;

    setTimeout(() => {
      const house = document.getElementById('house-' + index);
      const tableContainer = document.querySelector(
        '.table-container'
      ) as HTMLElement;

      if (house && tableContainer) {
        const stickyHeader = tableContainer.querySelector(
          '.building-header'
        ) as HTMLElement | null;
        const headerOffset = stickyHeader ? stickyHeader.offsetHeight : 0;

        const elementPosition =
          house.getBoundingClientRect().top -
          tableContainer.getBoundingClientRect().top;
        tableContainer.scrollTo({
          top: elementPosition + tableContainer.scrollTop - headerOffset,
          behavior: 'smooth',
        });
      }
    }, 0);
  }

  downloadPDF(house: any) {
    const link = document.createElement('a');
    link.href = 'assets/jpgs/' + house.numer + '_page1.jpg';
    link.download = 'sadowa20_' + house.numer + '_rzut.jpg';
    link.click();
  }

  getImageURL(imagePath: string) {
    return 'assets/rzuty/' + imagePath;
  }

  parseInt(houseNumber: string): number {
    return parseInt(houseNumber);
  }

  getIEtapHouses(): any[] {
    return this.houses;
  }

  isUnavailable(house: any): boolean {
    return house.dostepnosc === 3;
  }

  getAvailabilityLabel(house: any): string {
    if (this.isUnavailable(house)) {
      return 'Niedostępny';
    }

    if (house.dostepnosc === 1) {
      return 'Dostępny';
    }

    if (house.dostepnosc === 2) {
      return 'Zarezerwowany';
    }

    return 'Sprzedany';
  }

  private applyBuilding(house: any): any {
    // Etap II to domy z id 14-20 w bazie (numer to już docelowa numeracja 1-7).
    const building =
      parseInt(house.id, 10) >= this.secondBuildingStart ? 2 : 1;

    return { ...house, building };
  }
}
