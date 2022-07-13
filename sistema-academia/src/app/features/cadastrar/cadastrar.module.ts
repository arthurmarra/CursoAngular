import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './components/alunos/alunos.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlunosComponent,
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class CadastrarModule { }
