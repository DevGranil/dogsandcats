import { Component, inject } from '@angular/core';
import { ListComponent } from './core/components/list/list.component';
import { AnimalsService, AnimalType } from './core/services/animals.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
