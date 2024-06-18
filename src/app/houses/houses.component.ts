import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firebase/firestore.service';
import { PdfService } from '../services/pdf/pdf.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
  floor: boolean = true;

  selectedHouse: any;

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    this.houses = await this.firestoreService.getData('domy');
    this.houses.sort((a, b) => a.numer - b.numer);
  }
}

// const doc = {
//   parter: {
//     dostepnosc: true,
//     metraz: 132,
//     numer: '1a',
//     pokoje: 4,
//     obrazek:
//       'https://firebasestorage.googleapis.com/v0/b/sadowa20-90070.appspot.com/o/sadowaParter.png?alt=media&token=75ffeea0-8bb1-41b6-8127-672892aa4c30',
//   },
//   pietro: {
//     dostepnosc: false,
//     metraz: 133,
//     numer: '1b',
//     pokoje: 3,
//     obrazek:
//       'https://firebasestorage.googleapis.com/v0/b/sadowa20-90070.appspot.com/o/sadowaPietro.png?alt=media&token=eae86636-bcc8-4a90-9e9f-b0a0368d2cda',
//   },
// };
// this.firestoreService.addData('domy', 'dom1', doc);
// this.firestoreService.addData('domy', 'dom2', doc);
// this.firestoreService.addData('domy', 'dom3', doc);
// this.firestoreService.addData('domy', 'dom4', doc);
// this.firestoreService.addData('domy', 'dom5', doc);
// this.firestoreService.addData('domy', 'dom6', doc);
// this.firestoreService.addData('domy', 'dom7', doc);
// this.firestoreService.addData('domy', 'dom8', doc);
// this.firestoreService.addData('domy', 'dom9', doc);
// this.firestoreService.addData('domy', 'dom10', doc);
// this.firestoreService.addData('domy', 'dom11', doc);
// this.firestoreService.addData('domy', 'dom12', doc);
// this.firestoreService.addData('domy', 'dom13', doc);
