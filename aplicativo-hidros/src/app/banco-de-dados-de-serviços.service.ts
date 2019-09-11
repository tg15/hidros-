import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewServico(record, list) {
    return this.firestore.collection(`Serviço/${list}/servicos`).add(record);
  }
 
  read_Servicos(list) {
    return this.firestore.collection(`Serviço/${list}/servicos`).snapshotChanges();
  }
 
  update_Servico(recordID,record){
    this.firestore.doc('Serviço/' + recordID).update(record);
  }
 
  delete_Servico(record_id) {
    this.firestore.doc('Serviço/' + record_id).delete();
  }
}