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
  ServicoName2: string;
  
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
          Name2: e.payload.doc.data()['Entregáveis'],
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
    record['Entrevgáveis'] = this.ServicoName2;
    this.crudService.create_NewProjmec(record).then(resp => {
      this.ServicoName = "";
      this.ServicoAge = undefined;
      this.ServicoAddress = "";
      this.ServicoName2 = "";
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
    record.EditName2 = record.Name2;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Serviço'] = recordRow.EditName;
    record['Descrição'] = recordRow.EditAge;
    record['Briefing'] = recordRow.EditAddress;
    record['Entregáveis'] = recordRow.EditName2;
    this.crudService.update_Projmec(recordRow.id, record);
    recordRow.isEdit = false;
  }


}