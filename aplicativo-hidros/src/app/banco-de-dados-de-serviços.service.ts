import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewServico(record) {
    return this.firestore.collection('Serviço').add(record);
  }
 
  read_Servicos() {
    return this.firestore.collection('Serviço').snapshotChanges();
  }
 
  update_Servico(recordID,record){
    this.firestore.doc('Serviço/' + recordID).update(record);
  }
 
  delete_Servico(record_id) {
    this.firestore.doc('Serviço/' + record_id).delete();
  }
}