import { computed, Injectable, signal } from '@angular/core';
import { AnimalStruct } from './animals.service';


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private subset = signal<AnimalStruct[]>([])
  private superSet = signal<AnimalStruct[]>([
    { breed: "Bulldog", traits: ["Friendly", "Loyal", "Calm", "Sturdy"] },
    { breed: "Poodle", traits: ["Intelligent", "Active", "Alert", "Trainable"] },
    { breed: "Beagle", traits: ["Curious", "Gentle", "Energetic", "Scent-driven"] },
    { breed: "German Shepherd", traits: ["Courageous", "Obedient", "Confident", "Protective"] },
    { breed: "Labrador Retriever", traits: ["Friendly", "Outgoing", "Playful", "Adaptable"] },
    { breed: "Dachshund", traits: ["Brave", "Independent", "Clever", "Tenacious"] },
    { breed: "Golden Retriever", traits: ["Friendly", "Intelligent", "Devoted", "Gentle"] },
    { breed: "Boxer", traits: ["Playful", "Loyal", "Patient", "Strong-willed"] },
    { breed: "Chihuahua", traits: ["Bold", "Lively", "Devoted", "Feisty"] },
    { breed: "Shih Tzu", traits: ["Affectionate", "Lively", "Friendly", "Adaptable"] },
    { breed: "Rottweiler", traits: ["Confident", "Guarding", "Steady", "Loyal"] },
    { breed: "Great Dane", traits: ["Gentle", "Friendly", "Patient", "Dignified"] },
    { breed: "Siberian Husky", traits: ["Independent", "Athletic", "Friendly", "Strong-willed"] },
    { breed: "Border Collie", traits: ["Intelligent", "Energetic", "Alert", "Agile"] },
    { breed: "Australian Shepherd", traits: ["Intelligent", "Loyal", "Energetic", "Protective"] },
    { breed: "Cocker Spaniel", traits: ["Gentle", "Friendly", "Affectionate", "Sensitive"] },
    { breed: "Pug", traits: ["Charming", "Playful", "Sociable", "Loyal"] },
    { breed: "Mastiff", traits: ["Loyal", "Dignified", "Calm", "Protective"] },
    { breed: "Bichon Frisé", traits: ["Cheerful", "Playful", "Sensitive", "Sociable"] },
    { breed: "Dalmatian", traits: ["Energetic", "Outgoing", "Playful", "Loyal"] },
    { breed: "Saint Bernard", traits: ["Gentle", "Friendly", "Protective", "Calm"] },
    { breed: "Alaskan Malamute", traits: ["Strong", "Independent", "Playful", "Affectionate"] },
    { breed: "English Springer Spaniel", traits: ["Friendly", "Energetic", "Alert", "Obedient"] },
    { breed: "Boston Terrier", traits: ["Friendly", "Lively", "Intelligent", "Adaptable"] },
    { breed: "Akita", traits: ["Loyal", "Independent", "Courageous", "Alert"] },
    { breed: "Shetland Sheepdog", traits: ["Intelligent", "Loyal", "Energetic", "Gentle"] },
    { breed: "French Bulldog", traits: ["Playful", "Adaptable", "Alert", "Affectionate"] },
    { breed: "Bull Terrier", traits: ["Energetic", "Playful", "Loyal", "Strong-willed"] },
    { breed: "Weimaraner", traits: ["Energetic", "Intelligent", "Loyal", "Affectionate"] },
    { breed: "Belgian Malinois", traits: ["Protective", "Intelligent", "Energetic", "Trainable"] },
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
