import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../../services/tarefas.service';
import { Tarefa } from '../../../../tarefa';
import { CommonModule } from '@angular/common';
import { TarefasItemComponent } from '../tarefas-item/tarefas-item.component';
import { AddTarefasComponent } from '../add-tarefas/add-tarefas.component';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, TarefasItemComponent, AddTarefasComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefasService) { }

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe((data) => {
      this.tarefas = data
      console.log(data);
    })
  }
  AddTarefa(tarefa: Tarefa){
    this.tarefaService.addTarefa(tarefa).subscribe((t)=>{
      this.tarefas.push(t)
    })
  }

  deleteTask(tarefa: Tarefa) {
    this.tarefaService.deleteTarefa(tarefa).subscribe(() => (
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id))
    );
  }

  toggleConcluido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido
    this.tarefaService.updateTarefa(tarefa).subscribe()
  }
}
