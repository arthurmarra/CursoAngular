import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListatasksComponent } from './components/listatasks/listatasks.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListatasksComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListatasksComponent,
    TasksComponent
  ]
})
export class TasksModule { }
