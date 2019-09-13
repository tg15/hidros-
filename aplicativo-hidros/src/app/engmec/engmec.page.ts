import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engmec',
  templateUrl: './engmec.page.html',
  styleUrls: ['./engmec.page.scss'],
})
export class EngmecPage implements OnInit {

<<<<<<< HEAD
  ProjMecs: any;
  ProjmecName: string;
  ProjmecAge: number;
  ProjmecAddress: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_ProjMecs().subscribe(data => {
 
      this.ProjMecs = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Serviço'],
          Age: e.payload.doc.data()['Descrição'],
          Address: e.payload.doc.data()['Briefing'],
        };
      })
      console.log(this.ProjMecs);
 
    }); 
  }


  CreateRecord() {
    let record = {};
    record['Serviço'] = this.ProjmecName;
    record['Descrição'] = this.ProjmecAge;
    record['Briefing'] = this.ProjmecAddress;
    this.crudService.create_NewProjmec(record).then(resp => {
      this.ProjmecName = "";
      this.ProjmecAge = undefined;
      this.ProjmecAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.crudService.delete_Projmec(rowID);
  }
  
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Serviço'] = recordRow.EditName;
    record['Descrição'] = recordRow.EditAge;
    record['Briefing'] = recordRow.EditAddress;
    this.crudService.update_Projmec(recordRow.id, record);
    recordRow.isEdit = false;
  }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> parent of 7f66cde... FUNCIONOU
}
