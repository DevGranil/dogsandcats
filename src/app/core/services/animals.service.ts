import { inject, Injectable } from '@angular/core';
import { CatsService } from './cats.service';
import { DogsService } from './dogs.service';

export enum AnimalType{
  DOG = 'dog',
  CAT = 'cat'
}

export type AnimalStruct = Record<string, string[]>

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private catsService = inject(CatsService)
  private dogService = inject(DogsService)

  constructor() { }


  listSubset(type: AnimalType){
    switch(type){
      case AnimalType.CAT: {
        return this.catsService.getSubSet()
      }
      case AnimalType.DOG: {
        return this.dogService.getSubSet()
      };
      // default: {
      //   const exhaustiveCheck: never = type;
      //   console.error(`Unhandled type ${exhaustiveCheck}`)
      //   return 
      // }
    }
  }

}
