import { Component, inject } from '@angular/core';
import { AnimalsService, AnimalType } from '../../core/services/animals.service';
import { ListComponent } from '../../core/components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  animalsService = inject(AnimalsService);
  animalTypes = AnimalType;
  cats = this.animalsService.listSubset(AnimalType.CAT)
  dogs = this.animalsService.listSubset(AnimalType.DOG)
}
