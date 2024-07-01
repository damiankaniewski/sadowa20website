import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private db = firebase.firestore();

  constructor() {}

  async getData(collection: string): Promise<any[]> {
    const snapshot = await this.db.collection(collection).get();

    const sortedData = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => {
        const numA = parseInt(a.id, 10);
        const numB = parseInt(b.id, 10);
        return numA - numB;
      })
      .map((doc) => doc);

    return sortedData;
  }

  async addData(
    collection: string,
    documentName: string,
    newData: any
  ): Promise<void> {
    try {
      await this.db.collection(collection).doc(documentName).set(newData);
      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data: ', error);
    }
  }
}
