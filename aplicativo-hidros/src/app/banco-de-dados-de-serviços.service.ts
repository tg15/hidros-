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




  create_NewStudent(record) {
    return this.firestore.collection('PC').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('PC').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('PC/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('PC/' + record_id).delete();
  }




  create_NewProjmec(record) {
    return this.firestore.collection('PM').add(record);
  }
 
  read_ProjMecs() {
    return this.firestore.collection('PM').snapshotChanges();
  }
 
  update_Projmec(recordID,record){
    this.firestore.doc('PM/' + recordID).update(record);
  }
 
  delete_Projmec(record_id) {
    this.firestore.doc('PM/' + record_id).delete();
  }





  create_NewProjprod(record) {
    return this.firestore.collection('PP').add(record);
  }
 
  read_Projprods() {
    return this.firestore.collection('PP').snapshotChanges();
  }
 
  update_Projprod(recordID,record){
    this.firestore.doc('PP/' + recordID).update(record);
  }
 
  delete_Projprod(record_id) {
    this.firestore.doc('PP/' + record_id).delete();
  }




  create_NewProjamb(record) {
    return this.firestore.collection('PA').add(record);
  }
 
  read_Projambs() {
    return this.firestore.collection('PA').snapshotChanges();
  }
 
  update_Projamb(recordID,record){
    this.firestore.doc('PA/' + recordID).update(record);
  }
 
  delete_Projamb(record_id) {
    this.firestore.doc('PA/' + record_id).delete();
  }




}