import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  downloadPDF(house: any): void {
    const doc = new jspdf.jsPDF();
    doc.setFont('times');
    doc.text(`Numer domu: ${house.numer}`, 10, 10);
    doc.text(`Metry: ${house.metraz}`, 10, 20);
    doc.text(`Liczba pokoi: ${house.pokoje}`, 10, 30);
    //this.addImageToPDF(doc, house.obrazek, 10, 40, 100, 100);
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
