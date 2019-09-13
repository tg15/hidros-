import { Component, OnInit } from '@angular/core';
import { CrudService } from './../banco-de-dados-de-serviços.service';

@Component({
  selector: 'app-engci',
  templateUrl: './engci.page.html',
  styleUrls: ['./engci.page.scss'],
})
export class EngciPage implements OnInit {
  
  Projcis: any;
  ProjciName: string;
  ProjciAge: number;
  ProjciAddress: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Projcis().subscribe(data => {
 
      this.Projcis = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Serviço'],
          Age: e.payload.doc.data()['Descrição'],
          Address: e.payload.doc.data()['Briefing'],
        };
      })
      console.log(this.Projcis);
 
    });
  }

  CreateRecord() {
    let record = {};
    record['Serviço'] = this.ProjciName;
    record['Descrição'] = this.ProjciAge;
    record['Briefing'] = this.ProjciAddress;
    this.crudService.create_NewProjci(record).then(resp => {
      this.ProjciName = "";
      this.ProjciAge = undefined;
      this.ProjciAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.crudService.delete_Projci(rowID);
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
    this.crudService.update_Projci(recordRow.id, record);
    recordRow.isEdit = false;
  }
}

