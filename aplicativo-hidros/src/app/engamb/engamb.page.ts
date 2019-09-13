import { Component, OnInit } from '@angular/core';

import { CrudService } from './../banco-de-dados-de-serviços.service';

@Component({
  selector: 'app-engamb',
  templateUrl: './engamb.page.html',
  styleUrls: ['./engamb.page.scss'],
})
export class EngambPage implements OnInit {
  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;


  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Projambs().subscribe(data => {
 
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

}
