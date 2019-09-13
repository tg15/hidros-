import { Component, OnInit } from '@angular/core';
import { CrudService } from './../banco-de-dados-de-serviços.service';

@Component({
  selector: 'app-engmec',
  templateUrl: './engmec.page.html',
  styleUrls: ['./engmec.page.scss'],
})
export class EngmecPage implements OnInit {

  Servicos: any;
  ServicoName: string;
  ServicoAge: string;
  ServicoAddress: string;
  
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_ProjMecs().subscribe(data => {
 
      this.Servicos = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Serviço'],
          Age: e.payload.doc.data()['Descrição'],
          Address: e.payload.doc.data()['Briefing'],
        };
      })
      console.log(this.Servicos);
 
    });
  }


  CreateRecord() {
    let record = {};
    record['Serviço'] = this.ServicoName;
    record['Descrição'] = this.ServicoAge;
    record['Briefing'] = this.ServicoAddress;
    this.crudService.create_NewProjmec(record).then(resp => {
      this.ServicoName = "";
      this.ServicoAge = undefined;
      this.ServicoAddress = "";
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


}