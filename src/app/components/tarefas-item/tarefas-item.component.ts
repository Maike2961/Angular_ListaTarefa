import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../../tarefa';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tarefas-item.component.html',
  styleUrl: './tarefas-item.component.css'
})
export class TarefasItemComponent {
  
  /* Recebendo a lista de tarefa do elemento pai tarefas */
  @Input() task!: Tarefa;

  /* Saindo elemento da lista de tarefa do elemento filho tarefas-item para o pai tarefas */
  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  faTimes = faTimes

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa)
  }

  onToggle(tarefa: Tarefa){
    this.onToggleConcluido.emit(tarefa)
  }


}
