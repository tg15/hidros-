import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NovoServiço(record) {
    return this.firestore.collection('Novo Serviço').add(record);
  }
 
  read_NovoServiço() {
    return this.firestore.collection('Novo Serviço').snapshotChanges();
  }
 
  update_NovoServiço(recordID,record){
    this.firestore.doc('Novo Serviço/' + recordID).update(record);
  }
 
  delete_NovoServiço(record_id) {
    this.firestore.doc('Novo Serviço/' + record_id).delete();
  }
}