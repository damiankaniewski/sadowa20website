import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule],
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  houses: any[] = [];
  selectedHouse: any = null;
  selectedFloor: boolean = true; // true - parter, false - pietro

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    this.houses = await this.firestoreService.getData('domy');
    this.houses.sort((a, b) => {
      const numA = parseInt(a.numer, 10);
      const numB = parseInt(b.numer, 10);
      return numA - numB;
    });
    this.selectHouse(this.houses[0].parter);
    this.selectedFloor = true;
  }

  selectHouse(housePart: any) {
    this.selectedHouse = housePart;
  }

  addHouses() {
    let house = {};
    for (let i = 0; i < 13; i++) {
      house = {
        pietro: {
          dostepnosc: false,
          obrazek:
            'https://firebasestorage.googleapis.com/v0/b/sadowa20-90070.appspot.com/o/sadowaPietro.png?alt=media&token=eae86636-bcc8-4a90-9e9f-b0a0368d2cda',
          metraz: 133,
          pokoje: 3,
          cena: 690800,
          numer: i + 1 + 'b',
        },
        parter: {
          obrazek:
            'https://firebasestorage.googleapis.com/v0/b/sadowa20-90070.appspot.com/o/sadowaParter.png?alt=media&token=75ffeea0-8bb1-41b6-8127-672892aa4c30',
          metraz: 132,
          numer: i + 1 + 'a',
          pokoje: 4,
          dostepnosc: true,
          cena: 750800,
        },
      };
      this.firestoreService.addData('domy', (i + 1).toString(), house);
      console.log('test');
    }
  }
}
