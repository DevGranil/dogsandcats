import { computed, Injectable, signal } from '@angular/core';
import { AnimalStruct } from './animals.service';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private subset = signal<AnimalStruct[]>([])
  private superSet = signal<AnimalStruct[]>([
    { breed: "Siamese", traits: ["Vocal", "Social", "Playful"] },
    { breed: "Maine Coon", traits: ["Gentle", "Large", "Friendly"] },
    { breed: "Persian", traits: ["Quiet", "Affectionate", "Calm"] },
    { breed: "Ragdoll", traits: ["Laid-back", "Friendly", "Docile"] },
    { breed: "Bengal", traits: ["Energetic", "Curious", "Intelligent"] },
    { breed: "British Shorthair", traits: ["Easygoing", "Loyal", "Quiet"] },
    { breed: "Sphynx", traits: ["Social", "Affectionate", "Lively"] },
    { breed: "Abyssinian", traits: ["Active", "Curious", "Playful"] },
    { breed: "Scottish Fold", traits: ["Sweet", "Calm", "Intelligent"] },
    { breed: "Burmese", traits: ["Social", "Playful", "Loyal"] },
    { breed: "Russian Blue", traits: ["Gentle", "Intelligent", "Reserved"] },
    { breed: "Norwegian Forest Cat", traits: ["Independent", "Friendly", "Adaptable"] },
    { breed: "Oriental Shorthair", traits: ["Vocal", "Lively", "Loyal"] },
    { breed: "American Shorthair", traits: ["Easygoing", "Independent", "Gentle"] },
    { breed: "Birman", traits: ["Friendly", "Curious", "Patient"] },
    { breed: "Chartreux", traits: ["Quiet", "Loyal", "Intelligent"] },
    { breed: "Turkish Angora", traits: ["Playful", "Intelligent", "Social"] },
    { breed: "Exotic Shorthair", traits: ["Quiet", "Affectionate", "Loyal"] },
    { breed: "Cornish Rex", traits: ["Energetic", "Curious", "Social"] },
    { breed: "Devon Rex", traits: ["Mischievous", "Affectionate", "Playful"] },
  ])
  constructor() { }

  getSubSet(){
    return computed(() => this.subset())
  }

  getSuperSet(){
    return computed(() => this.superSet())
  }

  updateSubset(subset: AnimalStruct[]){
    this.subset.update(() => subset)
  }

}
