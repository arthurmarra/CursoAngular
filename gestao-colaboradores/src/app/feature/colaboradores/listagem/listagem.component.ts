import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  titulo = "Listagem de Colaboradores"

  colaborador1 = { id: 7, nome: 'Nathan Carlos Exercicio', salario: 4500, cargo: 'Dev Pl' }

  constructor() { }

  ngOnInit(): void {
  }

}
