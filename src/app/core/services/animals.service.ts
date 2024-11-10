import { inject, Injectable } from '@angular/core';
import { CatsService } from './cats.service';
import { DogsService } from './dogs.service';

export enum AnimalType{
  DOG = 'dog',
  CAT = 'cat'
}

export interface AnimalStruct {
  breed: string;
  traits: string[]
}

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
    }
  }


  listSuperSet(type: AnimalType){
    switch(type){
      case AnimalType.CAT: {
        return this.catsService.getSuperSet()
      }
      case AnimalType.DOG: {
        return this.dogService.getSuperSet()
      };
    }
  }

  udpateSubSet(type: AnimalType, subSet: AnimalStruct[]){
    switch(type){
      case AnimalType.CAT: {
        return this.catsService.updateSubset(subSet)
      }
      case AnimalType.DOG: {
        return this.dogService.updateSubset(subSet)
      };
  }}

}
