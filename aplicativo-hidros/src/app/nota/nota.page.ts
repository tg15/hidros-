import { Component, OnInit } from '@angular/core';
import { CrudService } from './../banco-de-dados-de-serviços.service';
import {Router} from "@angular/router"
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  Servicos: any;
  ServicoName: string;
  ServicoAge: string;
  ServicoAddress: string;

  constructor(private crudService: CrudService, private router:Router, public alertController:AlertController) {}

  async alerta() {
    const alert = await this.alertController.create({
      header: "Compra",
      subHeader: "Deseja adicionar este serviço?",
      buttons: [
        {
          text: "Não",
          role: "Cancel",
          handler: () => {
            console.log("Compra cancelada");
          }
        }, {
          text: "Sim",
          handler: () => {
            console.log("Compra realizada");
          }
        }
      ]

    });

    await alert.present();

    
  }
  ngOnInit() {
    this.crudService.read_Servicos().subscribe(data => {
 
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
    this.crudService.create_NewServico(record).then(resp => {
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
    this.crudService.delete_Servico(rowID);
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
    this.crudService.update_Servico(recordRow.id, record);
    recordRow.isEdit = false;
  }
  verCardapio(item) {
    this.router.navigateByUrl('nota/' + item.id);
  }

 

}
