import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firebase/firestore.service';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule], // Importuj CommonModule
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  data: any[] = [];
  selectedHouse: any;

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    // Pobranie danych z serwisu Firebase
    this.data = await this.firestoreService.getData('houses');

    // Sortowanie danych po numerze domu
    this.data.sort((a, b) => {
      return a.numer - b.numer;
    });
  }

  openModal(house: any): void {
    this.selectedHouse = house;
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }

  downloadPDF(house: any): void {
    const doc = new jspdf.jsPDF();
    doc.setFont('times');
    doc.text(`Numer domu: ${house.numer}`, 10, 10);
    doc.text(`Metry: ${house.metraz}`, 10, 20);
    doc.text(`Liczba pokoi: ${house.pokoje}`, 10, 30);
    this.addImageToPDF(doc, house.obrazek, 10, 40, 100, 100);
    doc.save(`Sadowa_20_dom_${house.numer}.pdf`);
  }

  addImageToPDF(
    doc: any,
    imageUrl: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const img = new Image();
    img.src = imageUrl;
    doc.addImage(img, 'JPEG', x, y, width, height);
  }
}
