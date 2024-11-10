import { computed, Injectable, signal } from '@angular/core';
import { AnimalStruct } from './animals.service';


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private subset = signal<AnimalStruct[]>([{'nova': ['hello', 'world']}])

  constructor() { }


  getSubSet(){
    return computed(() => this.subset())
  }
}
