import { computed, Injectable, signal } from '@angular/core';
import { AnimalStruct } from './animals.service';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private subset = signal<AnimalStruct[]>([{}])

  constructor() { }

  getSubSet(){
    return computed(() => this.subset())
  }

}
