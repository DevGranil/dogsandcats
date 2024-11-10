import { Component, inject } from '@angular/core';
import { ListComponent } from '../../core/components/list/list.component';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule } from '@angular/common';
import { AnimalsService, AnimalStruct, AnimalType } from '../../core/services/animals.service';
import { SearchTextPipe } from '../../core/pipes/search-text.pipe';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule,
    SearchTextPipe
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  activeRoute = inject(ActivatedRoute)
  animalsService = inject(AnimalsService)
  private type = this.activeRoute.snapshot.queryParams['animal']

  subSet: AnimalStruct[] = [...this.animalsService.listSubset(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)()];
  superSet: AnimalStruct[] = [...this.animalsService.listSuperSet(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)()];
  superSelected: AnimalStruct | null = null;
  subSelected: AnimalStruct | null = null;
  filteredWord: string = '';

  constructor(private router: Router){}

  super(item: AnimalStruct){
    this.superSelected = item
  }

  sub(item: AnimalStruct){
    this.subSelected = item;
  }

  addToSubSet(){
    if(!this.superSelected) return;
    this.subSet = [...this.subSet, this.superSelected]
    this.superSelected = null;
  }

  addAll(){
    this.subSet = [];
    this.subSet = [...this.superSet]
  }

  removeAll(){
    this.subSet = [];
  }

  removeFromSubSet(){
    if(!this.subSelected) return;
    const index = this.subSet.findIndex(e => e.breed === this.subSelected?.breed)
    this.subSet.splice(index, 1)
    this.subSelected = null;
  }

  save(){
    this.animalsService.udpateSubSet(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT, this.subSet)

    this.router.navigate([''])
  }

  cancel(){
    this.router.navigate([''])
  }

  searchWord({ value }: HTMLInputElement){
    this.filteredWord = value;
  }

  moveUp(){
    if(!this.subSelected) return;
    const index = this.subSet.findIndex(e => e.breed === this.subSelected?.breed);
    const arranged: AnimalStruct[]= []

    // at the start already
    if(index === 0) return;
    
    for(let [i, item] of this.subSet.entries()){
      // push up
      if(i === index - 1){
        arranged.push(this.subSelected)
        continue;
      }

      // push before next
      if(i === index){
        arranged.push(this.subSet[index - 1])
        continue;
      }

      arranged.push(item)

    }

    this.subSet = arranged;
  }

  moveDown(){
    if(!this.subSelected) return;
    const index = this.subSet.findIndex(e => e.breed === this.subSelected?.breed);
    const arranged: AnimalStruct[]= []

    // end of list
    if(index === this.subSet.length - 1) return;
    
    for(let [i, item] of this.subSet.entries()){
      // push down
      if(i === index + 1){
        arranged.push(this.subSelected)
        continue;
      }

      // push next up
      if(i === index){
        arranged.push(this.subSet[index + 1])
        continue;
      }

      arranged.push(item)

    }

    this.subSet = arranged;
  }


}
