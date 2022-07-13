import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../models/alunos.models';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: Array<Alunos> = [
    { id: 1, nome: 'Nathan Carlos', valorMensalidade: 100, dataUltimoPgto: '2021-07-23', dataInclusaoSistema: '2021-07-01' },
    { id: 2, nome: 'Alan Jhonnes', valorMensalidade: 100, dataUltimoPgto: '2021-07-10', dataInclusaoSistema: '2021-05-02' },
    { id: 3, nome: 'Arthur Marra', valorMensalidade: 100, dataUltimoPgto: '2021-07-05', dataInclusaoSistema: '2021-03-17' } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
