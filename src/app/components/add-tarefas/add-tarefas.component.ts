import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Tarefa } from '../../../../tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-tarefas',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-tarefas.component.html',
  styleUrl: './add-tarefas.component.css'
})
export class AddTarefasComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = ''
  categoria: string = ''
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  onSubmit(){
    if(!this.tarefa){
      alert('Adicione uma tarefa e categoria')
      return;
    }
    const novaTarefa ={
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa)
    this.tarefa = ''
    this.categoria = ''
    this.concluido = false
  }

  alterarVisualizacao(value: boolean){
    this.mostrarAddTarefa = value
  }
}
