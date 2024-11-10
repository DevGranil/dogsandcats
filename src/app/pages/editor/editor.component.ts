import { Component, inject, OnInit } from '@angular/core';
import { ListComponent, ListType } from '../../core/components/list/list.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { AsyncPipe, CommonModule, KeyValuePipe } from '@angular/common';
import { AnimalsService, AnimalStruct, AnimalType } from '../../core/services/animals.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    ListComponent,
    AsyncPipe,
    KeyValuePipe,
    CommonModule
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  activeRoute = inject(ActivatedRoute)
  animalsService = inject(AnimalsService)
  private type = this.activeRoute.snapshot.queryParams['animal']

  // subSet = this.animalsService.listSubset(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)
  // superSet = this.animalsService.listSuperSet(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)
  subSet: AnimalStruct[] = [...this.animalsService.listSubset(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)()];
  superSet: AnimalStruct[] = [...this.animalsService.listSuperSet(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)()];
  superSelected: AnimalStruct | null = null;
  subSelected: AnimalStruct | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    // this.subSet = this.animalsService.listSubset(this.type === AnimalType.DOG ? AnimalType.DOG : AnimalType.CAT)

  }

  selectedSuper(item: AnimalStruct){
    this.superSelected = item
  }

  selectedSub(item: AnimalStruct){
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
}
