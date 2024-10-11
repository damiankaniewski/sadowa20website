import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firebase/firestore.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

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

  constructor(
    private firestoreService: FirestoreService,
    private storage: AngularFireStorage
  ) {}

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

  downloadPDF(pdfPath: string) {
    this.storage
      .ref(pdfPath)
      .getDownloadURL()
      .subscribe((url) => {
        window.open(url, '_blank');
      });
  }

  getImageURL(imagePath: string) {
    return 'assets/rzuty/' + imagePath;
  }

  addHouses() {
    let house = {};
    for (let i = 0; i < 13; i++) {
      var numerDomu = i + 1;
      house = {
        pietro: {
          dostepnosc: false,
          obrazek: 'sadowaPietro.jpg',
          obrazekPoddasze: 'sadowaPoddasze.jpg',
          metraz: 133,
          pokoje: 3,
          cena: 690800,
          numer: numerDomu + 'b',
          pdf: 'pdf/' + numerDomu + 'b' + '-min.pdf',
        },
        parter: {
          obrazek: 'sadowaParter.jpg',
          metraz: 132,
          numer: numerDomu + 'a',
          pokoje: 4,
          dostepnosc: true,
          cena: 750800,
          pdf: 'pdf/' + numerDomu + 'a' + '-min.pdf',
        },
      };
      this.firestoreService.addData('domy', (i + 1).toString(), house);
    }
  }
}
