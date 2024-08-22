import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HearderComponent } from './components/hearder/hearder.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HearderComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaTarefas';
}
