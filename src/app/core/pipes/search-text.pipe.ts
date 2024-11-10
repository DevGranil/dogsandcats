import { Pipe, PipeTransform } from '@angular/core';
import { AnimalStruct } from '../services/animals.service';

@Pipe({
  name: 'searchText',
  standalone: true
})
export class SearchTextPipe implements PipeTransform {

  transform(value: AnimalStruct[], ...args: string[]): AnimalStruct[] {
    const word = args[0].toLowerCase();
    const filteredList: AnimalStruct[] = []

    for(let i of value){
      if(i.breed.toLowerCase().includes(word)) {
        filteredList.push(i)
        continue
      }

      for(let j of i.traits){
        if(j.toLowerCase().includes(word)){
          filteredList.push(i)
        }
      }
    }
    return filteredList;
  }

}
