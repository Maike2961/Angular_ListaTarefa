import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../../tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  
  apiUrl = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}
  
  /* Tarefa[] retorna uma lista de objetos */
  
  getTarefas() : Observable<Tarefa[]> {

    return this.http.get<Tarefa[]>(this.apiUrl)
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa)
  }

  deleteTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`)
  }

  updateTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }
}
