import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewServiço(record) {
    return this.firestore.collection('Serviço').add(record);
  }
 
  read_Serviços() {
    return this.firestore.collection('Serviço').snapshotChanges();
  }
 
  update_Serviço(recordID,record){
    this.firestore.doc('Serviço/' + recordID).update(record);
  }
 
  delete_Serviço(record_id) {
    this.firestore.doc('Serviço/' + record_id).delete();
  }
}