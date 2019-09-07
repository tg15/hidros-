import { Component, OnInit } from '@angular/core';
import { CrudService } from './../banco-de-dados-de-serviços.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  Serviços: any;
  ServiçoName: string;
  ServiçoAge: number;
  ServiçoAddress: string;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Serviços().subscribe(data => {
 
      this.Serviços = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.Serviços);
 
    });
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.ServiçoName;
    record['Age'] = this.ServiçoAge;
    record['Address'] = this.ServiçoAddress;
    this.crudService.create_NewServiço(record).then(resp => {
      this.ServiçoName = "";
      this.ServiçoAge = undefined;
      this.ServiçoAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.crudService.delete_Serviço(rowID);
  }
  
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Serviço(recordRow.id, record);
    recordRow.isEdit = false;
  }

 

}
